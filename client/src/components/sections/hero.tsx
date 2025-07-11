import { Button } from "@/components/ui/button";
import { Shield, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-poppins font-bold text-5xl lg:text-6xl text-deep-blue leading-tight">
              Seus dentes estão{" "}
              <span className="text-futuristic-turquesa">envelhecendo</span> mais
              rápido que você?
            </h1>
            <p className="text-xl text-gray-600 font-roboto leading-relaxed">
              Conheça o protocolo que devolve o controle da sua saúde bucal
              antes que seja tarde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold text-lg transform hover:scale-105 transition-all"
              >
                Descubra seu Índice de Envelhecimento Bucal
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white rounded-full font-poppins font-semibold text-lg transition-all"
              >
                Agende sua Avaliação Personalizada
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-futuristic-turquesa" />
                <span>Protocolo Exclusivo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-futuristic-turquesa" />
                <span>+500 Pacientes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-futuristic-turquesa" />
                <span>Certificado</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern dental office with advanced equipment"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-futuristic-turquesa/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
