
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail } from "lucide-react"
import { WaveConnector } from "./wave-connector"

export function Navbar() {
 return (
  <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 dark:bg-zinc-950/95">
   {/* Top bar */}
   <div className="bg-[#462f2f] text-white py-2 text-xs md:text-sm">
    <div className="container mx-auto flex justify-center md:justify-end gap-6 px-4">
     <a href="tel:+27630645348" className="flex items-center gap-2 hover:text-[#fdb864] transition-colors"><Phone className="h-3 w-3 md:h-4 md:w-4" /> <span>+27 63 064 5348</span></a>
     <a href="mailto:info@spazahub.org" className="flex items-center gap-2 hover:text-[#fdb864] transition-colors"><Mail className="h-3 w-3 md:h-4 md:w-4" /> <span>info@spazahub.org</span></a>
    </div>
   </div>
   <div className="container mx-auto flex h-20 items-center justify-between px-4">
    <Link href="/" className="flex items-center gap-2">
     <Image src="/images/logo.png" alt="SpazaHub Logo" width={50} height={50} className="h-12 w-auto" />
     <span className="font-bold hidden sm:inline-block text-primary text-2xl tracking-tight">SpazaHub</span>
    </Link>
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700 dark:text-zinc-200">
     <Link href="#about" className="hover:text-primary transition-colors">About</Link>
     <Link href="#mission" className="hover:text-primary transition-colors">Mission</Link>
     <Link href="#articles" className="hover:text-primary transition-colors">Articles</Link>
     <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
     <Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link>
    </nav>
    <div className="flex items-center gap-4">
     <Button className="hidden md:inline-flex rounded-full font-semibold">Join Us</Button>
     <Button variant="ghost" size="icon" className="md:hidden">
      <Menu className="h-6 w-6" />
      <span className="sr-only">Toggle menu</span>
     </Button>
    </div>


   </div>

  </header>
 )
}
