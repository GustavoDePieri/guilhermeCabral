import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const WA_URL =
  "https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB";

const beliefs = [
  {
    quote: "Dentes naturais não têm substituto.",
    description:
      "Nenhuma tecnologia pode replicar a perfeição da natureza. Meu trabalho é preservar o que você já tem.",
  },
  {
    quote: "Prevenção é liberdade.",
    description:
      "Quando você previne, você escolhe. Quando você trata, você reage. A diferença é a autonomia.",
  },
  {
    quote: "Saúde começa antes da dor.",
    description:
      "Não esperamos o coração parar para cuidar dele. Por que fazemos isso com nossos dentes?",
  },
  {
    quote: "Todo mundo tem o direito de envelhecer sorrindo sem medo.",
    description:
      "Sua idade não deveria determinar a saúde dos seus dentes. Com o protocolo certo, você pode sorrir aos 80 como sorri hoje.",
  },
  {
    quote: "Preservar o natural é um dever moral.",
    description:
      "E isso não deve ser exclusivo a poucos — deve ser para todos.",
  },
];

export default function Philosophy() {
  const { ref, inView } = useInView();

  return (
    <section
      className="section-dark relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #0d2a4a 100%)" }}
    >
      {/* Decorative elements */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--teal) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="container-xl relative z-10">
        <div ref={ref}>
          {/* Header */}
          <div
            className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="section-label mb-3">Filosofia</p>
            <h2 className="heading-lg text-white">
              Por que faço{" "}
              <span className="gradient-text">o que faço</span>
            </h2>
          </div>

          {/* Beliefs — 6-col grid: top 3 cards × col-span-2, bottom 2 × col-span-3 */}
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-5 mb-12">
            {beliefs.map((b, i) => (
              <div
                key={i}
                className={`card-glass p-7 rounded-2xl flex flex-col gap-4 transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${i < 3 ? "sm:col-span-2" : "sm:col-span-3"}`}
                style={{ transitionDelay: `${i * 100 + 100}ms` }}
              >
                {/* Teal accent bar */}
                <div
                  className="w-1 h-8 rounded-full flex-shrink-0"
                  style={{ background: "var(--teal)" }}
                />
                <blockquote
                  className="text-white font-semibold text-base sm:text-lg leading-snug"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  "{b.quote}"
                </blockquote>
                <p className="text-gray-300 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>

          {/* CTA block */}
          <div
            className={`max-w-xl mx-auto text-center transition-all duration-700 delay-600 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="card-glass rounded-2xl p-8" style={{ borderColor: "rgba(0,191,165,0.3)" }}>
              <p
                className="text-white text-lg font-medium mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Se você também acredita nisso, é aqui que seu caminho começa.
              </p>
              <button className="btn-teal" onClick={() => window.open(WA_URL, "_blank")}>
                Quero Começar Agora
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
