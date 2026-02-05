
import Image from "next/image"
import { WaveConnector } from "./wave-connector"

export function MissionVision() {
 return (
  <section id="mission" className="relative bg-[#462f2f] text-white overflow-hidden">
   {/* Top Wave Connector from About (Light) */}
   <WaveConnector position="top" colorClassName="fill-zinc-50" />
   {/* Mission */}
   <div className="grid md:grid-cols-2 bg-[#462f2f]">
    <div className="relative min-h-100 md:min-h-150 group overflow-hidden">
     <Image
      src="/images/mission.jpg"
      alt="Mission"
      fill
      className="object-cover transition-transform duration-1000 group-hover:scale-110"
      sizes="(max-width: 768px) 100vw, 50vw"
     />
     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
    </div>
    <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center relative">
     {/* Decorative Pattern */}
     <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
      <svg viewBox="0 0 100 100" className="fill-current text-primary rotate-45">
       <rect width="100" height="100" />
      </svg>
     </div>

     <div className="relative z-10">
      <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
       Our Purpose
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white tracking-tight">Our <span className="text-primary">Mission</span></h2>

      <ul className="space-y-8">
       {[
        "To establish a youth-led incubator in Vrygrond that is a safe learning space for the community to access skills, resources, and networks of support.",
        "To offer safe spaces for dialogue around social issues.",
        "To stimulate sharing of resources and skills within the community."
       ].map((item, i) => (
        <li key={i} className="flex gap-6 items-start group">
         <div className="h-8 w-1 bg-primary mt-1 rounded-full shrink-0 group-hover:h-full transition-all duration-500 ease-in-out" />
         <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed group-hover:text-white transition-colors">{item}</p>
        </li>
       ))}
      </ul>
     </div>
    </div>
   </div>

   {/* Vision */}
   <div className="grid md:grid-cols-2">
    <div className="relative min-h-100 md:min-h-150 md:order-2 group overflow-hidden">
     <Image
      src="/images/vision2.jpg"
      alt="Vision"
      fill
      className="object-cover transition-transform duration-1000 group-hover:scale-110"
      sizes="(max-width: 768px) 100vw, 50vw"
     />
     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
    </div>
    <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center bg-[#3a2626] md:order-1 relative overflow-hidden">
     {/* Decorative Blob */}
     <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>

     <div className="relative z-10">
      <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
       Future Goal
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white tracking-tight">Our <span className="text-primary">Vision</span></h2>
      <blockquote className="text-2xl md:text-4xl leading-snug italic font-serif font-light text-zinc-200">
       &ldquo;We imagine a world where youth are inspired and equipped to create <span className="text-primary font-normal not-italic">social change</span> within their communities.&rdquo;
      </blockquote>
     </div>
    </div>
   </div>

   {/* Bottom Wave Connector to Team Section */}
   <WaveConnector position="bottom" colorClassName="fill-zinc-50" />
  </section>
 );
}
