import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mobileTextSizes = {
  hero: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  heading: "text-2xl sm:text-3xl md:text-4xl",
  subheading: "text-xl sm:text-2xl md:text-3xl",
  body: "text-sm sm:text-base md:text-lg",
  small: "text-xs sm:text-sm",
}
