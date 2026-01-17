import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Products | Naksh Enterprise - Ice Cream Cones & Aluminium Sleeves",
  description:
    "Explore our range of premium ice cream cones and custom aluminium foil sleeves. 5 cone sizes and 9 sleeve variants available with custom printing options.",
}

const cones = [
  {
    name: "Standard Crunchy",
    height: "110mm",
    diameter: "46mm",
    angle: "23°",
    weight: "11g",
    idealFor: "Premium 50-60ml Scoops",
  },
  {
    name: "Regular Crunchy",
    height: "95mm",
    diameter: "41mm",
    angle: "23°",
    weight: "8g", // Assuming unchanged
    idealFor: "Standard Retail Cones",
  },
  {
    name: "Small Crunchy",
    height: "85mm",
    diameter: "37mm",
    angle: "23°",
    weight: "8g", // Updated from 6.5g
    idealFor: "Budget / School Packs",
  },
  {
    name: "Mini Crunchy",
    height: "75mm",
    diameter: "33mm",
    angle: "23°",
    weight: "5g",
    idealFor: "Mini Treats",
  },
  {
    name: "Ultra Mini",
    height: "65mm",
    diameter: "31mm",
    angle: "23°",
    weight: "4.5g",
    idealFor: "Bite-sized / Samplers",
  },
];

const flavors = ["Classic Sugar Rolled", "Chocolate Coated (Inner spray)", "Strawberry", "Vanilla", "Charcoal (Black)"]

const sleeves = [
  { name: "Micro Cone Sleeve", height: "135mm", diameter: "52.9mm", gsm: "100" },
  { name: "Mini Cone Sleeve", height: "145mm", diameter: "56.8mm", gsm: "100" },
  { name: "Standard Cone Sleeve", height: "155mm", diameter: "58.7mm", gsm: "100" },
  { name: "Big Cone Sleeve", height: "165mm", diameter: "64.2mm", gsm: "100" },
];


const sleeveServices = [
  "Full-color custom printing (CMYK)",
  "Gloss or Matte finish options",
  "In-house design support for clients",
  "Lids for cone sleeves (Exclusive in cost of sleeves)",
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-wide px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold tracking-wide uppercase mb-4">Our Products</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Premium Quality
              <br />
              <span className="text-accent">Products</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              We manufacture products with precise dimensions to fit standard automated filling machines, ensuring
              seamless integration with your production line.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background" id="products">
        <div className="container-wide">
          <Tabs defaultValue="cones" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="cones" className="text-base">
                Ice Cream Cones
              </TabsTrigger>
              <TabsTrigger value="sleeves" className="text-base">
                Aluminium Sleeves
              </TabsTrigger>
            </TabsList>

            {/* Cones Tab */}
            <TabsContent value="cones" id="cones">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Ice Cream Cones</h2>
                  <p className="text-brown-light mb-8 leading-relaxed">
                    Our premium rolled sugar cones are engineered to resist humidity, ensuring they stay crunchy even in
                    humid climates. Available in 5 sizes to fit various product requirements.
                  </p>

                  {/* Cone Image */}
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                    <img
                      src="/golden-brown-sugar-cones-ice-cream-different-sizes.jpg"
                      alt="Ice Cream Cones Range"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Flavors */}
                  <div className="bg-cream rounded-xl p-6">
                    <h3 className="font-semibold text-primary mb-4">Available Flavors</h3>
                    <div className="flex flex-wrap gap-2">
                      {flavors.map((flavor, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-white text-primary">
                          {flavor}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 flex items-start gap-2 text-sm text-brown-light">
                      <Info className="h-4 w-4 shrink-0 mt-0.5" />
                      <p>MOQ for customized flavored cones: 50,000 pieces minimum</p>
                    </div>
                  </div>
                </div>

                {/* Cone Specifications Table */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-6">Size Specifications</h3>
                  <div className="space-y-4">
                    {cones.map((cone, idx) => (
                      <Card key={idx} className="border-0 shadow-md">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center justify-between">
                            {cone.name}
                            <Badge className="bg-accent text-white">{cone.height}</Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-brown-light">Diameter</p>
                              <p className="font-medium text-primary">{cone.diameter}</p>
                            </div>
                            <div>
                              <p className="text-brown-light">Angle</p>
                              <p className="font-medium text-primary">{cone.angle}</p>
                            </div>
                            <div>
                              <p className="text-brown-light">Weight</p>
                              <p className="font-medium text-primary">{cone.weight}</p>
                            </div>
                            <div>
                              <p className="text-brown-light">Ideal For</p>
                              <p className="font-medium text-primary">{cone.idealFor}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Sleeves Tab */}
            <TabsContent value="sleeves" id="sleeves">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Aluminium Foil Sleeves</h2>
                  <p className="text-brown-light mb-8 leading-relaxed">
                    High-quality conical sleeves made from premium aluminium foil paper. Perfect for protecting your ice
                    cream cones and showcasing your brand with custom printing.
                  </p>

                  {/* Sleeve Image */}
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                    <img
                      src="/aluminium-foil-ice-cream-cone-sleeves-colorful-pri.jpg"
                      alt="Aluminium Foil Sleeves Range"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Services */}
                  <div className="bg-cream rounded-xl p-6">
                    <h3 className="font-semibold text-primary mb-4">Services Included</h3>
                    <ul className="space-y-3">
                      {sleeveServices.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center">
                            <Check className="h-3 w-3 text-accent" />
                          </div>
                          <span className="text-brown-light">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sleeve Specifications Table */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-6">Size Specifications</h3>
                  <div className="space-y-4">
                    {sleeves.map((sleeve, idx) => (
                      <Card key={idx} className="border-0 shadow-md">
                        <CardContent className="py-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-primary">{sleeve.name}</h4>
                            <Badge className="bg-accent text-white">{sleeve.height}</Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-brown-light">Height</p>
                              <p className="font-medium text-primary">{sleeve.height}</p>
                            </div>
                            <div>
                              <p className="text-brown-light">Diameter</p>
                              <p className="font-medium text-primary">{sleeve.diameter}</p>
                            </div>
                            <div>
                              <p className="text-brown-light">GSM</p>
                              <p className="font-medium text-primary">{sleeve.gsm}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Custom Printing Section */}
      <section className="section-padding bg-cream" id="printing">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/custom-printed-ice-cream-sleeves-various-designs-c.jpg"
                  alt="Custom Printing Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent font-semibold tracking-wide uppercase mb-2">Custom Branding</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Your Logo, Printed Perfectly</h2>
              <p className="text-brown-light mb-6 leading-relaxed">
                Elevate your brand with our custom printing services. We offer full-color CMYK printing on all our
                sleeve products, ensuring your brand stands out on every cone.
              </p>
              <ul className="space-y-4">
                {[
                  "High-resolution printing up to 1200 DPI",
                  "Food-grade inks and coatings",
                  "In-house design support available",
                  "Quick turnaround times",
                  "Competitive MOQ for custom orders",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
