"use client"

import { Heart, Shield, Award, Clock } from "lucide-react"

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating hearts */}
      <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }}>
        <Heart className="w-4 h-4 text-red-300 opacity-60" />
      </div>
      <div
        className="absolute top-40 right-20 animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      >
        <Shield className="w-5 h-5 text-blue-300 opacity-60" />
      </div>
      <div
        className="absolute bottom-32 left-20 animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "3.5s" }}
      >
        <Award className="w-4 h-4 text-yellow-300 opacity-60" />
      </div>
      <div
        className="absolute bottom-20 right-10 animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
      >
        <Clock className="w-4 h-4 text-green-300 opacity-60" />
      </div>

      {/* Floating circles */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-300/30 rounded-full animate-pulse"
        style={{ animationDelay: "2.5s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-blue-300/40 rounded-full animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>
    </div>
  )
}
