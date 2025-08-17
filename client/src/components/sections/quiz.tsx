import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

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
        { value: "high", label: "Alto - sinto constantemente", score: 3 },
        { value: "moderate", label: "Moderado - em algumas situações", score: 2 },
        { value: "low", label: "Baixo - raramente me sinto estressado", score: 1 },
      ],
    },
    {
      id: "sleep",
      question: "Como é a qualidade do seu sono?",
      options: [
        { value: "poor", label: "Ruim - acordo cansado frequentemente", score: 3 },
        { value: "ok", label: "Regular - às vezes durmo mal", score: 2 },
        { value: "good", label: "Boa - durmo bem na maioria das noites", score: 1 },
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

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      setTimeout(() => {
        document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const calculateRisk = () => {
    // Check for instant high risk: sensitivity always triggers high risk
    if (answers.sensitivity === "always") {
      return {
        level: "Alto Risco",
        description: "A sensibilidade constante é um forte indicativo de SEPB. É fundamental buscar avaliação profissional imediatamente.",
        color: "text-red-500",
      };
    }

    // Count medium/high risk answers (excluding never/rarely/low answers)
    const riskAnswers = Object.entries(answers).filter(([questionId, answer]) => {
      // Medium to high risk indicators
      const mediumHighRiskAnswers = [
        'sometimes', 'visible', 'slight', 'stress', 'often', 'weekly', 'daily', 
        'regularly', 'few', 'multiple', 'moderate', 'high', 'poor', 'ok', 'years', 'year'
      ];
      return mediumHighRiskAnswers.includes(answer);
    }).length;

    // Any medium/high risk answer triggers at least medium risk
    if (riskAnswers >= 3) {
      return {
        level: "Alto Risco",
        description: "Múltiplos fatores indicam alto risco de SEPB. Seus dentes podem estar sofrendo desgaste acelerado.",
        color: "text-red-500",
      };
    } else if (riskAnswers >= 1) {
      return {
        level: "Risco Moderado",
        description: "Alguns fatores indicam possível desenvolvimento de SEPB. Prevenção é fundamental neste momento.",
        color: "text-yellow-500",
      };
    } else {
      return {
        level: "Baixo Risco",
        description: "Parabéns! Seus hábitos indicam baixo risco para SEPB. Continue cuidando bem dos seus dentes.",
        color: "text-green-500",
      };
    }
  };

  if (showResult) {
    const risk = calculateRisk();
    return (
      <section className="py-16 bg-white" id="quiz">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Tab-like header */}
            <div className="bg-gray-50 rounded-t-2xl p-4 sm:p-6 border-b-2 border-futuristic-turquesa">
              <h2 className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-deep-blue text-center">
                Seu Resultado
              </h2>
            </div>
            <div className="bg-white rounded-b-2xl shadow-xl p-4 sm:p-6 lg:p-8">
              <div className="space-y-6 text-center">
                <div className="text-center">
                  <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${risk.color} mb-4 leading-tight`}>
                    {risk.level}
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
                    {risk.description}
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <Button
                      size="lg"
                      className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold w-full text-sm sm:text-base px-4 py-3"
                      onClick={() => window.open('https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
                    >
                      Agendar Avaliação Personalizada
                    </Button>
                    <Button
                      variant="outline"
                      onClick={resetQuiz}
                      className="w-full rounded-full font-poppins font-medium text-sm sm:text-base px-4 py-3"
                    >
                      Refazer Quiz
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white" id="quiz">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Tab-like header */}
          <div className="bg-gray-50 rounded-t-2xl p-4 sm:p-6 border-b-2 border-futuristic-turquesa">
            <h2 className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-deep-blue text-center leading-tight">
              Descubra seu Risco de SEPB em 2 Minutos
            </h2>
            <p className="text-center text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base">
              Faça o teste para saber seu índice de envelhecimento bucal
            </p>
          </div>
          <div className="bg-white rounded-b-2xl shadow-xl p-4 sm:p-6 lg:p-8">
            <div className="space-y-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4 gap-4">
                  <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                    Questão {currentQuestion + 1} de {questions.length}
                  </span>
                  <div className="w-20 sm:w-32 bg-gray-200 rounded-full h-2 flex-shrink-0">
                    <div
                      className="bg-futuristic-turquesa h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <h3 className="font-poppins font-semibold text-lg sm:text-xl text-deep-blue mb-4 sm:mb-6 leading-tight">
                  {questions[currentQuestion].question}
                </h3>
                <RadioGroup
                  value={answers[questions[currentQuestion].id] || ""}
                  onValueChange={handleAnswer}
                  className="space-y-3 sm:space-y-4"
                >
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.value} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <RadioGroupItem value={option.value} id={option.value} className="mt-1 flex-shrink-0" />
                      <Label
                        htmlFor={option.value}
                        className="text-left cursor-pointer flex-1 text-sm sm:text-base leading-relaxed"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className="rounded-full font-poppins font-medium w-full sm:w-auto order-2 sm:order-1"
                >
                  Anterior
                </Button>
                <Button
                  onClick={nextQuestion}
                  disabled={!answers[questions[currentQuestion].id]}
                  className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-medium w-full sm:w-auto order-1 sm:order-2"
                >
                  {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}