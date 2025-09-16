"use client"
import { motion } from "framer-motion"
import { Coffee, Home } from "lucide-react"
import Link from "next/link"

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Coffee size={80} className="text-amber-600" />
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                !
              </motion.div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-neutral-900 mb-4">404</h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800 mb-4">Page Not Found</h2>
          <p className="text-sm sm:text-base text-neutral-600 mb-8 leading-relaxed px-4">
            Oops! It looks like this page is still brewing. We're working hard to serve you the best content, but this
            particular page isn't ready yet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-700 transition-colors duration-200 text-sm sm:text-base"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <div className="text-xs sm:text-sm text-neutral-500">
            <p>This page is under development and will be available soon.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-xs text-neutral-400"
        >
          <p>© 2024 Kopi Menak - Premium Coffee Experience</p>
        </motion.div>
      </div>
    </div>
  )
}
