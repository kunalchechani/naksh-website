"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Award, Truck } from "lucide-react"

const stats = [
  { value: "50+", label: "Happy Clients" },
  { value: "10M+", label: "Cones Produced" },
  { value: "99%", label: "On-Time Delivery" },
  { value: "2023", label: "Established" },
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23522719' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-wide section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>FSSAI Certified Manufacturer</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              The Crunch
              <br />
              <span className="text-accent">That Lasts.</span>
            </h1>

            <p className="text-lg text-brown-light max-w-xl leading-relaxed">
              Established in 2023, Naksh Enterprise is a premier B2B manufacturer specializing in high-quality ice cream
              cones and custom aluminium foil sleeves. We serve as the silent partner behind successful ice cream
              brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
              >
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 bg-transparent"
              >
                <Link href="/about">
                  <Play className="mr-2 h-5 w-5" />
                  Our Story
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { icon: Shield, text: "FSSAI Licensed" },
                { icon: Award, text: "Premium Quality" },
                { icon: Truck, text: "Pan India Delivery" },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-brown-light">
                  <badge.icon className="h-5 w-5 text-accent" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Circle */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />

              {/* Main Image Container */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/premium-ice-cream-cones-arrangement-golden-brown-c.jpg"
                  alt="Premium Ice Cream Cones by Naksh Enterprise"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Premium Quality</p>
                    <p className="text-sm text-brown-light">Since 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-brown-light mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
