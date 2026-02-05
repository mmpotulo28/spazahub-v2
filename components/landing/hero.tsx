
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, ChevronRight } from "lucide-react"
import { WaveConnector } from "./wave-connector"

export function Hero() {
 return (
  <section className="relative h-[90vh] min-h-175 w-full flex items-center justify-center overflow-hidden">
   <div
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
    style={{ backgroundImage: "url('/images/mission.jpg')" }}
   >
    <div className="absolute inset-0 bg-black/60 bg-linear-to-b from-black/80 via-black/50 to-background/90" />
   </div>

   {/* Content */}
   <div className="container relative z-10 px-4 flex flex-col items-center text-center">
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards max-w-4xl mx-auto">
     <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 backdrop-blur-md border border-primary/20 mb-4 animate-pulse">
      <span className="relative flex h-2 w-2">
       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
       <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      <span className="text-primary font-medium text-xs sm:text-sm tracking-wide uppercase">Youth-Led Transformation</span>
     </div>

     <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-2xl leading-[1.1]">
      Empowering the <br className="hidden sm:block" />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-yellow-400 to-primary bg-size-[200%_auto] animate-shine">
       Youth of Vrygrond
      </span>
     </h1>

     <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
      Spaza Hub acts as a catalyst for change, incubating youth entrepreneurship, digital skills, and sustainable community development.
     </p>


     <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center w-full">

      <Link href="#mission" className="bg-primary flex items-center h-14 px-8 text-lg rounded-full  hover:-translate-y-1 transition-all duration-300 text-black font-bold w-full sm:w-auto">
       Join Our Mission
       <ChevronRight className="ml-2 h-5 w-5" />
      </Link>
      <Link href="#projects" className="h-14 px-8 text-lg flex items-center rounded-full border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white hover:text-white hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
       View Projects
      </Link>
     </div>
    </div>
   </div>

   {/* Scroll Indicator */}
   <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10 cursor-pointer hidden md:block">
    <Link href="#about" aria-label="Scroll down" className="flex flex-col items-center gap-2 text-white/50 hover:text-primary transition-colors duration-300">
     <span className="text-xs uppercase tracking-widest">Scroll</span>
     <ArrowDown className="h-6 w-6" />
    </Link>
   </div>

   {/* Decorative Wave Connector */}
   <WaveConnector position="bottom" colorClassName="fill-zinc-50 h-20 md:h-30" />
  </section>
 )
}
