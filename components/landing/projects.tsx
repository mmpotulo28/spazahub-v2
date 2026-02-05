
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight, Info, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const projects = [
 {
  title: "Dignity Packs Project",
  desc: "Providing basic hygiene essentials to individuals in need through monthly packages.",
  image: "/images/2.jpg",
  content: ["Reusable bag", "Toiletries", "Sanitary pads", "Snacks"],
  article: "https://amava.org/wp-content/uploads/2021/04/Learning-to-Fly-during-a-Pandemic-.pdf"
 },
 {
  title: "Community Kitchen",
  desc: "A hub for education, socialization, and support serving nutritious meals to the community.",
  image: "/images/64.jpg",
  content: ["Daily Meals", "Nutritional Support", "Skills Training"],
  article: "https://amava.org/wp-content/uploads/2021/04/Learning-to-Fly-during-a-Pandemic-.pdf"
 },
 {
  title: "Gender Based Violence",
  desc: "Social spaces for dialogue and engagement to combat GBV and support victims.",
  image: "/images/62.jpg",
  content: ["Support Groups", "Awareness Events", "Legal Aid Access"],
  article: "https://news.trust.org/item/20201202104815-x9dwu/"
 }
]

export function Projects() {
 return (
  <section id="projects" className="py-24 bg-background relative">
   {/* Background decoration */}
   <div className="absolute inset-0 bg-[radial-gradient(#462f2f_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>

   <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
     <div className="max-w-2xl">
      <div className="inline-flex items-center gap-2 mb-4">
       <span className="h-px w-8 bg-primary"></span>
       <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Initiatives</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">Impactful <span className="text-primary">Projects</span></h2>
     </div>
     <Button variant="outline" className="hidden md:flex rounded-full border-muted-foreground/20">
      View All Projects <ArrowRight className="ml-2 h-4 w-4" />
     </Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {projects.map((project, i) => (
      <Card key={i} className="pt-0 group overflow-hidden flex flex-col border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full bg-white dark:bg-card">
       <div className="relative aspect-4/3 overflow-hidden">
        <Image
         src={project.image}
         alt={project.title}
         fill
         className="object-cover transition-transform duration-700 group-hover:scale-110"
         sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        <div className="absolute bottom-4 left-4 right-4">
         <h3 className="text-2xl font-bold text-white drop-shadow-md">{project.title}</h3>
        </div>
       </div>

       <CardContent className="grow pt-6 space-y-4">
        <p className="text-muted-foreground leading-relaxed">{project.desc}</p>

        <div className="pt-2">
         <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <Info className="h-4 w-4 text-primary" /> Key Components
         </h4>
         <div className="flex flex-wrap gap-2">
          {project.content.length > 0 ? (
           project.content.map((item, j) => (
            <span key={j} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
             {item}
            </span>
           ))
          ) : (
           <span className="text-sm text-muted-foreground italic">ongoing initiative</span>
          )}
         </div>
        </div>
       </CardContent>

       <CardFooter className="pt-1 bg-background border-none">
        <Link href={project.article} target="_blank" rel="noopener noreferrer" className=" flex items-center text-background py-2 px-4 w-fit rounded-full bg-[#462f2f] hover:bg-primary hover:text-[#462f2f] transition-colors duration-300">
         Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
       </CardFooter>
      </Card>
     ))}
    </div>

    <div className="mt-12 text-center md:hidden">
     <Button variant="outline" className="rounded-full w-full">
      View All Projects <ArrowRight className="ml-2 h-4 w-4" />
     </Button>
    </div>
   </div>
  </section>
 )
}
