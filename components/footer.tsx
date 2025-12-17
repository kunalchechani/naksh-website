import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/about#story" },
    { name: "Quality Assurance", href: "/quality" },
    { name: "Certifications", href: "/quality#certifications" },
  ],
  products: [
    { name: "Ice Cream Cones", href: "/products#cones" },
    { name: "Aluminium Sleeves", href: "/products#sleeves" },
    { name: "Custom Printing", href: "/products#printing" },
    { name: "Bulk Orders", href: "/contact" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Request Quote", href: "/contact" },
    { name: "FAQs", href: "/contact#faq" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <img src="/logo/logo.png" alt="NAKSH Logo" className="w-12 h-12 object-cover rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-wide">NAKSH</span>
                <span className="text-xs text-primary-foreground/70 tracking-widest uppercase">Enterprise</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted B2B partner for premium ice cream cones and custom packaging solutions. The Crunch That
              Lasts.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                <span className="text-primary-foreground/70 text-sm">
                  Plot No.16-19, Shree Laxman Nagar Industrial Estate, Laskana, Surat, Gujarat - 395013
                </span>
              </li>
              <li>
                <a
                  href="tel:+919067959548"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  <span>+91 90679 59548</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@nakshcones.in"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  <span>sales@nakshcones.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Naksh Enterprise. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">FSSAI License: 10725997000119</p>
        </div>
      </div>
    </footer>
  )
}
