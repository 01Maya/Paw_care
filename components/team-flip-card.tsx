"use client"

import { useState } from "react"
import { Mail, Phone, Award, Calendar } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
  experience: string
  specialties: string[]
  email: string
  phone: string
  achievements: string[]
}

interface TeamFlipCardProps {
  member: TeamMember
  delay?: number
}

export default function TeamFlipCard({ member, delay = 0 }: TeamFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="group perspective-1000 w-full h-96" style={{ animationDelay: `${delay}ms` }}>
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="p-6 h-full flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
              <img
                src={member.image || "/ai-avatar.png"}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
            <p className="text-primary font-medium mb-4">{member.role}</p>
            <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{member.bio}</p>

            {/* Click indicator */}
            <div className="mt-auto">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-gray-50 px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                <span>Click to learn more</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-primary/5 to-orange-50 shadow-lg border border-primary/20">
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/30">
                <img src={member.image || "/ai-avatar.png"} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Experience</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">{member.experience}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Specialties</span>
                </div>
                <div className="pl-6 flex flex-wrap gap-1">
                  {member.specialties.map((specialty, index) => (
                    <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {member.achievements.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {member.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>{member.phone}</span>
                </div>
              </div>
            </div>

            {/* Click indicator for back */}
            <div className="text-center mt-2">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span>Click to flip back</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
