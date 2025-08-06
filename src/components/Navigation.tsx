import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: "ABOUT",
      items: [
        { title: "University Overview", href: "#" },
        { title: "Mission & Vision", href: "#" },
        { title: "Leadership", href: "#" },
        { title: "History", href: "#" },
      ]
    },
    {
      title: "ACADEMICS",
      items: [
        { title: "Undergraduate Programs", href: "#" },
        { title: "Graduate Programs", href: "#" },
        { title: "Certificate Programs", href: "#" },
        { title: "Colleges", href: "#" },
      ]
    },
    {
      title: "LIFE AT LMU",
      items: [
        { title: "Student Life", href: "#" },
        { title: "Campus Facilities", href: "#" },
        { title: "Student Organizations", href: "#" },
        { title: "Sports & Recreation", href: "#" },
      ]
    },
    {
      title: "ENTERPRISE",
      items: [
        { title: "University Enterprises", href: "#" },
        { title: "Farms", href: "#" },
        { title: "Guest House", href: "#" },
        { title: "Schools", href: "#" },
      ]
    },
    {
      title: "DIRECTORY",
      items: [
        { title: "Faculty Directory", href: "#" },
        { title: "Staff Directory", href: "#" },
        { title: "Department Contacts", href: "#" },
        { title: "Campus Map", href: "#" },
      ]
    }
  ];

  return (
    <nav className="bg-background border-b shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-university-brown text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-end space-x-6 text-sm">
          <a href="#" className="hover:text-university-gold transition-colors">Home</a>
          <a href="#" className="hover:text-university-gold transition-colors">Events Calendar</a>
          <a href="#" className="hover:text-university-gold transition-colors">Alumni</a>
          <a href="#" className="hover:text-university-gold transition-colors">Contact</a>
          <a href="#" className="hover:text-university-gold transition-colors">Mail</a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-university-brown">
              <h1 className="text-xl font-bold">LANDMARK</h1>
              <p className="text-sm">UNIVERSITY</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="px-4 py-2 text-sm font-medium hover:text-university-brown transition-colors">
                  HOME
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium hover:text-university-brown transition-colors">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      {item.items.map((subItem) => (
                        <NavigationMenuLink
                          key={subItem.title}
                          href={subItem.href}
                          className="block p-3 rounded-lg hover:bg-warm-beige transition-colors"
                        >
                          <div className="text-sm font-medium text-foreground">{subItem.title}</div>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="px-4 py-2 text-sm font-medium hover:text-university-brown transition-colors">
                  ADMISSIONS
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="px-4 py-2 text-sm font-medium hover:text-university-brown transition-colors">
                  LIBRARY
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="px-4 py-2 text-sm font-medium hover:text-university-brown transition-colors">
                  NEWS
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="px-4 py-2 text-sm font-medium hover:text-university-brown transition-colors">
                  RESEARCH
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Apply Now Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button className="bg-university-gold hover:bg-university-gold/90 text-university-brown font-semibold">
              Apply Now
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <a href="#" className="text-lg font-medium py-2 hover:text-university-brown transition-colors">HOME</a>
                  {menuItems.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <h3 className="text-lg font-medium text-university-brown">{item.title}</h3>
                      <div className="pl-4 space-y-2">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="block py-1 text-sm hover:text-university-brown transition-colors"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                  <a href="#" className="text-lg font-medium py-2 hover:text-university-brown transition-colors">ADMISSIONS</a>
                  <a href="#" className="text-lg font-medium py-2 hover:text-university-brown transition-colors">LIBRARY</a>
                  <a href="#" className="text-lg font-medium py-2 hover:text-university-brown transition-colors">NEWS</a>
                  <a href="#" className="text-lg font-medium py-2 hover:text-university-brown transition-colors">RESEARCH</a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;