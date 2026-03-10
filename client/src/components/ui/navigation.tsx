import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const WA_URL = "https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Protocolo", href: "#protocolo" },
    { label: "Resultados", href: "#testimonials" },
    { label: "Sobre", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ background: "var(--teal)" }}
            >
              GC
            </div>
            <div className="text-left">
              <div
                className={`font-semibold text-sm sm:text-base leading-tight transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="hidden sm:inline">Dr. Guilherme Cabral</span>
                <span className="sm:hidden">Dr. Guilherme</span>
              </div>
              <div
                className="text-xs leading-tight"
                style={{ color: "var(--teal)", fontFamily: "Poppins, sans-serif" }}
              >
                SEPB-Digital®
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`text-sm font-medium transition-colors hover:text-teal ${
                  scrolled ? "text-gray-600" : "text-white/80"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              className="btn-teal text-sm px-5 py-2.5"
              style={{ minHeight: "40px" }}
              onClick={() => window.open(WA_URL, "_blank")}
            >
              <Phone className="h-4 w-4" />
              Agendar Avaliação
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white rounded-b-2xl shadow-xl">
            <div className="space-y-1 px-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-teal transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 px-2">
                <button
                  className="btn-teal w-full text-sm"
                  onClick={() => window.open(WA_URL, "_blank")}
                >
                  <Phone className="h-4 w-4" />
                  Agendar Avaliação
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
