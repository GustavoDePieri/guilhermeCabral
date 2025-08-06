import { Button } from "@/components/ui/button";
import { Shield, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-blue leading-tight">
              Seus dentes estão{" "}
              <span className="text-futuristic-turquesa">envelhecendo</span> mais
              rápido que você?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-roboto leading-relaxed">
              Saiba o que é a SEPB e como você pode ter o controle sobre o desgaste dos seus dentes.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <p className="font-poppins font-semibold text-deep-blue">Ela está relacionada a:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
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
            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold text-base md:text-lg transform hover:scale-105 transition-all px-6 md:px-8 py-3 md:py-4"
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
                className="border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white rounded-full font-poppins font-semibold text-base md:text-lg transition-all px-6 md:px-8 py-3 md:py-4"
                onClick={() => window.open('https://wa.me/5548999547607?text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
              >
                Agende sua Avaliação Personalizada
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-futuristic-turquesa" />
                <span>Protocolo Exclusivo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-futuristic-turquesa" />
                <span>+500 Pacientes</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-futuristic-turquesa/10 to-deep-blue/10 rounded-2xl p-6 shadow-2xl">
              <video
                src="/video de consientizacao da SEPB.mp4"
                controls
                preload="metadata"
                className="rounded-xl shadow-xl w-full h-auto min-h-[350px] md:min-h-[450px] lg:min-h-[550px]"
                poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMkY0ODVFIi8+CjxjaXJjbGUgY3g9IjQwMCIgY3k9IjMwMCIgcj0iNjAiIGZpbGw9IiM0NENEOEI4IiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8cGF0aCBkPSJNMzU1IDI2NUw0NDUgMzAwTDM1NSAzMzVWMjY1WiIgZmlsbD0iI0ZGRkZGRiIvPgo8dGV4dCB4PSI0MDAiIHk9IjM4MCIgZm9udC1mYW1pbHk9IlBvcHBpbnMsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNGRkZGRkYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlbDrWRlbyBkZSBDb25zY2llbnRpemHDp8OjbyBkYSBTRVBCPC90ZXh0Pgo8dGV4dCB4PSI0MDAiIHk9IjQyMCIgZm9udC1mYW1pbHk9IlBvcHBpbnMsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC44IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DbGlxdWUgcGFyYSBhc3Npc3RpcjwvdGV4dD4KPC9zdmc+"
              >
                Seu navegador não suporta vídeo.
              </video>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="w-12 h-12 bg-futuristic-turquesa rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-soft-green rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-deep-blue text-sm">
                    Protocolo Digital
                  </div>
                  <div className="text-xs text-gray-600">SEPB Program</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
