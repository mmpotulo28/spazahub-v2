"use client"

import Image from "next/image"
import { WaveConnector } from "./wave-connector"

export function TrustedPartners() {
 const partners = [
  { id: 1, name: "Partner 1", logo: "/images/sponsor1.png", description: "Supporting community initiatives" },
  { id: 2, name: "Partner 2", logo: "/images/sponsor2.png", description: "Empowering youth development" },
  { id: 3, name: "Partner 3", logo: "/images/sponsor3.png", description: "Tech for social good" },
  { id: 4, name: "Partner 4", logo: "/images/sponsor4.png", description: "Building better futures" },
  { id: 5, name: "Partner 5", logo: "/images/sponsor5.png", description: "Sustainable community growth" },
  // Repeat for better marquee effect if needed
  { id: 6, name: "Partner 1", logo: "/images/sponsor1.png", description: "Supporting community initiatives" },
  { id: 7, name: "Partner 2", logo: "/images/sponsor2.png", description: "Empowering youth development" },
  { id: 8, name: "Partner 3", logo: "/images/sponsor3.png", description: "Tech for social good" },
  { id: 9, name: "Partner 4", logo: "/images/sponsor4.png", description: "Building better futures" },
  { id: 10, name: "Partner 5", logo: "/images/sponsor5.png", description: "Sustainable community growth" },
 ]

 return (
  <section className="py-24 bg-white relative overflow-hidden">
   {/* Top Wave Connector matching previous dark section hopefully */}
   <WaveConnector position="top" colorClassName="fill-zinc-50" />

   <div className="container mx-auto px-4 relative z-10">
    <div className="text-center max-w-2xl mx-auto mb-16">
     <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Trusted Partners & Sponsors</h2>
     <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6" />
     <p className="text-muted-foreground text-lg">
      We are proud to work with these amazing organizations who share our vision for Vrygrond.
     </p>
    </div>

    <div className="relative w-full overflow-hidden mask-linear-fade">
     {/* Marquee Container */}
     <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap py-10">
      {partners.map((partner, idx) => (
       <div
        key={`${partner.id}-${idx}`}
        className="group relative flex items-center justify-center min-w-37.5 md:min-w-50 transition-all duration-300"
       >
        {/* Card / Logo Container */}
        <div className="relative w-full h-24 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 cursor-pointer">
         <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain"
         />
        </div>

        {/* Simple Hover Popup */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 pointer-events-none bg-white shadow-lg rounded-lg px-4 py-2 text-sm text-center border whitespace-normal w-48 z-20">
         <p className="font-semibold text-primary">{partner.name}</p>
        </div>
       </div>
      ))}
     </div>

     {/* Gradient Masks for edges */}
     <div className="absolute top-0 left-0 h-full w-24 bg-linear-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
     <div className="absolute top-0 right-0 h-full w-24 bg-linear-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />
    </div>

    {/* Call to Action for Partnership */}
    <div className="mt-16 text-center">
     <p className="text-muted-foreground mb-4">Want to partner with SpazaHub?</p>
     <a href="#contact" className="text-primary font-bold hover:underline underline-offset-4">Get in touch with us &rarr;</a>
    </div>
   </div>

   {/* CSS for Marquee (Inline for simplicity or add to globals.css) */}
   <style jsx global>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 40s linear infinite;
            }
            .animate-marquee:hover {
                animation-play-state: paused;
            }
        `}</style>
  </section>
 )
}
