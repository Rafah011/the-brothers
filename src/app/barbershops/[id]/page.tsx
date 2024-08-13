import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/_components/ui/button"
import { StarIcon } from "lucide-react"
import { notFound } from "next/navigation"
import ServiceItem from "@/app/_components/service-item"
import Footer from "@/app/_components/footer"
import PhoneItem from "@/app/_components/phone-item"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop?.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon size={18} className="text-primary" />

          <p className="text-sm font-semibold">{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon size={18} className="fill-primary text-primary" />
          <p className="text-xs font-semibold">5.0 (889 avaliações)</p>
        </div>
      </div>
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre Nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>
      <div className="mb-3 p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
        <div className="space-y-3 border-b border-solid p-5">
          {barbershop.services.map((service) => (
            <ServiceItem service={service} key={service.id} />
          ))}
        </div>
      </div>
      <div className="space-y-3 p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Contatos</h2>
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
export default BarbershopPage
