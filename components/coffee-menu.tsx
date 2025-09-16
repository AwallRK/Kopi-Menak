"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"

const menuItems = [
  {
    id: 1,
    name: "Signature Espresso",
    image: "https://res.cloudinary.com/dabfgxhyk/image/upload/v1757487708/kopinya_nwc3lh.jpg",
  },
  {
    id: 2,
    name: "Traditional Signature",
    image: "https://res.cloudinary.com/dabfgxhyk/image/upload/v1757487706/produk3_uc2qba.jpg",
  },
  {
    id: 3,
    name: "Western Touchs",
    image: "https://res.cloudinary.com/dabfgxhyk/image/upload/v1757487706/product2_cezyju.jpg",
  },
  {
    id: 4,
    name: "Latte Artisan",
    image: "/coffee-latte-with-latte-art.jpg",
  },
]

export function CoffeeMenu() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-amber-50/30 to-orange-50/20 relative" id="menu">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-4 bg-amber-800/5 rounded-full float-animation"
            style={{
              left: `${10 + i * 30}%`,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${6 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 md:mb-6 shimmer-effect">
              Our Coffee Menu
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
              Carefully crafted beverages using the finest beans, roasted to perfection for your enjoyment.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-lift coffee-glow cursor-coffee"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 sm:p-6 smooth-transition coffee-theme-hover">
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 text-center">{item.name}</h3>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
