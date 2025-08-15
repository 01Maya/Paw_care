"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"

interface FadeInSectionProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export default function FadeInSection({ children, delay = 0, direction = "up", className = "" }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransformClass = () => {
    if (isVisible) return "translate-x-0 translate-y-0"

    switch (direction) {
      case "up":
        return "translate-y-8"
      case "down":
        return "-translate-y-8"
      case "left":
        return "translate-x-8"
      case "right":
        return "-translate-x-8"
      default:
        return "translate-y-8"
    }
  }

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  )
}
