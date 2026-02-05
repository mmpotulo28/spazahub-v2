
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WaveConnector } from "./wave-connector"

export function Footer() {
 return (
  <footer className="bg-[#1a1111] text-white pt-24 pb-8 relative overflow-hidden">
   {/* Top Wave Connector from Gallery (Light) */}
   <WaveConnector position="top" colorClassName="fill-white" />

   {/* Geometric Decoration */}
   <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full mix-blend-overlay filter blur-[120px] opacity-10 pointer-events-none" />

   <div className="container mx-auto px-4 relative z-10">
    {/* Sponsors Removed - Moved to seperate component */}
    {/* <div className="mb-20 border-b border-white/5 pb-16">...</div> */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 whitespace-no-wrap">
     {/* Brand */}
     <div className="lg:col-span-4 space-y-6">
      <div className="relative w-32 h-32">
       <Image src="/images/logo.png" alt="Logo" fill className="object-contain brightness-0 invert opacity-90" sizes="128px" />
      </div>
      <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
       Equipping the youth of Vrygrond with skills, mindset, and opportunities to better themselves and their community.
      </p>
      <div className="flex gap-4 pt-2">
       {[Facebook, Twitter, Instagram].map((Icon, i) => (
        <Button key={i} size="icon" variant="ghost" className="rounded-full hover:bg-primary hover:text-[#1a1111] text-zinc-400 transition-all">
         <Icon className="h-5 w-5" />
        </Button>
       ))}
      </div>
     </div>

     {/* Links */}
     <div className="lg:col-span-2 lg:col-start-6">
      <h4 className="font-bold text-lg mb-6 text-white">Explore</h4>
      <ul className="space-y-4">
       {["Home", "About", "Mission", "Projects", "Gallery"].map((item) => (
        <li key={item}>
         <a href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-zinc-400 hover:text-primary transition-colors inline-block">{item}</a>
        </li>
       ))}
      </ul>
     </div>

     {/* Contact */}
     <div className="lg:col-span-3">
      <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
      <ul className="space-y-6">
       <li className="flex gap-4 items-center group">
        <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors border border-white/5">
         <Phone className="h-4 w-4 text-primary" />
        </div>
        <a href="tel:+27630645348" className="text-zinc-400 group-hover:text-primary transition-colors">+27 63 064 5348</a>
       </li>
       <li className="flex gap-4 items-center group">
        <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors border border-white/5">
         <Mail className="h-4 w-4 text-primary" />
        </div>
        <a href="mailto:info@spazahub.org" className="text-zinc-400 group-hover:text-primary transition-colors">info@spazahub.org</a>
       </li>
       <li className="flex gap-4 items-start group">
        <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors border border-white/5 mt-1">
         <MapPin className="h-4 w-4 text-primary" />
        </div>
        <span className="text-zinc-400 text-sm leading-relaxed">869 Berg St, Muizenberg,<br />Cape Town, 7945</span>
       </li>
      </ul>
     </div>

     {/* CTA */}
     <div className="lg:col-span-3 lg:col-start-10">
      <h4 className="font-bold text-lg mb-6 text-white">Make an Impact</h4>
      <p className="text-zinc-400 text-sm mb-6">Your support changes lives. Join us in making a difference today.</p>
      <Button className="w-full rounded-full bg-primary text-black hover:bg-[#ffb31a] font-bold shadow-lg shadow-orange-900/20">
       Donate Now
      </Button>
     </div>
    </div>

    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600 gap-4">
     <p>&copy; {new Date().getFullYear()} Spaza Hub. <span className="hidden sm:inline">All rights reserved.</span></p>
     <div className="flex gap-6 items-center">
      <p className="flex items-center gap-1">
       Built by <a href="http://manelisim.pages.dev" className="text-zinc-500 hover:text-primary transition-colors">Manelisi Mpotulo</a>
      </p>
      <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-colors" aria-label="Back to top">
       <ArrowUp className="h-4 w-4" />
      </a>
     </div>
    </div>
   </div>
  </footer>
 )
}
