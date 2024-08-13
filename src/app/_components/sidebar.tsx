import { SheetContent, SheetHeader, SheetClose, SheetTitle } from "./ui/sheet"
import Image from "next/image"
import { LogOutIcon } from "lucide-react"
import Link from "next/link"
import { CalendarIcon, HomeIcon } from "lucide-react"
import { Button } from "./ui/button"
import { quickSearchOption } from "./_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"

const Sidebar = () => {
  return (
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
        <SheetClose asChild>
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
  )
}
export default Sidebar
