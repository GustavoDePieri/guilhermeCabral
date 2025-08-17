import { Button } from "@/components/ui/button";
import { Shield, Award, Heart, Users } from "lucide-react";

export default function FinalCTA() {
  const trustIndicators = [
    {
      icon: Shield,
      text: "Programa Exclusivo",
    },
    {
      icon: Award,
      text: "Certificado Profissional",
    },
    {
      icon: Heart,
      text: "Garantia de Acompanhamento",
    },
    {
      icon: Users,
      text: "+500 Pacientes Satisfeitos",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-deep-blue to-deep-blue/90" id="final-cta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 sm:mb-8 leading-tight">
            Pronto para viver sem medo de perder o seu sorriso?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto">
            Vamos juntos construir um futuro onde seus dentes acompanhem o ritmo
            natural da sua vida.
          </p>
          
          <div className="perfect-center flex-col gap-6 mb-12 sm:mb-16">
            <div className="w-full max-w-md sm:max-w-lg">
              <Button
                size="lg"
                className="btn-primary-standard btn-large w-full text-sm sm:text-base lg:text-lg"
                onClick={() => {
                  const quizElement = document.getElementById('quiz');
                  if (quizElement) {
                    quizElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Descubra seu Índice de Envelhecimento Bucal
              </Button>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-300">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center space-x-2">
                <indicator.icon className="h-5 w-5 text-futuristic-turquesa" />
                <span>{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
