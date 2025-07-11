import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Você sente sensibilidade nos dentes?",
    options: [
      { value: "sempre", label: "Sempre, principalmente com bebidas geladas" },
      { value: "as-vezes", label: "Às vezes, depende do alimento" },
      { value: "raramente", label: "Raramente ou nunca" },
    ],
  },
  {
    id: 2,
    question: "Com que frequência você acorda com dor de cabeça ou maxilar?",
    options: [
      { value: "frequentemente", label: "Frequentemente" },
      { value: "ocasionalmente", label: "Ocasionalmente" },
      { value: "nunca", label: "Nunca" },
    ],
  },
  {
    id: 3,
    question: "Você percebe desgaste nos seus dentes?",
    options: [
      { value: "sim-visivel", label: "Sim, é visível" },
      { value: "suspeito", label: "Suspeito que sim" },
      { value: "nao-percebo", label: "Não percebo" },
    ],
  },
  {
    id: 4,
    question: "Você range ou aperta os dentes?",
    options: [
      { value: "sei-que-sim", label: "Sei que sim" },
      { value: "disseram-que-sim", label: "Já me disseram que sim" },
      { value: "nao-acredito", label: "Não acredito" },
    ],
  },
  {
    id: 5,
    question: "Seus dentes estão ficando mais curtos com o tempo?",
    options: [
      { value: "definitivamente", label: "Definitivamente sim" },
      { value: "talvez", label: "Talvez" },
      { value: "nao-notei", label: "Não notei" },
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateRisk = () => {
    const riskScore = Object.values(answers).reduce((score, answer) => {
      if (answer === "sempre" || answer === "frequentemente" || answer === "sim-visivel" || answer === "sei-que-sim" || answer === "definitivamente") {
        return score + 3;
      }
      if (answer === "as-vezes" || answer === "ocasionalmente" || answer === "suspeito" || answer === "disseram-que-sim" || answer === "talvez") {
        return score + 2;
      }
      return score + 1;
    }, 0);

    if (riskScore >= 12) return { level: "Alto", color: "text-red-500", description: "Sinais evidentes de SEPB. Recomendamos avaliação urgente." };
    if (riskScore >= 8) return { level: "Moderado", color: "text-yellow-500", description: "Alguns sinais de risco. Prevenção é fundamental." };
    return { level: "Baixo", color: "text-green-500", description: "Ótimo! Mantenha os cuidados preventivos." };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    const risk = calculateRisk();
    return (
      <section className="py-16 bg-deep-blue" id="quiz">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-white rounded-2xl p-8 shadow-xl">
              <CardContent className="space-y-6">
                <h2 className="font-poppins font-bold text-3xl text-deep-blue">
                  Seu Resultado
                </h2>
                <div className="text-center">
                  <div className={`text-6xl font-bold ${risk.color} mb-4`}>
                    {risk.level}
                  </div>
                  <p className="text-lg text-gray-600 mb-8">
                    {risk.description}
                  </p>
                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold w-full"
                    >
                      Agendar Avaliação Personalizada
                    </Button>
                    <Button
                      variant="outline"
                      onClick={resetQuiz}
                      className="w-full rounded-full font-poppins font-medium"
                    >
                      Refazer Quiz
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-deep-blue" id="quiz">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl text-white mb-8">
            Avalie seu Risco de SEPB em 2 Minutos
          </h2>
          <Card className="bg-white rounded-2xl p-8 shadow-xl">
            <CardContent className="space-y-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    Questão {currentQuestion + 1} de {questions.length}
                  </span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-futuristic-turquesa h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-deep-blue mb-6">
                  {questions[currentQuestion].question}
                </h3>
                <RadioGroup
                  value={answers[questions[currentQuestion].id] || ""}
                  onValueChange={handleAnswer}
                  className="space-y-4"
                >
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label
                        htmlFor={option.value}
                        className="text-left cursor-pointer flex-1"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className="rounded-full font-poppins font-medium"
                >
                  Anterior
                </Button>
                <Button
                  onClick={nextQuestion}
                  disabled={!answers[questions[currentQuestion].id]}
                  className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-medium"
                >
                  {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
