"use client"
import { motion } from "framer-motion"
import { Instagram, ShoppingCart, Phone, MessageCircle, ArrowUpRight, Coffee, Clock, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Menu: [
      { name: "Espresso", href: "/404" },
      { name: "Coffee Blends", href: "/404" },
      { name: "Cold Brew", href: "/404" },
      { name: "Pastries", href: "/404" },
      { name: "Light Meals", href: "/404" },
    ],
    About: [
      { name: "Our Story", href: "/404" },
      { name: "Coffee Sourcing", href: "/404" },
      { name: "Brewing Methods", href: "/404" },
      { name: "Events", href: "/404" },
      { name: "Careers", href: "/404" },
    ],
    Support: [
      { name: "Contact", href: "/404" },
      { name: "Reservations", href: "/404" },
      { name: "Catering", href: "/404" },
      { name: "Gift Cards", href: "/404" },
      { name: "FAQ", href: "/404" },
    ],
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/kopimenak/" },
    {
      name: "ShoppingCart",
      icon: ShoppingCart,
      href: "https://gofood.co.id/bandung/restaurant/kopi-menak-rancaekek-d53fecf8-bba6-44d2-8cf7-c2c6cd560b22?as=gmaps",
    },
    { name: "Whatsapp", icon: MessageCircle, href: "https://wa.me/082295523567" },
    { name: "Phone", icon: Phone, href: "tel:+6281234567890" },
  ]

  return (
    <footer className="bg-white/[0.02] border-t border-white/[0.02] mt-16">
      <div className="container-custom py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Coffee className="text-amber-600" size={24} />
                Kopi Menak
              </h3>
              <p className="text-sm sm:text-base text-neutral-800 mb-6 leading-relaxed">
                Premium coffee experience in the heart of Jatinangor. We serve carefully crafted coffee blends and
                create a warm, welcoming space for coffee lovers to gather and connect.
              </p>
              <div className="space-y-2 mb-6 text-xs sm:text-sm text-neutral-800">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-amber-600" />
                  <span>Jl. Rancaekek, Jatinangor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-amber-600" />
                  <span>Open Daily 7AM - 10PM</span>
                </div>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-neutral-900 mb-3 sm:mb-4 text-sm sm:text-base">{category}</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-xs sm:text-sm text-neutral-800 hover:text-neutral-900 transition-colors duration-200 group flex items-center"
                        >
                          {link.name}
                          <ArrowUpRight
                            size={12}
                            className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-6 sm:pt-8 pb-4 border-t border-neutral-200 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-neutral-800 text-center">
            <p>&copy; {currentYear} Kopi Menak. All rights reserved.</p>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="/404" className="hover:text-neutral-900 transition-colors">
                Privacy Policy
              </a>
              <a href="/404" className="hover:text-neutral-900 transition-colors">
                Terms of Service
              </a>
              <a href="/404" className="hover:text-neutral-900 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
