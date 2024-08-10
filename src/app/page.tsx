import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar } from "./_components/ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
const Home = () => {
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
        <div className="relative mt-6 h-[250px] w-full">
          <Image
            alt="Agende nos melhores The Brothers"
            src="/banner-01.png"
            fill
            className="rounded-xl object-center"
          />
        </div>
        <Card className="mt-6">
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
            <div className="flex flex-col items-center justify-center gap-2 border-l-2 border-solid pr-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:20</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default Home
