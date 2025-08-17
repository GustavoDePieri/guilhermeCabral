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
    <section className="py-20 bg-white" id="protocolo">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-deep-blue">
              Programa Digital de estabilização da SEPB
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Método exclusivo que combina tecnologia avançada, conhecimento e acompanhamento contínuo para diagnosticar, proteger e preservar seus dentes naturais — muito além da restauração tradicional.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Além de cuidar, ele te dá o poder de entender cada detalhe, tomar decisões seguras e controlar o desgaste a longo prazo, tornando você protagonista da sua saúde bucal.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-futuristic-turquesa/10 p-3 rounded-full">
                    <feature.icon className="h-6 w-6 text-futuristic-turquesa" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-deep-blue">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
            >
              Quero Saber Mais
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Dental technology scanner in action"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="font-poppins font-bold text-xl text-futuristic-turquesa">
                  SEPB
                </div>
                <div className="text-sm text-gray-600">Program</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
