
import Image from "next/image"
import { WaveConnector } from "./wave-connector"

const images = [
 "/images/1.jpg", "/images/2.jpg", "/images/3.jpg",
 "/images/4.jpg", "/images/61.jpg", "/images/6.jpg",
 "/images/62.jpg", "/images/49.jpg", "/images/31.jpg",
 "/images/11.jpg"
]

export function Gallery() {
 return (
  <section id="gallery" className="relative py-32 bg-zinc-50 dark:bg-zinc-950/50 overflow-hidden">
   {/* Top Wave Connector from Articles */}
   <WaveConnector position="top" colorClassName="fill-background" />

   <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
     <h2 className="text-4xl md:text-5xl font-black mb-6">Our <span className="text-primary">Moments</span></h2>
     <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Capturing the spirit of community, collaboration, and change in Vrygrond.</p>
    </div>

    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
     {images.map((img, i) => (
      <div key={i} className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer bg-muted shadow-sm hover:shadow-xl transition-all duration-500">
       <Image
        src={img}
        alt={`Gallery image ${i + 1} - SpazaHub Activity`}
        width={500}
        height={500}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-105 saturate-0 group-hover:saturate-100"
        sizes="(max-width: 768px) 50vw, 25vw"
       />
       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <span className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Moment</span>
       </div>
      </div>
     ))}
    </div>
   </div>
   {/* Bottom Wave Connector to Footer */}
   <WaveConnector position="bottom" colorClassName="fill-[#1a1111]" />
  </section>
 )
}
