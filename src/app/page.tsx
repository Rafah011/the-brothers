import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import { Badge } from "./_components/ui/badge"
import { Avatar } from "./_components/ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import BarbershopItem from "./_components/barbershop-item"

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
          <Button className="gap-3" variant="secondary">
            <Image src="/cabelo.svg" width={40} height={16} alt="Cabelo" />
            Cabelo
          </Button>
          <Button className="gap-3" variant="secondary">
            <Image src="/barba.svg" width={40} height={16} alt="Barba" />
            Barba
          </Button>
          <Button className="gap-3" variant="secondary">
            <Image
              src="/acabamento.svg"
              width={40}
              height={16}
              alt="Acabamento"
            />
            Acabamento
          </Button>
          <Button className="gap-3" variant="secondary">
            <Image
              src="/hidratacao.svg"
              width={40}
              height={16}
              alt="Hidratação"
            />
            hidratação
          </Button>
          <Button className="gap-3" variant="secondary">
            <Image
              src="/sobrancelha.svg"
              width={40}
              height={16}
              alt="Sobrancelha"
            />
            Sobrancelha
          </Button>
          <Button className="gap-3" variant="secondary">
            <Image src="/massagem.svg" width={40} height={16} alt="Massagem" />
            Massagem
          </Button>
        </div>
        <div className="relative mt-6 h-[250px] w-full">
          <Image
            alt="Agende nos melhores The Brothers"
            src="/banner-01.png"
            fill
            className="rounded-xl object-center"
          />
        </div>
        <h2 className="text-gray- 400 mb-3 mt-6 text-xs font-bold uppercase">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia The Brothers</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 border-l-2 border-solid pl-20 pr-10">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:20</p>
            </div>
          </CardContent>
        </Card>
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
