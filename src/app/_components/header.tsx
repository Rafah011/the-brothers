import { CalendarIcon, HomeIcon, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet"
import { quickSearchOption } from "./_constants/search"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="The Brothers" src="/Logo.png" height={18} width={120} />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left">Menu </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2 border-b border-solid p-5">
              <Button className="justify-start gap-2" variant="ghost">
                <HomeIcon size={18} />
                Inicio
              </Button>
              <Button className="justify-start gap-2" variant="ghost">
                <CalendarIcon size={18} />
                Agendamentos
              </Button>
            </div>
            <div className="flex flex-col gap-2 border-b border-solid p-5">
              {quickSearchOption.map((option) => {
                ;<Button
                  key={option.title}
                  className="justify-start gap-2"
                  variant="ghost"
                >
                  <Image
                    alt={option.title}
                    src={option.imageUrl}
                    height={18}
                    width={18}
                  />
                  {option.title}
                </Button>
              })}
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}
export default Header
