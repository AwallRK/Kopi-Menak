"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"

const dineInImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dabfgxhyk/image/upload/v1757487709/area_ngopi_abcj07.jpg",
    alt: "Cozy seating area with comfortable chairs",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dabfgxhyk/image/upload/v1757487708/area6_xp2f0u.jpg",
    alt: "Modern workspace area perfect for studying",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dabfgxhyk/image/upload/v1757487708/area3_vliqz8.jpg",
    alt: "Intimate corner seating for conversations",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dabfgxhyk/image/upload/v1757487707/area5_iohbdu.jpg",
    alt: "Spacious dining area with natural lighting",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dabfgxhyk/image/upload/v1757487707/area2_gae7cn.jpg",
    alt: "Outdoor seating with garden view",
  },
]

export function DineInGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth
    let scrollPosition = 0

    const autoScroll = () => {
      scrollPosition += 1
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0
      }
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: "auto",
      })
    }

    const interval = setInterval(autoScroll, 30) // Smooth continuous scroll

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="dine-in">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 md:mb-6">
              Dine-In Experience
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
              Discover our thoughtfully designed spaces, perfect for work, relaxation, or catching up with friends.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-hidden mb-12 md:mb-16 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Duplicate images for seamless loop */}
            {[...dineInImages, ...dineInImages].map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 w-80 sm:w-96 aspect-[4/3] relative rounded-xl md:rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white">
                  <p className="text-sm sm:text-lg font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              className="relative aspect-[3/2] rounded-xl md:rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="https://res.cloudinary.com/dabfgxhyk/image/upload/v1757487707/store_ldzotx.jpg"
                alt="Kopi Menak exterior view"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="relative aspect-[3/2] rounded-xl md:rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="https://res.cloudinary.com/dabfgxhyk/image/upload/v1757487708/kopi_ywnxgq.jpg"
                alt="Coffee preparation area"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
