
import Image from "next/image"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WaveConnector } from "./wave-connector"

const team = [
 { name: "Nolubabalo", role: "Project Manager", image: "/images/exec1.jpg" },
 { name: "Asavuya Mantongomane", role: "Social Media Coordinator", image: "/images/exec2.2.jpg" },
 { name: "Linda Nonkqayi", role: "Kitchen Manager", image: "/images/exec3.jpg" },
]

export function Team() {
 return (
  <section id="team" className="py-32 bg-zinc-50/50 relative">
   <div className="container mx-auto px-4 relative z-20">
    <div className="text-center mb-20 animate-in fade-in zoom-in duration-700">
     <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
      The People
     </div>
     <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground tracking-tight">Meet the <span className="text-primary">Team</span></h2>
     <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">The dedicated individuals behind SpazaHub working tirelessly to empower the youth of Vrygrond.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
     {team.map((member) => (
      <Card key={member.name} className="overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 bg-card group h-full pt-0">
       <div className="aspect-square relative w-full overflow-hidden bg-muted">
        <Image
         src={member.image}
         alt={member.name}
         fill
         className="object-cover transition-transform duration-700 group-hover:scale-105"
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
       </div>
       <CardContent className="p-8 text-center flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">{member.name}</h3>
        <p className="text-primary font-medium uppercase tracking-wider text-sm mb-6">{member.role}</p>

        <div className="mt-auto flex gap-3">
         <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white transition-colors border-muted-foreground/20">
          <Facebook className="h-4 w-4" />
         </Button>
         <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white transition-colors border-muted-foreground/20">
          <Twitter className="h-4 w-4" />
         </Button>
         <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white transition-colors border-muted-foreground/20">
          <Instagram className="h-4 w-4" />
         </Button>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>
   </div>

   {/* Bottom Wave Connector to Articles */}
   <WaveConnector position="bottom" colorClassName="fill-zinc-50" />
  </section>
 )
}
