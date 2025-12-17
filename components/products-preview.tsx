import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronRight } from "lucide-react"

const products = [
  {
    title: "Ice Cream Cones",
    description:
      "Premium rolled sugar cones in 5 sizes - from Standard (110mm) to Ultra Mini (65mm). Available in Classic, Chocolate, Strawberry, Vanilla & Charcoal flavors.",
    image: "/golden-brown-sugar-rolled-ice-cream-cones-stack-pr.jpg",
    href: "/products#cones",
    features: ["5 Size Options", "Multiple Flavors", "Humidity Resistant"],
  },
  {
    title: "Aluminium Foil Sleeves",
    description:
      "Custom printed conical sleeves in 9 size variants. Full-color CMYK printing with gloss or matte finish options.",
    image: "/aluminium-foil-ice-cream-cone-sleeves-printed-colo.jpg",
    href: "/products#sleeves",
    features: ["Custom Printing", "9 Size Variants", "Food Grade"],
  },
]

export function ProductsPreview() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-wide uppercase mb-2">Our Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Premium Quality Products for Your Business
          </h2>
          <p className="text-brown-light">
            We manufacture products with precise dimensions to fit standard automated filling machines, ensuring
            seamless integration with your production line.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">{product.title}</h3>
                <p className="text-brown-light mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, fidx) => (
                    <span key={fidx} className="bg-accent/10 text-accent text-sm px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  href={product.href}
                  className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all"
                >
                  View Details
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
