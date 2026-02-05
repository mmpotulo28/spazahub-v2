
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ExternalLink, CalendarDays } from "lucide-react"
import { WaveConnector } from "./wave-connector"
import Link from "next/link"

const articles = [
 { title: "Responding to the unknown", desc: "The engagement aimed to assist teenagers in developing effective crisis response methods.", image: "/images/article1.jpg", link: "https://amava.org/covid-19-response/", date: "Oct 12, 2023" },
 { title: "Food Flow in Vrygrond", desc: "To combat hunger during the pandemic, the project set up food kitchens that served meals twice a day...", image: "/images/1.jpg", link: "https://tekano.org.za/2021/07/08/food-flow-in-vrygrond/", date: "Sep 28, 2023" },
 { title: "Moving at the speed of trust", desc: "Community action in the time of COVID-19: Moving at the speed of trust; sitting with complexity ...", image: "/images/article3.jpg", link: "https://anzteagle.com/articles/cans-covid-19", date: "Aug 15, 2023" },
]

export function Articles() {
 return (
  <section id="articles" className="relative py-32 bg-zinc-50 dark:bg-zinc-900 border-t border-border/40 overflow-hidden">
   <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col items-center mb-16 text-center">
     <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
      Our Blog
     </div>
     <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground tracking-tight">Latest <span className="text-primary">Articles</span></h2>
     <p className="text-muted-foreground text-lg max-w-2xl">Stay updated with our latest stories, insights, and community impact reports.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
     {articles.map((article, i) => (
      <Card key={i} className="pt-0 group overflow-hidden flex flex-col border shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 bg-card h-full">
       <div className="relative aspect-16/10 overflow-hidden">
        <Image
         src={article.image}
         alt={article.title}
         fill
         className="object-cover transition-transform duration-700 group-hover:scale-105"
         sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
       </div>
       <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
         <CalendarDays className="h-3 w-3" />
         <span>{article.date}</span>
        </div>
        <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
       </CardHeader>
       <CardContent className="grow pt-0">
        <p className="text-muted-foreground leading-relaxed line-clamp-3">{article.desc}</p>
       </CardContent>
       <CardFooter className="bg-background border-none">
        <Link href={article.link} target="_blank" rel="noopener noreferrer" className="flex items-center w-full py-2 rounded-md justify-between hover:bg-primary/5 hover:text-primary group-hover:px-6 transition-all duration-300">
         Read Full Article <ExternalLink className="ml-2 h-4 w-4" />
        </Link>
       </CardFooter>
      </Card>
     ))}
    </div>
   </div>

   {/* Bottom Wave Connector to Gallery */}
   <WaveConnector position="bottom" colorClassName="fill-background" />
  </section>
 )
}
