import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";


const Footer = () => {
  const footerSections = [
    {
      title: "Colleges",
      links: [
        "Agricultural Sciences",
        "Engineering",
        "Business and Social Sciences",
        "Pure and Applied Sciences"
      ]
    },
    {
      title: "Research",
      links: [
        "LUCRID",
        "Research Directory (ePrint)",
        "Research Gate",
        "Publications"
      ]
    },
    {
      title: "Enterprise",
      links: [
        "Landmark University Enterprises",
        "Landmark University Farms",
        "Landmark Guest House",
        "Secondary School",
        "Nursery & Primary School"
      ]
    },
    {
      title: "Students",
      links: [
        "Student Life",
        "International Students",
        "Graduate Programmes",
        "Post Graduate Programmes",
        "Certificate Programmes",
        "Alumni"
      ]
    },
    {
      title: "Resources",
      links: [
        "Library",
        "LMU Portal",
        "ePrint",
        "Campus Map",
        "Accommodation"
      ]
    }
  ];

  return (
    <footer className="bg-university-brown text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {/* University Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-xl font-bold">LANDMARK</h1>
                <p className="text-sm">UNIVERSITY</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Breaking new grounds in education, research, and innovation. 
              Landmark University is committed to producing leaders who will 
              make lasting impact in their communities and beyond.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-university-gold" />
                <span className="text-sm">Omu-Aran, Kwara State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-university-gold" />
                <span className="text-sm">+234 803 500 0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-university-gold" />
                <span className="text-sm">info@lmu.edu.ng</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-university-gold/20 hover:text-university-gold">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-university-gold/20 hover:text-university-gold">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-university-gold/20 hover:text-university-gold">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-university-gold/20 hover:text-university-gold">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-university-gold/20 hover:text-university-gold">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-bold text-university-gold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/80 hover:text-university-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h4 className="font-bold text-university-gold">Stay Connected</h4>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to our newsletter for the latest updates and news from Landmark University.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-university-gold hover:bg-university-gold/90 text-university-brown">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-deep-brown py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              Copyright © 2025 Landmark University Online. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-university-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-university-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-university-gold transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;