import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"
import Link from "next/link"

interface BarbershopItemProps {
  barbershop: Barbershop
}
const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[169px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        <div className="relative h-[159px] w-[159px]">
          <Image
            alt="barbershop.name"
            src={barbershop.imageUrl}
            fill
            className="rounded-2xl object-center"
          />
          <Badge className="absolute left-2 top-2" variant="secondary">
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold">5.0</p>
          </Badge>
        </div>
        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button className="mt-4 w-full" variant="secondary" asChild>
            <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
export default BarbershopItem
