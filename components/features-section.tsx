import { Droplets, Package, Palette, Truck, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: Droplets,
    title: "Humidity Resistance",
    description: "Our proprietary baking process ensures cones stay crunchy even in humid climates.",
  },
  {
    icon: Package,
    title: "Breakage-Free Packaging",
    description: "Delivered intact with our specialized packaging, reducing your waste significantly.",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Your logo, printed perfectly on our sleeves with full-color CMYK printing.",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description: "Reliable delivery across India with consistent supply chain management.",
  },
  {
    icon: Shield,
    title: "FSSAI Certified",
    description: "All products manufactured under strict food safety standards and regulations.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "99% on-time delivery rate ensuring your production never stops.",
  },
]

export function FeaturesSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-wide uppercase mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality That Speaks for Itself</h2>
          <p className="text-primary-foreground/70">
            We engineer our cones and sleeves with precision, ensuring your ice cream products always meet the highest
            standards.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
