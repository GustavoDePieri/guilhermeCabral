import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Protocolo", href: "#protocolo" },
    { label: "Resultados", href: "#resultados" },
    { label: "Sobre", href: "#sobre" },
    { label: "Comunidade", href: "#comunidade" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-poppins font-bold text-xl text-deep-blue">
            Dr. Guilherme Santos
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-deep-blue hover:text-futuristic-turquesa transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="hidden md:block">
            <Button 
              className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-medium"
              onClick={() => scrollToSection("#final-cta")}
            >
              Agendar Avaliação
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-deep-blue" />
            ) : (
              <Menu className="h-6 w-6 text-deep-blue" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-deep-blue hover:text-futuristic-turquesa transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="w-full bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-medium mt-4"
                onClick={() => scrollToSection("#final-cta")}
              >
                Agendar Avaliação
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
