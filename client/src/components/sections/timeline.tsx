import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const WA_URL =
  "https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB";

const steps = [
  {
    number: "01",
    title: "Avaliação Digital Completa",
    description:
      "Anamnese detalhada e trabalho multidisciplinar para diagnosticar a causa do problema usando tecnologia para mapear cada detalhe da sua saúde bucal.",
    image: "/fotos/IMG_8159.PNG",
  },
  {
    number: "02",
    title: "Diagnóstico Visual e Explicativo",
    description:
      "Você entende, com imagens claras e explicações didáticas, o que está causando o desgaste — e aprende como agir para interrompê-lo antes que cause danos maiores.",
    image: "/fotos/IMG_8139.jpg",
  },
  {
    number: "03",
    title: "Tratamento Personalizado",
    bullets: [
      "Interrompe o processo de desgaste ativo",
      "Reduz a sensibilidade dental causada pelo desgaste",
      "Inclui procedimentos que diminuem o impacto dos fatores causadores",
    ],
    image: "/fotos/IMG_1915.JPG",
  },
  {
    number: "04",
    title: "Educação e Orientação Continuada",
    bullets: [
      "Comunidade exclusiva com contato direto para esclarecer dúvidas",
      "Vídeos e lives explicativos com aplicações práticas do dia a dia",
      "Materiais visuais claros para identificar riscos e agir com segurança",
    ],
    image: "/fotos/Screenshot 2025-08-17 at 15.46.07.png",
  },
  {
    number: "05",
    title: "Liberdade e Confiança",
    bullets: [
      "Livre da sensibilidade que limitava sua alimentação",
      "Tranquilidade de saber que seus dentes estão protegidos",
      "Autonomia real para identificar riscos e agir preventivamente",
      "Confiança para envelhecer sorrindo com saúde e liberdade",
    ],
    image: "/fotos/ChatGPT Image 17 de ago. de 2025, 15_56_14.png",
  },
];

// Fallback placeholder backgrounds for missing images
const placeholderColors = [
  "linear-gradient(135deg, #0A1628, #0F2040)",
  "linear-gradient(135deg, #0F2040, #1a3a6b)",
  "linear-gradient(135deg, #00BFA5, #009e88)",
  "linear-gradient(135deg, #1a3a6b, #0A1628)",
  "linear-gradient(135deg, #009e88, #00BFA5)",
];

export default function Timeline() {
  const { ref, inView } = useInView(0.05);

  return (
    <section className="section-gray" id="timeline">
      <div className="container-xl">
        <div ref={ref}>
          {/* Header */}
          <div
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="section-label mb-3">O Processo</p>
            <h2 className="heading-lg text-gray-900">
              Passo a Passo da Sua{" "}
              <span className="gradient-text">Transformação</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, i) => {
              const isEven = i % 2 === 1;
              return (
                <div
                  key={i}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-700 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Text — alternates side on desktop */}
                  <div className={`space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        style={{
                          background: "linear-gradient(135deg, var(--teal), #009e88)",
                        }}
                      >
                        <span
                          className="text-white font-bold text-sm"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {step.number}
                        </span>
                      </div>
                      <h3
                        className="heading-md text-gray-900"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {step.title}
                      </h3>
                    </div>

                    {step.description && (
                      <p className="text-gray-600 leading-relaxed pl-[72px]">
                        {step.description}
                      </p>
                    )}

                    {step.bullets && (
                      <ul className="space-y-2 pl-[72px]">
                        {step.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-3 text-gray-600 text-sm">
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ background: "var(--teal)" }}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Image */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ minHeight: "280px" }}>
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full object-cover rounded-2xl"
                        style={{ height: "340px", objectPosition: "center" }}
                        onError={(e) => {
                          const el = e.currentTarget;
                          el.style.display = "none";
                          const parent = el.parentElement;
                          if (parent) {
                            parent.style.background = placeholderColors[i];
                            parent.style.minHeight = "340px";
                          }
                        }}
                      />
                      {/* Step number overlay */}
                      <div
                        className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ background: "var(--teal)" }}
                      >
                        <span
                          className="text-white font-bold text-xs"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            className={`flex justify-center mt-16 transition-all duration-700 delay-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button className="btn-teal" onClick={() => window.open(WA_URL, "_blank")}>
              Agende Sua Avaliação Personalizada
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
