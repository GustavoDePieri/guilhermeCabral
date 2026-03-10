import { Book, Video, Lightbulb, Users, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const WA_URL =
  "https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB";

const features = [
  {
    icon: Book,
    title: "Conteúdos Exclusivos",
    description: "Acesso a materiais atualizados e técnicas avançadas de prevenção bucal.",
  },
  {
    icon: Video,
    title: "Lives Especializadas",
    description: "Sessões ao vivo com especialistas de diferentes áreas da saúde.",
  },
  {
    icon: Lightbulb,
    title: "Orientação Prática",
    description: "Dicas e técnicas para aplicar imediatamente no seu dia a dia.",
  },
  {
    icon: Users,
    title: "Suporte da Comunidade",
    description: "Apoio de pessoas que compartilham os mesmos valores e objetivos.",
  },
];

export default function Community() {
  const { ref, inView } = useInView();

  return (
    <section className="section-light" id="comunidade">
      <div className="container-xl">
        <div ref={ref}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: text + features */}
            <div
              className={`space-y-8 transition-all duration-700 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div>
                <p className="section-label mb-3">Comunidade</p>
                <h2 className="heading-lg text-gray-900 mb-4">
                  Assuma o comando da{" "}
                  <span className="gradient-text">sua própria saúde bucal</span>
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  A Comunidade Ponto da Virada é um espaço gratuito de suporte, aprendizado e
                  evolução contínua para quem quer cuidar de verdade dos seus dentes.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className={`card-teal-border p-5 flex flex-col gap-3 transition-all duration-500 ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${i * 100 + 200}ms` }}
                  >
                    <div className="icon-teal-soft">
                      <f.icon className="h-5 w-5" style={{ color: "var(--teal)" }} />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-gray-900 text-sm mb-1"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {f.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="btn-teal" onClick={() => window.open(WA_URL, "_blank")}>
                Quero Fazer Parte
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Right: visual */}
            <div
              className={`relative transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, var(--navy) 0%, #0d2a4a 100%)",
                  minHeight: "420px",
                  padding: "40px",
                }}
              >
                {/* Content inside the dark card */}
                <div className="flex flex-col h-full justify-between gap-8">
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: "var(--teal)" }}
                    >
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3
                      className="text-white text-xl font-bold mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Ponto da Virada
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Faça parte de uma comunidade que tem como foco melhorar sua saúde bucal e
                      transformar sua relação com o seu sorriso.
                    </p>
                  </div>

                  {/* Mock community stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "+500", label: "Membros" },
                      { value: "100%", label: "Gratuito" },
                      { value: "24/7", label: "Suporte" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl text-center p-4"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                      >
                        <div
                          className="font-bold text-xl gradient-text"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {s.value}
                        </div>
                        <div className="text-gray-400 text-xs mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Image row */}
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=280&q=80"
                    alt="Comunidade dental"
                    className="w-full h-40 object-cover rounded-2xl opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
