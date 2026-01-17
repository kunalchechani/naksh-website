import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Target, Eye, Award, Users, Factory, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Naksh Enterprise - Premium Ice Cream Cone Manufacturer",
  description:
    "Learn about Naksh Enterprise, established in 2023 as a premier B2B manufacturer of ice cream cones and aluminium foil sleeves in Surat, Gujarat.",
}

const milestones = [
  { year: "2023", title: "Founded", description: "Naksh Enterprise established in Surat, Gujarat" },
  { year: "2023", title: "FSSAI Certified", description: "Received food safety certification" },
  { year: "2024", title: "Expansion", description: "Increased production capacity by 200%" },
  { year: "2024", title: "Pan India", description: "Started serving clients across India" },
]

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "Every cone and sleeve undergoes rigorous quality checks before dispatch.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "We work closely with clients to understand and meet their specific requirements.",
  },
  {
    icon: Factory,
    title: "Innovation",
    description: "Continuous improvement in our manufacturing processes for better products.",
  },
  {
    icon: Truck,
    title: "Reliability",
    description: "Consistent supply chain ensuring your production never stops.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-wide px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold tracking-wide uppercase mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
  Ice Cream Cone Manufacturer Trusted by
  <br />
  <span className="text-accent">Ice Cream Companies Across India</span>
</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Established in 2023, Naksh Enterprise is a premier B2B manufacturer specializing in high-quality ice cream
              cones and custom aluminium foil sleeves.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Who We Are</h2>
              <div className="space-y-4 text-brown-light leading-relaxed">
                <p>
  Naksh Enterprise is a specialized <strong>ice cream cone manufacturer in India</strong>,
  serving ice cream factories, brands, and distributors with premium-quality sugar cones,
  waffle cones, and custom aluminium foil ice cream sleeves.
</p>

<p>
  We work exclusively in the B2B segment, supplying cones that are engineered for
  <strong>moisture resistance, long shelf life, and consistent crunch</strong>—critical
  factors for commercial ice cream production.
</p>

<p>
  Operating from our modern manufacturing facility in Surat, Gujarat, we follow
  FSSAI-compliant processes and strict hygiene standards to ensure every batch meets
  industrial quality expectations.
</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/modern-food-manufacturing-factory-interior-clean-i.jpg"
                alt="Naksh Enterprise Manufacturing Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-brown-light leading-relaxed">
                To empower ice cream manufacturers and vendors with packaging and cones that elevate the quality of
                their final product. We strive to be the backbone of successful ice cream businesses across India.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-brown-light leading-relaxed">
                To become India's most trusted partner for ice cream consumables, known for reliability, hygiene, and
                innovation. We envision expanding our reach globally while maintaining our commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-semibold tracking-wide uppercase mb-2">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Drives Us</h2>
            <p className="text-brown-light">
              Our core values shape everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-brown-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-semibold tracking-wide uppercase mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-4xl font-bold text-accent">{milestone.year}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{milestone.title}</h3>
                <p className="text-primary-foreground/70">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
