"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Golden Retriever Owner",
    image: "/testimonial-sarah.png", // Updated to use generated testimonial images
    rating: 5,
    text: "The team at PawCare treated my Max like their own. The emergency care saved his life, and I couldn't be more grateful for their expertise and compassion. They truly go above and beyond for every pet.",
    petName: "Max",
    service: "Emergency Care",
  },
  {
    id: 2,
    name: "Mike R.",
    role: "Cat Parent",
    image: "/testimonial-mike.png", // Updated to use generated testimonial images
    rating: 5,
    text: "Luna was so anxious about grooming until we found PawCare. Now she actually enjoys her spa days! The gentle approach makes all the difference. The staff is incredibly patient and caring.",
    petName: "Luna",
    service: "Pet Grooming",
  },
  {
    id: 3,
    name: "Jennifer L.",
    role: "Multi-Pet Family",
    image: "/testimonial-jennifer.png", // Updated to use generated testimonial images
    rating: 5,
    text: "With three pets, I need a team I can trust completely. PawCare has been our family's go-to for years. Professional, caring, and always available when we need them. Highly recommend!",
    petName: "Buddy, Mia & Oscar",
    service: "Comprehensive Care",
  },
  {
    id: 4,
    name: "David K.",
    role: "German Shepherd Owner",
    image: "/testimonial-david-k.png", // Updated David K's testimonial image to use new professional headshot
    rating: 5,
    text: "Dr. Johnson and her team provided exceptional care during Rex's surgery. Their communication throughout the process was outstanding, and Rex recovered beautifully. We're so grateful!",
    petName: "Rex",
    service: "Veterinary Surgery",
  },
  {
    id: 5,
    name: "Maria S.",
    role: "Rescue Cat Mom",
    image: "/testimonial-maria.png", // Updated to use generated testimonial images
    rating: 5,
    text: "When I adopted Whiskers, she was very scared and defensive. The team at PawCare was incredibly patient and helped her feel comfortable. Now she purrs during her check-ups!",
    petName: "Whiskers",
    service: "Behavioral Support",
  },
  {
    id: 6,
    name: "Robert T.",
    role: "Senior Dog Parent",
    image: "/testimonial-robert-t.png", // Updated Robert T's image to use new professional headshot
    rating: 5,
    text: "Caring for an aging pet requires special attention, and PawCare delivers exactly that. They've helped make Bella's golden years comfortable and happy. The compassion they show is remarkable.",
    petName: "Bella",
    service: "Senior Pet Care",
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  const getVisibleTestimonials = () => {
    const testimonials_visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      testimonials_visible.push(testimonials[index])
    }
    return testimonials_visible
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="relative">
      {/* Desktop View - 3 testimonials */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-card rounded-2xl p-8 shadow-lg border border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                index === 1 ? "scale-105 shadow-xl" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-card-foreground text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <div className="flex gap-1 mt-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">"{testimonial.text}"</p>

              <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                <span className="font-medium">Pet: {testimonial.petName}</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{testimonial.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View - 1 testimonial */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <div className="flex gap-1 mt-1">{renderStars(testimonial.rating)}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">"{testimonial.text}"</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                    <span className="font-medium">Pet: {testimonial.petName}</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                      {testimonial.service}
                    </span>
                  </div>
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
          className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex
                  ? "bg-primary scale-125 shadow-lg"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
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
          className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Auto-play indicator and stats */}
      <div className="text-center mt-6 space-y-2">
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium">5.0 Average Rating</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
          <span>{testimonials.length} Happy Customers</span>
        </div>
      </div>
    </div>
  )
}
