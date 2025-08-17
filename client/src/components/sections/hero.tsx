import { Button } from "@/components/ui/button";
import { Shield, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-deep-blue leading-tight">
              Seus dentes estão{" "}
              <span className="text-futuristic-turquesa">envelhecendo</span> mais
              rápido que você?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-roboto leading-relaxed">
              Saiba o que é a SEPB e como você pode ter o controle sobre o desgaste dos seus dentes.
            </p>
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
              <p className="font-poppins font-semibold text-deep-blue text-sm sm:text-base">Ela está relacionada a:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
                <div>• Alimentação</div>
                <div>• Problemas gástricos</div>
                <div>• Problemas de Stress/ansiedade</div>
                <div>• Atividade Física</div>
                <div>• Uso de substâncias</div>
                <div>• Uso de medicamentos</div>
                <div>• Qualidade do sono</div>
                <div>• Estilo de vida</div>
                <div className="sm:col-span-2">• Entre outros...</div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Button
                size="lg"
                className="btn-primary-standard btn-large w-full text-sm sm:text-base md:text-lg"
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
                className="btn-secondary-standard btn-large w-full text-sm sm:text-base md:text-lg"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
              >
                Agende sua Avaliação Personalizada
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-futuristic-turquesa flex-shrink-0" />
                <span>Protocolo Exclusivo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-futuristic-turquesa flex-shrink-0" />
                <span>+500 Pacientes</span>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-futuristic-turquesa/10 to-deep-blue/10 rounded-2xl p-3 sm:p-6 shadow-2xl">
              <video
                src="/video de consientizacao da SEPB.mp4"
                controls
                preload="metadata"
                className="rounded-xl shadow-xl w-full h-auto min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[550px]"
              >
                Seu navegador não suporta vídeo.
              </video>
            </div>
            
            {/* Floating elements - hidden on small screens to prevent overflow */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-white rounded-full p-3 sm:p-4 shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-futuristic-turquesa rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
            
            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 sm:p-4 shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-soft-green rounded-full flex items-center justify-center">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-deep-blue text-xs sm:text-sm">
                    Protocolo Digital
                  </div>
                  <div className="text-xs text-gray-600">Programa Digital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
