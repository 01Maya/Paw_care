"use client"

import { Button } from "@/components/ui/button"
import { Heart, Shield, Clock, Award, Phone, Mail, MapPin, Menu, X, Stethoscope, Scissors, Pill } from "lucide-react"
import { useState, useEffect } from "react"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import AnimatedCounter from "@/components/animated-counter"
import FadeInSection from "@/components/fade-in-section"
import FloatingElements from "@/components/floating-elements"
import ServiceCard from "@/components/service-card"
import TeamFlipCard from "@/components/team-flip-card"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "team", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">PawCare</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Expert Pet Care</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-all duration-300 font-medium hover:scale-105 ${
                activeSection === "home" ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-all duration-300 hover:scale-105 ${
                activeSection === "services" ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-all duration-300 hover:scale-105 ${
                activeSection === "about" ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className={`transition-all duration-300 hover:scale-105 ${
                activeSection === "team" ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`transition-all duration-300 hover:scale-105 ${
                activeSection === "testimonials" ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-all duration-300 hover:scale-105 ${
                activeSection === "contact" ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Book Appointment
            </Button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col p-6 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-left transition-all duration-300 hover:translate-x-2 ${
                  activeSection === "home" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`text-left transition-all duration-300 hover:translate-x-2 ${
                  activeSection === "services" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-left transition-all duration-300 hover:translate-x-2 ${
                  activeSection === "about" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className={`text-left transition-all duration-300 hover:translate-x-2 ${
                  activeSection === "team" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                }`}
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`text-left transition-all duration-300 hover:translate-x-2 ${
                  activeSection === "testimonials"
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-left transition-all duration-300 hover:translate-x-2 ${
                  activeSection === "contact" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                }`}
              >
                Contact
              </button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 mt-4">
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 px-6 py-20 overflow-hidden"
      >
        <FloatingElements />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left" className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Where Happy Pets
                  <span className="block text-primary">Meet Expert Care</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  From gentle grooming to expert veterinary care, we treat every pet like family. Because they deserve
                  the very best.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Book an Appointment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <AnimatedCounter end={500} suffix="+" />
                  <div className="text-sm text-muted-foreground">Happy Pets</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={10} suffix="+" />
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={24} suffix="/7" />
                  <div className="text-sm text-muted-foreground">Emergency Care</div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" className="relative flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hvJ4E6D9Mbde0H9CpI7svMB8QBfo8v.png"
                    alt="Happy cat and dog together - representing comprehensive pet care"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce hover:scale-110 transition-transform cursor-pointer">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-pulse hover:scale-110 transition-transform cursor-pointer">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services Section with new card effect */}
      <section id="services" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Pet Care Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care tailored to your pet's unique needs, delivered with love and expertise.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Shield}
              title="Expert Veterinary Care"
              description="Comprehensive health checkups, vaccinations, and medical treatments by certified veterinarians."
              features={[
                "Annual wellness exams",
                "Vaccination programs",
                "Diagnostic testing",
                "Surgical procedures",
                "Preventive care plans",
              ]}
              color="blue"
              delay={100}
            />

            <ServiceCard
              icon={Scissors}
              title="Professional Grooming"
              description="Stress-free grooming sessions that keep your pet looking and feeling their absolute best."
              features={[
                "Full-service bathing",
                "Nail trimming & filing",
                "Ear cleaning",
                "Teeth brushing",
                "Breed-specific styling",
              ]}
              color="orange"
              delay={200}
            />

            <ServiceCard
              icon={Clock}
              title="24/7 Emergency Care"
              description="Round-the-clock emergency services because your pet's health can't wait."
              features={[
                "Emergency surgery",
                "Critical care monitoring",
                "Pain management",
                "Trauma treatment",
                "After-hours consultations",
              ]}
              color="red"
              delay={300}
            />

            <ServiceCard
              icon={Stethoscope}
              title="Specialized Medicine"
              description="Advanced medical treatments for complex conditions and specialized care needs."
              features={[
                "Cardiology services",
                "Dermatology treatment",
                "Orthopedic care",
                "Oncology support",
                "Behavioral therapy",
              ]}
              color="green"
              delay={400}
            />

            <ServiceCard
              icon={Heart}
              title="Wellness Programs"
              description="Comprehensive wellness plans designed to keep your pet healthy throughout their life."
              features={[
                "Senior pet care",
                "Puppy/kitten packages",
                "Weight management",
                "Nutritional counseling",
                "Exercise planning",
              ]}
              color="blue"
              delay={500}
            />

            <ServiceCard
              icon={Pill}
              title="Pharmacy Services"
              description="Full-service pharmacy with prescription medications and health supplements."
              features={[
                "Prescription medications",
                "Compounded medicines",
                "Nutritional supplements",
                "Flea & tick prevention",
                "Home delivery available",
              ]}
              color="orange"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left" className="relative">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%2013%2C%202025%2C%2011_24_26%20PM-OtJWhUPsmAgsvDyHVh48bT5rW6Md5J.png"
                    alt="Professional veterinary team examining a cat in modern clinic"
                    className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-foreground"> Our Expert Staff</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <div className="font-bold text-foreground">Award Winning</div>
                    <div className="text-sm text-muted-foreground">Pet Care Excellence</div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">
                  Trusted Hands,
                  <span className="block text-primary">Wagging Tails</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For over a decade, we've been the trusted choice for pet owners who want nothing but the best. Our
                  team of certified veterinarians and pet care specialists treat every animal with the love and
                  attention they deserve.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FadeInSection
                  delay={100}
                  className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Certified Professionals</h4>
                    <p className="text-muted-foreground text-sm">Licensed veterinarians and trained specialists</p>
                  </div>
                </FadeInSection>
                <FadeInSection
                  delay={200}
                  className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Modern Facilities</h4>
                    <p className="text-muted-foreground text-sm">State-of-the-art equipment and clean environment</p>
                  </div>
                </FadeInSection>
                <FadeInSection
                  delay={300}
                  className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Personalized Care</h4>
                    <p className="text-muted-foreground text-sm">Tailored treatment plans for each pet</p>
                  </div>
                </FadeInSection>
                <FadeInSection
                  delay={400}
                  className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Emergency Ready</h4>
                    <p className="text-muted-foreground text-sm">24/7 emergency care when you need it most</p>
                  </div>
                </FadeInSection>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Meet Our Team
              </Button>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of veterinarians and pet care specialists are dedicated to providing the best care for
              your furry family members. Click on each card to learn more about our team members.
            </p>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamFlipCard
                member={{
                  id: 1,
                  name: "Dr. Sarah Johnson",
                  role: "Lead Veterinarian",
                  image: "/smiling-veterinarian.png",
                  bio: "Passionate about animal welfare with over 12 years of experience in veterinary medicine.",
                  experience:
                    "12+ years in veterinary medicine, specializing in small animal care and emergency procedures.",
                  specialties: ["Emergency Care", "Surgery", "Internal Medicine"],
                  email: "sarah.j@pawcare.com",
                  phone: "(555) 123-0001",
                  achievements: [
                    "Board certified in Emergency and Critical Care",
                    "Published researcher in veterinary journals",
                    "Volunteer at local animal rescue organizations",
                  ],
                }}
                delay={100}
              />

              <TeamFlipCard
                member={{
                  id: 2,
                  name: "Dr. Michael Chen",
                  role: "Senior Veterinarian",
                  image: "/smiling-bearded-vet.png",
                  bio: "Dedicated to providing compassionate care with expertise in exotic animals and surgery.",
                  experience: "10+ years specializing in exotic animal care and advanced surgical procedures.",
                  specialties: ["Exotic Animals", "Surgery", "Dermatology"],
                  email: "michael.c@pawcare.com",
                  phone: "(555) 123-0002",
                  achievements: [
                    "Certified in exotic animal medicine",
                    "Advanced surgical training certification",
                    "Speaker at veterinary conferences",
                  ],
                }}
                delay={200}
              />

              <TeamFlipCard
                member={{
                  id: 3,
                  name: "Jessica Martinez",
                  role: "Veterinary Technician",
                  image: "/smiling-vet-tech.png",
                  bio: "Caring technician who ensures every pet feels comfortable and safe during their visit.",
                  experience:
                    "8+ years as a certified veterinary technician with expertise in patient care and diagnostics.",
                  specialties: ["Patient Care", "Diagnostics", "Anesthesia"],
                  email: "jessica.m@pawcare.com",
                  phone: "(555) 123-0003",
                  achievements: [
                    "Certified Veterinary Technician (CVT)",
                    "Specialized training in anesthesia monitoring",
                    "Pet first aid instructor",
                  ],
                }}
                delay={300}
              />

              <TeamFlipCard
                member={{
                  id: 4,
                  name: "Dr. Emily Rodriguez",
                  role: "Veterinary Dentist",
                  image: "/dr-emily-rodriguez.png",
                  bio: "Specialist in veterinary dentistry, ensuring your pet's oral health and comfort.",
                  experience: "7+ years focused on veterinary dentistry and oral surgery procedures.",
                  specialties: ["Dental Care", "Oral Surgery", "Preventive Care"],
                  email: "emily.r@pawcare.com",
                  phone: "(555) 123-0004",
                  achievements: [
                    "Board certified in Veterinary Dentistry",
                    "Advanced oral surgery certification",
                    "Dental health education advocate",
                  ],
                }}
                delay={400}
              />

              <TeamFlipCard
                member={{
                  id: 5,
                  name: "David Thompson",
                  role: "Pet Care Assistant",
                  image: "/smiling-male-vet-assistant.png",
                  bio: "Friendly assistant who helps make every visit a positive experience for pets and owners.",
                  experience: "5+ years providing exceptional customer service and pet handling expertise.",
                  specialties: ["Customer Service", "Pet Handling", "Grooming Assistance"],
                  email: "david.t@pawcare.com",
                  phone: "(555) 123-0005",
                  achievements: [
                    "Certified in pet handling and restraint",
                    "Customer service excellence award",
                    "Volunteer dog trainer",
                  ],
                }}
                delay={500}
              />

              <TeamFlipCard
                member={{
                  id: 6,
                  name: "Lisa Park",
                  role: "Practice Manager",
                  image: "/lisa-park.png",
                  bio: "Experienced manager ensuring smooth operations and exceptional client experiences.",
                  experience: "9+ years in veterinary practice management and client relations.",
                  specialties: ["Practice Management", "Client Relations", "Staff Coordination"],
                  email: "lisa.p@pawcare.com",
                  phone: "(555) 123-0006",
                  achievements: [
                    "Certified Veterinary Practice Manager",
                    "Excellence in client satisfaction",
                    "Team leadership and development expert",
                  ],
                }}
                delay={600}
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Pet Parents Say</h2>
            <p className="text-xl text-muted-foreground">Real stories from our happy pet families</p>
          </FadeInSection>

          <FadeInSection delay={200}>
            <TestimonialsCarousel />
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/happy-pets-collage.png"
            alt="Collage of happy pets and satisfied owners"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Added subtle background animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
        </div>

        <FadeInSection className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Let's Keep Tails Wagging</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to give your pet the expert care they deserve? Book your appointment today and join our family of
            happy pets and satisfied owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Schedule Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Call Us Now
            </Button>
          </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <FadeInSection delay={100}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">PawCare</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Expert Pet Care</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Providing exceptional pet care with love, expertise, and dedication since 2013.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Services</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Veterinary Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Pet Grooming
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Emergency Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Dental Care
                    </a>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a
                      href="#about"
                      className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team"
                      className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3 hover:text-primary transition-colors duration-300 cursor-pointer">
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-PAWS</span>
                  </div>
                  <div className="flex items-center gap-3 hover:text-primary transition-colors duration-300 cursor-pointer">
                    <Mail className="w-4 h-4" />
                    <span>hello@pawcare.com</span>
                  </div>
                  <div className="flex items-center gap-3 hover:text-primary transition-colors duration-300 cursor-pointer">
                    <MapPin className="w-4 h-4" />
                    <span>123 Pet Street, City, ST 12345</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={500} className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 PawCare. All rights reserved. Made with ❤️ for pets and their families.</p>
          </FadeInSection>
        </div>
      </footer>
    </div>
  )
}
