import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/premium_ice_cream_cones.webp"
                  alt="Manufacturing Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="/custom-printed-ice-cream-sleeves-various-designs-c.jpg" alt="Cone Sleeves" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="/aluminium-foil-sleeves-printing-custom-packaging.jpg" alt="Custom Printing" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src="/ice-cream_cones_and_sleeves.webp" alt="Ice Cream Cones & Sleeves" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-semibold tracking-wide uppercase mb-2">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Your Trusted Partner in Ice Cream Excellence
              </h2>
              <p className="text-brown-light leading-relaxed">
                We understand that moisture is the enemy of a good cone. Our proprietary baking process ensures our
                cones retain their crisp texture for extended periods, providing a superior experience to the end
                consumer.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-cream rounded-xl p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Our Mission</h3>
                <p className="text-sm text-brown-light">
                  To empower ice cream manufacturers and vendors with packaging and cones that elevate the quality of
                  their final product.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Our Vision</h3>
                <p className="text-sm text-brown-light">
                  To become India's most trusted partner for ice cream consumables, known for reliability, hygiene, and
                  innovation.
                </p>
              </div>
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
