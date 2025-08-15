"use client"

import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import { useState } from "react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: "blue" | "orange" | "red" | "green"
  delay?: number
}

const colorVariants = {
  blue: {
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverColor: "group-hover:text-blue-600",
    buttonHover: "group-hover:bg-blue-50 group-hover:border-blue-200",
    gradient: "from-blue-500/20 to-blue-600/20",
  },
  orange: {
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverColor: "group-hover:text-orange-600",
    buttonHover: "group-hover:bg-orange-50 group-hover:border-orange-200",
    gradient: "from-orange-500/20 to-orange-600/20",
  },
  red: {
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    hoverColor: "group-hover:text-red-600",
    buttonHover: "group-hover:bg-red-50 group-hover:border-red-200",
    gradient: "from-red-500/20 to-red-600/20",
  },
  green: {
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    hoverColor: "group-hover:text-green-600",
    buttonHover: "group-hover:bg-green-50 group-hover:border-green-200",
    gradient: "from-green-500/20 to-green-600/20",
  },
}

export default function ServiceCard({ icon: Icon, title, description, features, color, delay = 0 }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const variants = colorVariants[color]

  return (
    <div
      className={`group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-border cursor-pointer relative overflow-hidden ${
        isExpanded ? "scale-105 z-10" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Background gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${variants.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div
          className="absolute top-4 right-4 w-2 h-2 bg-current rounded-full animate-ping"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-8 right-8 w-1 h-1 bg-current rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-current rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10">
        {/* Icon with enhanced animation */}
        <div
          className={`w-16 h-16 ${variants.iconBg} rounded-full flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
        >
          <Icon className={`w-8 h-8 ${variants.iconColor} group-hover:scale-110 transition-transform duration-300`} />
        </div>

        {/* Title with stagger animation */}
        <h3
          className={`text-2xl font-bold text-card-foreground mb-4 ${variants.hoverColor} transition-all duration-300 group-hover:scale-105 origin-left`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>

        {/* Expandable features list */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 pt-2 border-t border-border/50">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-2 h-2 ${variants.iconBg} rounded-full flex-shrink-0`} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive button */}
        <Button
          variant="outline"
          className={`w-full ${variants.buttonHover} transition-all duration-300 bg-transparent group-hover:scale-105 group-hover:shadow-md relative overflow-hidden`}
          onClick={(e) => {
            e.stopPropagation()
            // Add ripple effect
            const button = e.currentTarget
            const ripple = document.createElement("span")
            const rect = button.getBoundingClientRect()
            const size = Math.max(rect.width, rect.height)
            const x = e.clientX - rect.left - size / 2
            const y = e.clientY - rect.top - size / 2

            ripple.style.width = ripple.style.height = size + "px"
            ripple.style.left = x + "px"
            ripple.style.top = y + "px"
            ripple.classList.add(
              "absolute",
              "bg-current",
              "rounded-full",
              "opacity-30",
              "animate-ping",
              "pointer-events-none",
            )

            button.appendChild(ripple)
            setTimeout(() => ripple.remove(), 600)
          }}
        >
          {isExpanded ? "Book Now" : "Learn More"}
        </Button>
      </div>

      {/* Corner decoration */}
      <div
        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${variants.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
    </div>
  )
}
