import { CalendarIcon, HomeIcon, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { LogOutIcon } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet"
import { quickSearchOption } from "./_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"

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
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex items-center gap-3 border-b border-solid py-5">
              <Avatar>
                <AvatarImage
                  src={
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
                  }
                />
              </Avatar>
              <div>
                <p className="font-bold">Rafael Oliveira</p>
                <p className="text-xs">RafaelOliveira.io</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-b border-solid p-5">
              <SheetClose>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href="/">
                    <HomeIcon size={18} />
                    Inicio
                  </Link>
                </Button>
              </SheetClose>
              <Button className="justify-start gap-2" variant="ghost">
                <CalendarIcon size={18} />
                Agendamentos
              </Button>
            </div>
            <div className="flex flex-col gap-3 border-b border-solid p-5">
              {quickSearchOption.map((option) => (
                <Button
                  className="justify-start gap-2"
                  key={option.title}
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
              ))}
            </div>
            <div className="flex flex-col gap-2 border-b border-solid p-5">
              <Button className="justify-start gap-2" variant="ghost">
                <LogOutIcon size={18} />
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}
export default Header
