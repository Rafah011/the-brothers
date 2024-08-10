import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOption } from "./_components/_constants/search"
import BookingItem from "./_components/booking-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershop = await db.barbershop.findMany({})
  console.log({ barbershops })
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Rafael</h2>
        <p>Segunda-Feira , 10 de agosto</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca" />
          <Button variant="outline">
            <SearchIcon />
          </Button>
        </div>
        <div className="flex gap-3 overflow-auto pt-6 [&::-webkit-scrollbar]:hidden">
          {quickSearchOption.map((option) => (
            <Button key={option.title} className="gap-3" variant="secondary">
              <Image
                src={option.imageUrl}
                width={40}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>
        <div className="relative mt-6 h-[250px] w-full">
          <Image
            alt="Agende nos melhores The Brothers"
            src="/banner-01.png"
            fill
            className="rounded-xl object-center"
          />
        </div>
        <BookingItem />

        <h2 className="text-gray- 400 mb-3 mt-6 text-xs font-bold uppercase">
          Recomendados
        </h2>
        <div className="flex flex-row gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="text-gray- 400 mb-3 mt-6 text-xs font-bold uppercase">
          Populares
        </h2>
        <div className="flex flex-row gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              {" "}
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}
export default Home
