import { ArrowRight, Shield, Award, Heart, Users } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const WA_URL =
  "https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB";

const trust = [
  { icon: Shield, text: "Protocolo Exclusivo" },
  { icon: Award, text: "Especialista Certificado" },
  { icon: Heart, text: "Garantia de Acompanhamento" },
  { icon: Users, text: "+500 Pacientes Satisfeitos" },
];

export default function FinalCTA() {
  const { ref, inView } = useInView();

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--navy) 0%, #0B2545 60%, #0d3355 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,191,165,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--teal) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-xl relative z-10" ref={ref}>
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Label */}
          <p className="section-label mb-4">Próximo Passo</p>

          {/* Headline */}
          <h2
            className="heading-xl text-white mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Pronto para viver sem medo de{" "}
            <span className="gradient-text">perder o seu sorriso?</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Vamos juntos construir um futuro onde seus dentes acompanhem o ritmo natural da sua
            vida — com saúde, confiança e liberdade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <button
              className="btn-teal text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4"
              onClick={() =>
                document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Descubra seu Índice de Risco
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              className="btn-outline-white text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4"
              onClick={() => window.open(WA_URL, "_blank")}
            >
              Agendar pelo WhatsApp
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {trust.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                <item.icon className="h-4 w-4" style={{ color: "var(--teal)" }} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
