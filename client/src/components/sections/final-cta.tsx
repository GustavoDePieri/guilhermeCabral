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
    <section className="py-20 bg-gradient-to-br from-deep-blue to-deep-blue/90" id="final-cta">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-5xl text-white mb-8">
            Pronto para viver sem medo de perder o seu sorriso?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Vamos juntos construir um futuro onde seus dentes acompanhem o ritmo
            natural da sua vida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold text-lg transform hover:scale-105 transition-all px-10 py-5"
              onClick={() => {
                const quizElement = document.getElementById('quiz');
                if (quizElement) {
                  quizElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Descubra seu Índice de Envelhecimento Bucal
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-deep-blue rounded-full font-poppins font-semibold text-lg transition-all px-10 py-5"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
            >
              Agende Sua Avaliação
            </Button>
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
