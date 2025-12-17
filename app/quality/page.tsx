import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Shield, CheckCircle, FileCheck, Microscope, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Quality Assurance | Naksh Enterprise - FSSAI Certified Manufacturer",
  description:
    "Learn about our quality assurance processes, FSSAI certification, and commitment to manufacturing the highest quality ice cream cones and packaging.",
}

const qualitySteps = [
  {
    icon: Leaf,
    title: "Raw Material Selection",
    description:
      "We source only premium-grade ingredients from certified suppliers, ensuring the foundation of quality.",
  },
  {
    icon: Microscope,
    title: "In-Process Quality Check",
    description: "Continuous monitoring during manufacturing to maintain consistency in every batch.",
  },
  {
    icon: CheckCircle,
    title: "Final Inspection",
    description: "Every product undergoes rigorous final inspection before packaging and dispatch.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Complete traceability with detailed batch records and quality certificates.",
  },
]

const certifications = [
  {
    name: "FSSAI License",
    number: "10725997000119",
    description:
      "Food Safety and Standards Authority of India certification ensuring all products meet food safety regulations.",
    icon: Shield,
  },
]

export default function QualityPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-wide px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold tracking-wide uppercase mb-4">Quality Assurance</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Committed to
              <br />
              <span className="text-accent">Excellence</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              At Naksh Enterprise, quality is not just a standard—it's our promise. Every product we manufacture
              undergoes rigorous quality checks to ensure it meets the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-semibold tracking-wide uppercase mb-2">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Quality at Every Step</h2>
            <p className="text-brown-light">
              Our comprehensive quality management system ensures consistency and excellence throughout the
              manufacturing process.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualitySteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-cream rounded-2xl p-6 h-full">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-brown-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Quality Features */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold tracking-wide uppercase mb-2">Why Our Quality Matters</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">The Crunch That Lasts</h2>
              <p className="text-brown-light mb-8 leading-relaxed">
                We understand that moisture is the enemy of a good cone. Our proprietary baking process and quality
                control measures ensure our cones retain their crisp texture for extended periods.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Humidity Resistance",
                    description: "Stays crunchy even in humid climates thanks to our specialized baking process.",
                  },
                  {
                    title: "Breakage-Free Packaging",
                    description: "Delivered intact with our specially designed packaging, reducing your waste.",
                  },
                  {
                    title: "Consistent Quality",
                    description:
                      "Every batch maintains the same high standards, ensuring reliability for your business.",
                  },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                      <p className="text-sm text-brown-light">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/quality-control-laboratory-food-testing-inspection.jpg"
                alt="Quality Control Process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-primary text-primary-foreground" id="certifications">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-semibold tracking-wide uppercase mb-2">Certifications</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certified Excellence</h2>
            <p className="text-primary-foreground/70">
              Our certifications demonstrate our commitment to food safety and quality standards.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white/10 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{cert.name}</h3>
                <p className="text-accent text-lg font-mono mb-4">{cert.number}</p>
                <p className="text-primary-foreground/70">{cert.description}</p>
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
