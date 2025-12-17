"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Naksh Enterprise has been instrumental in improving our product quality. Their cones stay crispy for longer, and our customers have noticed the difference.",
    author: "Rajesh Patel",
    role: "Owner, Premium Ice Creams",
    location: "Ahmedabad, Gujarat",
  },
  {
    quote:
      "The custom printed sleeves have elevated our brand image significantly. Excellent print quality and timely delivery every time.",
    author: "Meera Sharma",
    role: "Marketing Head, Frost Delights",
    location: "Mumbai, Maharashtra",
  },
  {
    quote:
      "We've reduced our cone wastage by 40% since switching to Naksh Enterprise. Their breakage-free packaging is a game changer.",
    author: "Ankit Joshi",
    role: "Procurement Manager, Cool Treats Pvt Ltd",
    location: "Delhi NCR",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-wide uppercase mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-brown-light">
            Don't just take our word for it - hear from the businesses we've helped succeed.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-cream border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-accent/30 mb-6" />
              <blockquote className="text-xl md:text-2xl text-primary font-medium leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-accent">{testimonials[current].author[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">{testimonials[current].author}</p>
                  <p className="text-sm text-brown-light">{testimonials[current].role}</p>
                  <p className="text-sm text-brown-light">{testimonials[current].location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${idx === current ? "bg-accent" : "bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
