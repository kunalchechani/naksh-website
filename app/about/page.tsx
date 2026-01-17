import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Target, Eye, Award, Users, Factory, Truck } from "lucide-react"

export const metadata: Metadata = {
  title:
    "About Naksh Enterprise | Ice Cream Cone Manufacturer for Ice Cream Companies in India",
  description:
    "Naksh Enterprise is a trusted B2B ice cream cone and aluminium foil sleeve manufacturer in India, supplying hygienic, moisture-resistant cones to ice cream companies nationwide.",
}

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description:
      "Naksh Enterprise was established in Surat, Gujarat with a focus on B2B ice cream consumables.",
  },
  {
    year: "2023",
    title: "FSSAI Certification",
    description:
      "Achieved FSSAI certification, ensuring food safety, hygiene, and compliance.",
  },
  {
    year: "2024",
    title: "Capacity Expansion",
    description:
      "Expanded manufacturing capacity to meet growing demand from ice cream companies.",
  },
  {
    year: "2024",
    title: "Pan-India Supply",
    description:
      "Started supplying ice cream cones and sleeves to brands and factories across India.",
  },
]

const values = [
  {
    icon: Award,
    title: "Quality-Driven Manufacturing",
    description:
      "Every ice cream cone and sleeve is produced under strict quality and hygiene standards.",
  },
  {
    icon: Users,
    title: "B2B Customer Focus",
    description:
      "We collaborate closely with ice cream manufacturers to meet commercial production needs.",
  },
  {
    icon: Factory,
    title: "Process Excellence",
    description:
      "Modern machinery and controlled baking processes ensure consistency at scale.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description:
      "On-time dispatch and dependable logistics for uninterrupted ice cream production.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-wide px-4 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-accent font-semibold tracking-wide uppercase mb-4">
              About Naksh Enterprise
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ice Cream Cone Manufacturer Trusted by
              <br />
              <span className="text-accent">
                Ice Cream Companies Across India
              </span>
            </h1>

            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Naksh Enterprise is a specialized B2B manufacturer of premium ice cream
              cones and aluminium foil sleeves, engineered for commercial ice cream
              production and large-scale distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Who We Are
              </h2>

              <div className="space-y-4 text-brown-light leading-relaxed">
                <p>
                  Naksh Enterprise is a specialized{" "}
                  <strong>ice cream cone manufacturer in India</strong>, serving ice
                  cream factories, brands, and distributors with high-quality sugar
                  cones, waffle cones, and custom aluminium foil ice cream sleeves.
                </p>

                <p>
                  We operate exclusively in the B2B segment, supplying cones designed
                  for <strong>moisture resistance, long shelf life, and consistent
                  crunch</strong>—critical parameters for commercial ice cream storage
                  and transportation.
                </p>

                <p>
                  Based in Surat, Gujarat, our modern manufacturing facility follows
                  FSSAI-compliant processes, strict hygiene protocols, and batch-level
                  quality checks to ensure dependable output at scale.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/premium_ice_cream_cones.webp"
                alt="Ice cream cone manufacturer in India – Naksh Enterprise"
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

              <h2 className="text-2xl font-bold text-primary mb-4">
                Our Mission
              </h2>

              <p className="text-brown-light leading-relaxed">
                To support ice cream manufacturers with reliable, hygienic, and
                high-performance cones and packaging solutions that enhance the final
                product experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-accent" />
              </div>

              <h2 className="text-2xl font-bold text-primary mb-4">
                Our Vision
              </h2>

              <p className="text-brown-light leading-relaxed">
                To become India’s most trusted ice cream consumables manufacturer,
                recognized for consistency, hygiene, innovation, and long-term
                partnerships with ice cream companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-semibold tracking-wide uppercase mb-2">
              Core Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Drives Our Manufacturing
            </h2>
            <p className="text-brown-light">
              Our values guide every decision—from raw material selection to final
              dispatch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-brown-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-semibold tracking-wide uppercase mb-2">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Manufacturing Milestones
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="text-4xl font-bold text-accent">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-primary-foreground/70">
                  {milestone.description}
                </p>
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
