import { Header } from "../../components/Header"
import { TopHeader } from "../../components/TopHeader"
import { HeroSection } from "../components/HeroSection"

export function Home() {
  return (
    <>
      <TopHeader />
      <main className="custom-container pt-8 min-h-screen">
        <Header />
        <HeroSection />
      </main>
    </>
  )
}
