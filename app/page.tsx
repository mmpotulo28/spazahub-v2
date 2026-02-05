import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { MissionVision } from "@/components/landing/mission-vision";
import { Team } from "@/components/landing/team";
import { Articles } from "@/components/landing/articles";
import { Projects } from "@/components/landing/projects";
import { Gallery } from "@/components/landing/gallery";
import { Footer } from "@/components/landing/footer";
import { WaveConnector } from "@/components/landing/wave-connector";

export default function Home() {
 return (
  <main className="min-h-screen bg-background font-sans antialiased text-foreground">
   <Navbar />
   <WaveConnector position="top" colorClassName="fill-background h-20 md:h-30" />
   <Hero />
   <About />
   <MissionVision />
   <Team />
   <Articles />
   <Projects />
   <Gallery />
   <Footer />
  </main>
 );
}