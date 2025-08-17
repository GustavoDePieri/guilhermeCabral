import { Button } from "@/components/ui/button";
import { Microscope, TrendingUp, Shield, GraduationCap } from "lucide-react";

export default function Protocol() {
  const features = [
    {
      icon: Microscope,
      title: "Diagnóstico e digital",
      description: "Tecnologia avançada para identificar desgaste dos dentes",
    },
    {
      icon: TrendingUp,
      title: "Registro visual do seu progresso",
      description: "Acompanhe sua evolução ao longo do tempo",
    },
    {
      icon: Shield,
      title: "Proteção contra desgaste",
      description: "Intervenção preventiva e tratar os danos já causados",
    },
    {
      icon: GraduationCap,
      title: "Educação prática para autonomia",
      description: "Aprenda a cuidar da sua saúde bucal",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" id="protocolo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-deep-blue leading-tight">
              Programa Digital de estabilização da SEPB
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Método exclusivo que combina tecnologia avançada, conhecimento e acompanhamento contínuo para diagnosticar, proteger e preservar seus dentes naturais — muito além da restauração tradicional.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Além de cuidar, ele te dá o poder de entender cada detalhe, tomar decisões seguras e controlar o desgaste a longo prazo, tornando você protagonista da sua saúde bucal.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-futuristic-turquesa/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-futuristic-turquesa" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-poppins font-semibold text-base sm:text-lg text-deep-blue mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <Button
                size="lg"
                className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
              >
                Quero Saber Mais
              </Button>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Dental technology scanner in action"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="font-poppins font-bold text-lg sm:text-xl text-futuristic-turquesa">
                  SEPB
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Program</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
