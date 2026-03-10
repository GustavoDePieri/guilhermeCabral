import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const links = {
  protocolo: ["Como Funciona", "Resultados", "Casos de Sucesso", "Artigos Científicos"],
  comunidade: ["Ponto da Virada", "Lives", "Conteúdo Exclusivo", "Suporte"],
};

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Linkedin, href: "#" },
];

const contact = [
  { icon: MapPin, text: "Jaguaruna, SC" },
  { icon: Phone, text: "(48) 98864-4120" },
  { icon: Mail, text: "contato@sepbdigital.com" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#06101e" }} className="text-white">
      <div className="container-xl py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "var(--teal)", fontFamily: "Poppins, sans-serif" }}
              >
                GC
              </div>
              <div>
                <div
                  className="font-semibold text-white text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Dr. Guilherme Cabral
                </div>
                <div className="text-xs" style={{ color: "var(--teal)" }}>
                  SEPB-Digital®
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Preservando sorrisos naturais através da tecnologia, educação e prevenção.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(0,191,165,0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.06)")
                  }
                >
                  <Icon className="h-4 w-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Protocolo */}
          <div>
            <h4
              className="font-semibold text-white text-sm mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Protocolo
            </h4>
            <ul className="space-y-2.5">
              {links.protocolo.map((l, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-500 text-sm hover:text-teal transition-colors"
                    style={{ color: undefined }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Comunidade */}
          <div>
            <h4
              className="font-semibold text-white text-sm mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Comunidade
            </h4>
            <ul className="space-y-2.5">
              {links.comunidade.map((l, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-500 text-sm transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-white text-sm mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contato
            </h4>
            <ul className="space-y-3">
              {contact.map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-500 text-sm">
                  <Icon className="h-4 w-4 flex-shrink-0" style={{ color: "var(--teal)" }} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-600 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p>© 2025 Dr. Guilherme Ricardo Cabral dos Santos. Todos os direitos reservados.</p>
          <p style={{ color: "var(--teal)" }}>Protocolo SEPB-Digital® é uma marca registrada.</p>
        </div>
      </div>
    </footer>
  );
}
