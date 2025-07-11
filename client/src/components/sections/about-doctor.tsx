import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AboutDoctor() {
  const credentials = [
    "Especialista em diagnóstico e prevenção de desgastes não cariosos",
    "Idealizador do Protocolo SEPB-Digital®",
    "Mais de 15 anos de experiência em odontologia minimamente invasiva",
    "Cursos e formações internacionais",
    "Palestrante e mentor em saúde bucal preventiva",
  ];

  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-poppins font-bold text-4xl text-deep-blue">
                Quem está por trás do Protocolo SEPB-Digital®
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Sou o Dr. Guilherme Santos, cirurgião-dentista apaixonado por
                  ensinar pessoas a manterem seus dentes naturais pelo maior
                  tempo possível. Minha missão é transformar informação e
                  tecnologia em liberdade real, para que você não dependa de
                  tratamentos invasivos amanhã.
                </p>
                
                <div className="space-y-4">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-futuristic-turquesa rounded-full flex items-center justify-center mt-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-600">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button
                size="lg"
                className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold"
              >
                Conheça Minha História
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800"
                alt="Dr. Guilherme Santos, professional portrait"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Authority badges */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="text-center">
                    <div className="font-poppins font-semibold text-deep-blue">
                      +500
                    </div>
                    <div className="text-xs text-gray-600">Pacientes</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="text-center">
                    <div className="font-poppins font-semibold text-deep-blue">
                      15+
                    </div>
                    <div className="text-xs text-gray-600">Anos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
