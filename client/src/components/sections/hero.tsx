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
              Conheça o protocolo que devolve o controle da sua saúde bucal
              antes que seja tarde.
            </p>
            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold text-base md:text-lg transform hover:scale-105 transition-all px-6 md:px-8 py-3 md:py-4"
              >
                Descubra seu Índice de Envelhecimento Bucal
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white rounded-full font-poppins font-semibold text-base md:text-lg transition-all px-6 md:px-8 py-3 md:py-4"
                onClick={() => window.open('https://wa.me/5548999547607?text=Olá! Gostaria de agendar uma avaliação personalizada do Protocolo SEPB-Digital®', '_blank')}
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
            <div className="bg-gradient-to-br from-futuristic-turquesa/10 to-deep-blue/10 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern dental office with advanced equipment"
                className="rounded-xl shadow-xl w-full h-auto"
              />
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
                  <div className="text-xs text-gray-600">SEPB-Digital®</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
