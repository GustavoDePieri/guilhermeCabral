import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";

const WA_URL =
  "https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB";

const faqs = [
  {
    question: "Por que nunca ouvi falar sobre SEPB?",
    answer:
      "A SEPB é um conceito relativamente novo na odontologia. Muitos profissionais ainda focam apenas no tratamento de cáries, mas o desgaste não carioso é uma realidade crescente que precisa ser abordada preventivamente.",
  },
  {
    question: "Quanto tempo demora o protocolo?",
    answer:
      "O protocolo inicial leva de 2 a 4 sessões, dependendo do caso. O acompanhamento é contínuo, com revisões a cada 3–6 meses para garantir a eficácia a longo prazo.",
  },
  {
    question: "É dolorido?",
    answer:
      "Não! O protocolo é minimamente invasivo. A maioria dos procedimentos é indolor, e quando necessário, usamos anestesia local. O foco é na prevenção, não em tratamentos agressivos.",
  },
  {
    question: "Esse tratamento serve para mim?",
    answer:
      "O protocolo é ideal para qualquer pessoa que queira preservar seus dentes naturais. É especialmente indicado para quem tem sensibilidade, desgaste visível ou histórico de problemas dentários recorrentes.",
  },
  {
    question: "Preciso vir muitas vezes ao consultório?",
    answer:
      "Após a fase inicial, o acompanhamento é espaçado. A ideia é que você ganhe autonomia para cuidar da sua saúde bucal, reduzindo a necessidade de visitas frequentes.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, inView } = useInView();

  return (
    <section className="section-light" id="faq">
      <div className="container-xl">
        <div ref={ref}>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            {/* Left: header */}
            <div
              className={`space-y-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div>
                <p className="section-label mb-3">Dúvidas</p>
                <h2 className="heading-lg text-gray-900">
                  Perguntas{" "}
                  <span className="gradient-text">Frequentes</span>
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Não encontrou o que precisa? Fale diretamente com o Dr. Guilherme pelo WhatsApp.
              </p>
              <button className="btn-teal" onClick={() => window.open(WA_URL, "_blank")}>
                Tire Suas Dúvidas
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Right: accordion */}
            <div
              className={`space-y-3 transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    open === i
                      ? "border-teal shadow-md"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                  style={{ borderColor: open === i ? "var(--teal)" : undefined }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span
                      className={`font-medium text-sm sm:text-base leading-snug transition-colors ${
                        open === i ? "text-gray-900" : "text-gray-700"
                      }`}
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {faq.question}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: open === i ? "var(--teal)" : "rgba(0,191,165,0.1)",
                        color: open === i ? "#fff" : "var(--teal)",
                      }}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          open === i ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  {open === i && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
