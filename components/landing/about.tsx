
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Handshake, DollarSign, Heart, UserPlus, ArrowRight } from "lucide-react"

export function About() {
 return (
  <section id="about" className="relative py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
   <div className="container px-4 mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
     {/* Text Content */}
     <div className="lg:w-1/2 space-y-8 animate-in slide-in-from-left duration-1000 delay-200">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
       <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
       </span>
       <p>Who We Are</p>
      </div>

      <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
       Empowering <span className="text-primary">Community</span> Through Action
      </h2>

      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
       <p>
        <strong className="text-foreground font-semibold">SPAZA HUB</strong> is a visionary youth-led organization committed to equipping the youth of Vrygrond with the skills, mindset, and resources to transform their futures.
       </p>
       <p>
        We go beyond traditional education—sharing critical knowledge on social issues, sustainable living, and enterprise development. Born from our response to the COVID-19 pandemic, we have evolved into a catalyst for long-lasting, systemic change.
       </p>
      </div>

      <Button variant="default" size="lg" className="rounded-full bg-[#462f2f] hover:bg-[#2d1e1e] text-white px-8 h-12 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
       Read Our Story <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
     </div>

     {/* Action Grid */}
     <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full animate-in slide-in-from-right duration-1000 delay-300">
      {[
       { icon: Handshake, title: "Volunteer", desc: "Join our team on the ground" },
       { icon: DollarSign, title: "Donate", desc: "Support our initiatives" },
       { icon: Heart, title: "Fundraise", desc: "Start a campaign for us" },
       { icon: UserPlus, title: "Join Us", desc: "Become a member today" }
      ].map((item, index) => (
       <Card key={index} className=" relative bg-accent group cursor-pointer border shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500">
        <CardContent className="p-8 flex flex-col items-end justify-end text-end gap-4">
         <div className="h-16 w-16 rounded-2xl bg-transparent flex items-center justify-center group-hover:bg-background transition-colors duration-500 absolute top-3 left-3">
          <item.icon className="h-8 w-8 text-background group-hover:text-white transition-colors duration-500" />
         </div>
         <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#462f2f]">{item.title}</h3>
          <p className="text-lg text-muted">{item.desc}</p>
         </div>
        </CardContent>
       </Card>
      ))}
     </div>
    </div>
   </div>
  </section>
 )
}
