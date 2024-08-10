import { Card, CardContent } from "./ui/card"
import { Badge } from "lucide-react"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"

const BookingItem = () => {
  return (
    <>
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
    </>
  )
}

export default BookingItem
