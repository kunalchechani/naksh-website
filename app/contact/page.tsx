"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 90679 59548",
    href: "tel:+919067959548",
  },
  {
    icon: Mail,
    title: "Email",
    content: "sales@nakshcones.in",
    href: "mailto:sales@nakshcones.in",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Plot No.16-19, Shree Laxman Nagar Industrial Estate, Laskana, Surat, Gujarat - 395013",
    href: "#map",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
    href: null,
  },
]

const faqs = [
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "Our standard MOQ varies by product. For cones, the typical MOQ is 10,000 pieces. For custom flavored cones, the MOQ is 50,000 pieces. For sleeves with custom printing, MOQ starts from 25,000 pieces. Contact us for specific requirements.",
  },
  {
    question: "Do you offer custom printing on sleeves?",
    answer:
      "Yes, we offer full-color CMYK custom printing on all our aluminium foil sleeves. We can print your brand logo, product information, and any custom design. Our in-house design team can also help you create artwork.",
  },
  {
    question: "What is your delivery timeline?",
    answer:
      "Standard orders are typically delivered within 7-10 working days. Custom printed orders may take 15-20 working days depending on the complexity and quantity. We offer pan-India delivery.",
  },
  {
    question: "Are your products FSSAI certified?",
    answer:
      "Yes, Naksh Enterprise is FSSAI certified (License: 10725997000119). All our products are manufactured following strict food safety guidelines and are suitable for food packaging.",
  },
  {
    question: "Do you provide samples before bulk orders?",
    answer:
      "Yes, we provide samples for quality evaluation before bulk orders. Sample costs may apply depending on the product type and quantity. Contact our sales team for sample requests.",
  },
]

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setFormSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-wide px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold tracking-wide uppercase mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Start a
              <br />
              <span className="text-accent">Conversation</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Ready to partner with us? Get in touch for product inquiries, custom quotes, or any questions about our
              ice cream cones and packaging solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Request a Quote</h2>

                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Thank You!</h3>
                      <p className="text-brown-light">
                        We've received your inquiry and will get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)} className="mt-6 bg-accent hover:bg-accent/90">
                        Submit Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" name="name" required placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name *</Label>
                          <Input id="company" name="company" required placeholder="Your company" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="product">Product Interest *</Label>
                        <Select name="product" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cones">Ice Cream Cones</SelectItem>
                            <SelectItem value="sleeves">Aluminium Foil Sleeves</SelectItem>
                            <SelectItem value="both">Both Products</SelectItem>
                            <SelectItem value="custom">Custom Requirements</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quantity">Expected Monthly Quantity</Label>
                        <Select name="quantity">
                          <SelectTrigger>
                            <SelectValue placeholder="Select quantity range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10k-50k">10,000 - 50,000 pieces</SelectItem>
                            <SelectItem value="50k-100k">50,000 - 1,00,000 pieces</SelectItem>
                            <SelectItem value="100k-500k">1,00,000 - 5,00,000 pieces</SelectItem>
                            <SelectItem value="500k+">5,00,000+ pieces</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Inquiry
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <Card key={idx} className="border-0 shadow-md">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">{info.title}</h3>
                        {info.href ? (
                          <a href={info.href} className="text-sm text-brown-light hover:text-accent transition-colors">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-sm text-brown-light">{info.content}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map */}
              <Card className="border-0 shadow-md overflow-hidden" id="map">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8989!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjciTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Naksh Enterprise Location"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream" id="faq">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-accent font-semibold tracking-wide uppercase mb-2">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-brown-light">Find answers to common questions about our products and services.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-xl px-6 border-0 shadow-md">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-brown-light">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
