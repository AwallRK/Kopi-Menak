"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoffeeMenu } from "@/components/coffee-menu"
import { DineInGallery } from "@/components/dine-in-gallery"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { AmbientEffects } from "@/components/ambient-effects"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AmbientEffects />
      <Header />
      <HeroSection />
      <CoffeeMenu />
      <DineInGallery />
      <LocationSection />
      <Footer />
    </main>
  )
}
