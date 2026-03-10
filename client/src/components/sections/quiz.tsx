import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, RotateCcw } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const WA_URL =
  "https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB";

const questions = [
  {
    id: "sensitivity",
    question: "Você sente sensibilidade nos dentes?",
    options: [
      { value: "always", label: "Sempre, principalmente com bebidas geladas", score: 3 },
      { value: "sometimes", label: "Às vezes, depende do alimento", score: 2 },
      { value: "rarely", label: "Raramente ou nunca", score: 1 },
    ],
  },
  {
    id: "wear",
    question: "Você nota algum desgaste nos seus dentes?",
    options: [
      { value: "visible", label: "Sim, é visível e está piorando", score: 3 },
      { value: "slight", label: "Um pouco, principalmente nas pontas", score: 2 },
      { value: "none", label: "Não noto nenhum desgaste", score: 1 },
    ],
  },
  {
    id: "grinding",
    question: "Você range ou aperta os dentes?",
    options: [
      { value: "often", label: "Frequentemente, especialmente durante o sono", score: 3 },
      { value: "stress", label: "Apenas em situações de stress", score: 2 },
      { value: "never", label: "Nunca ou raramente", score: 1 },
    ],
  },
  {
    id: "acid",
    question: "Com que frequência você consome alimentos ácidos?",
    options: [
      { value: "daily", label: "Diariamente (refrigerantes, frutas cítricas)", score: 3 },
      { value: "weekly", label: "Algumas vezes por semana", score: 2 },
      { value: "rarely", label: "Raramente ou nunca", score: 1 },
    ],
  },
  {
    id: "exercise",
    question: "Você pratica atividades físicas regularmente?",
    options: [
      { value: "regularly", label: "Sim, pratico regularmente", score: 3 },
      { value: "sometimes", label: "Às vezes, quando possível", score: 2 },
      { value: "rarely", label: "Não pratico ou raramente", score: 1 },
    ],
  },
  {
    id: "medication",
    question: "Você toma medicamentos regularmente?",
    options: [
      { value: "multiple", label: "Sim, vários medicamentos", score: 3 },
      { value: "few", label: "Alguns medicamentos ocasionalmente", score: 2 },
      { value: "none", label: "Não tomo medicamentos", score: 1 },
    ],
  },
  {
    id: "stress",
    question: "Como você classifica seu nível de stress?",
    options: [
      { value: "high", label: "Alto — sinto constantemente", score: 3 },
      { value: "moderate", label: "Moderado — em algumas situações", score: 2 },
      { value: "low", label: "Baixo — raramente me sinto estressado", score: 1 },
    ],
  },
  {
    id: "sleep",
    question: "Como é a qualidade do seu sono?",
    options: [
      { value: "poor", label: "Ruim — acordo cansado frequentemente", score: 3 },
      { value: "ok", label: "Regular — às vezes durmo mal", score: 2 },
      { value: "good", label: "Boa — durmo bem na maioria das noites", score: 1 },
    ],
  },
  {
    id: "checkup",
    question: "Quando foi sua última visita ao dentista?",
    options: [
      { value: "years", label: "Há mais de 2 anos", score: 3 },
      { value: "year", label: "Há cerca de 1 ano", score: 2 },
      { value: "recent", label: "Nos últimos 6 meses", score: 1 },
    ],
  },
];

function calculateRisk(answers: Record<string, string>) {
  if (answers.sensitivity === "always") {
    return {
      level: "Alto Risco",
      description:
        "A sensibilidade constante é um forte indicativo de SEPB. É fundamental buscar avaliação profissional imediatamente.",
      color: "#ef4444",
      bg: "rgba(239,68,68,0.1)",
    };
  }
  const medHighAnswers = [
    "sometimes", "visible", "slight", "stress", "often", "weekly", "daily",
    "regularly", "few", "multiple", "moderate", "high", "poor", "ok", "years", "year",
  ];
  const riskCount = Object.values(answers).filter((a) => medHighAnswers.includes(a)).length;

  if (riskCount >= 3) {
    return {
      level: "Alto Risco",
      description:
        "Múltiplos fatores indicam alto risco de SEPB. Seus dentes podem estar sofrendo desgaste acelerado.",
      color: "#ef4444",
      bg: "rgba(239,68,68,0.1)",
    };
  } else if (riskCount >= 1) {
    return {
      level: "Risco Moderado",
      description:
        "Alguns fatores indicam possível desenvolvimento de SEPB. Prevenção é fundamental neste momento.",
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.1)",
    };
  } else {
    return {
      level: "Baixo Risco",
      description:
        "Parabéns! Seus hábitos indicam baixo risco para SEPB. Continue cuidando bem dos seus dentes.",
      color: "#10b981",
      bg: "rgba(16,185,129,0.1)",
    };
  }
}

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const { ref, inView } = useInView();

  const q = questions[current];
  const selected = answers[q.id];
  const progress = ((current + 1) / questions.length) * 100;

  const handleSelect = (value: string) => {
    setAnswers({ ...answers, [q.id]: value });
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setCurrent(0);
    setAnswers({});
    setDone(false);
  };

  const risk = done ? calculateRisk(answers) : null;

  return (
    <section className="section-gray" id="quiz">
      <div className="container-xl">
        <div ref={ref}>
          {/* Header */}
          <div
            className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="section-label mb-3">Diagnóstico</p>
            <h2 className="heading-lg text-gray-900 mb-3">
              Descubra seu Risco de SEPB{" "}
              <span className="gradient-text">em 2 Minutos</span>
            </h2>
            <p className="text-gray-500">
              Faça o teste gratuito para conhecer seu índice de envelhecimento bucal
            </p>
          </div>

          <div
            className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {done && risk ? (
              /* Result screen */
              <div className="card-white rounded-3xl p-8 sm:p-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  style={{ background: risk.bg }}
                >
                  <CheckCircle className="h-8 w-8" style={{ color: risk.color }} />
                </div>
                <div className="text-center mb-6">
                  <div
                    className="text-4xl sm:text-5xl font-bold mb-3"
                    style={{ fontFamily: "Poppins, sans-serif", color: risk.color }}
                  >
                    {risk.level}
                  </div>
                  <p className="text-gray-700 leading-relaxed max-w-md mx-auto">
                    {risk.description}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                  <button
                    className="btn-teal flex-1"
                    onClick={() => window.open(WA_URL, "_blank")}
                  >
                    Agendar Avaliação
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    className="btn-outline-teal"
                    onClick={reset}
                  >
                    <RotateCcw className="h-4 w-4" />
                    Refazer
                  </button>
                </div>
              </div>
            ) : (
              /* Quiz screen */
              <div className="card-white rounded-3xl overflow-hidden">
                {/* Progress bar */}
                <div className="h-1.5 bg-gray-100">
                  <div
                    className="h-1.5 transition-all duration-500"
                    style={{ width: `${progress}%`, background: "var(--teal)" }}
                  />
                </div>

                <div className="p-6 sm:p-10">
                  {/* Counter */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs text-gray-400" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Questão {current + 1} de {questions.length}
                    </span>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(0,191,165,0.1)",
                        color: "var(--teal)",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {Math.round(progress)}% concluído
                    </span>
                  </div>

                  {/* Question */}
                  <h3
                    className="heading-md text-gray-900 mb-6"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {q.question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3 mb-8">
                    {q.options.map((opt) => {
                      const isSelected = selected === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleSelect(opt.value)}
                          className="w-full text-left rounded-2xl border-2 p-4 transition-all duration-200 flex items-center gap-3"
                          style={{
                            borderColor: isSelected ? "var(--teal)" : "#e5e7eb",
                            background: isSelected ? "rgba(0,191,165,0.06)" : "#fff",
                          }}
                        >
                          <div
                            className="w-5 h-5 rounded-full border-2 flex-shrink-0 transition-all duration-200 flex items-center justify-center"
                            style={{
                              borderColor: isSelected ? "var(--teal)" : "#d1d5db",
                              background: isSelected ? "var(--teal)" : "transparent",
                            }}
                          >
                            {isSelected && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                          <span
                            className="text-sm leading-relaxed"
                            style={{
                              color: isSelected ? "#111827" : "#6b7280",
                              fontWeight: isSelected ? 500 : 400,
                            }}
                          >
                            {opt.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Nav buttons */}
                  <div className="flex gap-3">
                    {current > 0 && (
                      <button
                        className="btn-outline-teal"
                        onClick={() => setCurrent(current - 1)}
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Anterior
                      </button>
                    )}
                    <button
                      className="btn-teal flex-1"
                      onClick={next}
                      disabled={!selected}
                      style={{ opacity: selected ? 1 : 0.4, cursor: selected ? "pointer" : "not-allowed" }}
                    >
                      {current === questions.length - 1 ? "Ver Resultado" : "Próxima"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
