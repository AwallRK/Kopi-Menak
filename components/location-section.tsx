"use client"
import { MapPin, Clock } from "lucide-react"
import { Reveal } from "./reveal"

export function LocationSection() {
  const getCurrentDay = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[new Date().getDay()]
  }

  const currentDay = getCurrentDay()

  const openingHours = [
    { day: "Wednesday", hours: "7:00 AM - 10:00 PM" },
    { day: "Thursday", hours: "11:00 AM - 10:00 PM" },
    { day: "Friday", hours: "11:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "11:00 AM - 10:00 PM" },
    { day: "Sunday", hours: "11:00 AM - 10:00 PM" },
    { day: "Monday", hours: "11:00 AM - 10:00 PM" },
    { day: "Tuesday", hours: "11:00 AM - 10:00 PM" },
  ]

  return (
    <section className="py-12 md:py-20 bg-neutral-900 text-white" id="location">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Visit Us</h2>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto px-4">
              Located in the heart of Jatinangor, we're easy to find and always ready to serve you the perfect cup.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal delay={0.2}>
            <div className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-2">Address</h3>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                      Jl. Rancaekek, Mekargalih, Kec. Jatinangor
                      <br />
                      Kabupaten Bandung, Jawa Barat 40394
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold mb-3">Opening Hours</h3>
                    <div className="bg-neutral-800/50 rounded-lg p-1 md:p-2 border border-neutral-700">
                      <div className="space-y-0.5 md:space-y-1">
                        {openingHours.map((schedule) => (
                          <div
                            key={schedule.day}
                            className={`flex justify-between items-center text-[10px] md:text-xs ${schedule.day === currentDay
                                ? "bg-amber-500/20 px-1 md:px-2 py-0.5 md:py-1 rounded-md border border-amber-500/30"
                                : ""
                              }`}
                          >
                            <span
                              className={`${schedule.day === currentDay ? "text-amber-300 font-semibold" : "text-white/80"
                                }`}
                            >
                              {schedule.day}
                            </span>
                            <span
                              className={`font-medium ${schedule.day === currentDay ? "text-amber-300" : "text-amber-400"
                                }`}
                            >
                              {schedule.hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8956!2d107.774245057671!3d-6.95587300159448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTcnMjEuMSJTIDEwN8KwNDYnMjcuMyJF!5e0!3m2!1sen!2sid!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl md:rounded-2xl"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
