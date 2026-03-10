import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "@/hooks/use-in-view";

const WA_URL =
  "https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB";

const testimonials = [
  {
    name: "Daniel Parra",
    initial: "D",
    text: "Sou de fora de Jaguaruna e fiquei impressionado pela agilidade no agendamento e atenção na consulta. Alto nível de tecnologia — fiz o processo com um smart glass assistindo Netflix.",
    rating: 5,
    timeAgo: "4 semanas",
    color: "#00BFA5",
  },
  {
    name: "Ana Clara",
    initial: "A",
    text: "Finalmente encontrei um dentista que se preocupa em ensinar e não apenas tratar. O Dr. Guilherme explicou tudo sobre a SEPB de forma clara e agora sei como proteger meus dentes.",
    rating: 5,
    timeAgo: "2 meses",
    color: "#3b82f6",
  },
  {
    name: "Roberto Silva",
    initial: "R",
    text: "Tecnologia incrível! O diagnóstico digital mostrou problemas que nem sabia que existiam. Agora entendo como manter meus dentes saudáveis por muito mais tempo.",
    rating: 5,
    timeAgo: "2 semanas",
    color: "#8b5cf6",
  },
  {
    name: "Fernanda Costa",
    initial: "F",
    text: "O Dr. Guilherme é muito atencioso e usa tecnologia de ponta. Me senti muito bem cuidada e aprendi muito sobre prevenção. Recomendo para todos!",
    rating: 5,
    timeAgo: "1 semana",
    color: "#ec4899",
  },
  {
    name: "João Pedro",
    initial: "J",
    text: "Sempre tive medo de dentista, mas o Dr. Guilherme me deixou super tranquilo. O tratamento foi moderno e indolor. Agora sei como cuidar melhor dos meus dentes.",
    rating: 5,
    timeAgo: "5 dias",
    color: "#f59e0b",
  },
  {
    name: "Marina Oliveira",
    initial: "M",
    text: "Excelente profissional! O programa digital me ajudou a entender que desgaste dental pode ser prevenido. Mudou minha vida completamente.",
    rating: 5,
    timeAgo: "1 mês",
    color: "#10b981",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="section-light" id="testimonials">
      <div className="container-xl">
        <div ref={ref}>
          {/* Header */}
          <div
            className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="section-label mb-3">Depoimentos</p>
            <h2 className="heading-lg text-gray-900">
              O que nossos{" "}
              <span className="gradient-text">pacientes dizem</span>
            </h2>
          </div>

          {/* Video testimonial */}
          <div
            className={`mb-14 flex justify-center transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xl w-full p-1"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,191,165,0.6) 0%, rgba(0,64,128,0.4) 100%)",
              }}
            >
              <div className="rounded-2xl overflow-hidden bg-black">
                <video
                  src="/DepoimentoVideoprincipal.mp4"
                  controls
                  preload="metadata"
                  className="w-full h-auto rounded-xl"
                  style={{ maxHeight: "320px" }}
                >
                  Seu navegador não suporta vídeo.
                </video>
              </div>
            </div>
          </div>

          {/* Testimonial cards */}
          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {current.map((t, i) => (
              <div key={`${page}-${i}`} className="card-white p-6 flex flex-col gap-4">
                {/* Quote icon */}
                <Quote className="h-6 w-6 opacity-20" style={{ color: t.color }} />

                {/* Text */}
                <p className="text-gray-700 text-sm leading-relaxed flex-1">"{t.text}"</p>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-1 border-t border-gray-100">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: t.color, fontFamily: "Poppins, sans-serif" }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold text-gray-900"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400">{t.timeAgo} atrás</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-teal hover:text-teal transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  style={{
                    background: i === page ? "var(--teal)" : "#e5e7eb",
                    transform: i === page ? "scale(1.3)" : "scale(1)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-teal hover:text-teal transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="btn-teal" onClick={() => window.open(WA_URL, "_blank")}>
              Agende Sua Avaliação
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
