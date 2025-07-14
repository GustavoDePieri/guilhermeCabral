import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const links = {
    protocolo: ["Como Funciona", "Resultados", "Casos de Sucesso", "Artigos Científicos"],
    comunidade: ["Ponto 0", "Lives", "Conteúdo Exclusivo", "Suporte"],
  };

  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "São Paulo, SP" },
    { icon: Phone, text: "(11) 99999-9999" },
    { icon: Mail, text: "contato@sepbdigital.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4">
              Dr. Guilherme Ricardo Cabral dos Santos
            </h3>
            <p className="text-gray-400 mb-4">
              Protocolo SEPB-Digital® - Preservando sorrisos naturais através da
              tecnologia e prevenção.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-futuristic-turquesa transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Protocolo</h4>
            <ul className="space-y-2 text-gray-400">
              {links.protocolo.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-futuristic-turquesa transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Comunidade</h4>
            <ul className="space-y-2 text-gray-400">
              {links.comunidade.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-futuristic-turquesa transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <contact.icon className="h-4 w-4 text-futuristic-turquesa" />
                  <span>{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Dr. Guilherme Ricardo Cabral dos Santos. Todos os direitos reservados.
            Protocolo SEPB-Digital® é uma marca registrada.
          </p>
        </div>
      </div>
    </footer>
  );
}
