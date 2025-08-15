"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Lead Veterinarian",
    image: "/smiling-veterinarian.png",
    description: "15+ years of experience in veterinary medicine with specialization in emergency care and surgery.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Senior Veterinarian",
    image: "/smiling-bearded-vet.png",
    description:
      "Specialized in exotic pets and dental care with a gentle approach that puts both pets and owners at ease.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Master Groomer",
    image: "/placeholder-1o3fl.png",
    description: "Certified master groomer with expertise in breed-specific cuts and stress-free grooming techniques.",
  },
  {
    id: 4,
    name: "Lisa Thompson",
    role: "Veterinary Technician",
    image: "/smiling-vet-tech.png",
    description: "Experienced vet tech specializing in patient care, laboratory work, and client education.",
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Pet Care Specialist",
    image: "/smiling-male-vet-assistant.png",
    description: "Passionate about animal behavior and nutrition, helping pets live their healthiest, happiest lives.",
  },
  {
    id: 6,
    name: "Maria Garcia",
    role: "Client Care Coordinator",
    image: "/placeholder-dd1gi.png",
    description: "Your first point of contact, ensuring smooth scheduling and exceptional customer service experience.",
  },
]

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  const getVisibleMembers = () => {
    const members = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % teamMembers.length
      members.push(teamMembers[index])
    }
    return members
  }

  return (
    <div className="relative">
      {/* Desktop View - 3 cards */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-8">
          {getVisibleMembers().map((member, index) => (
            <div
              key={member.id}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View - 1 card */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="w-full flex-shrink-0 px-4">
                <div className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Auto-play indicator */}
      <div className="text-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          {isAutoPlaying ? "Pause" : "Play"} Auto-scroll
        </button>
      </div>
    </div>
  )
}
