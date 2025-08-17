import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AboutDoctor() {
  const credentials = [
    "Especialista em Destística - Zenith - Florianópolis 2021-2023",
    "Curso Técnicas avançadas em restaurações em resina composta - Unisul - Tubarão 2019-2020",
    "Curso Imersão em endodontia mecanizada Oswaldo - Unisul - Tubarão 2018-2019",
    "Atualização em Endodontia Mecanizada - ADCB Magic school - Florianópolis 2020-2021",
    "Curso Resina composta Avançada - Ronaldo Hirata 2022",
    "Curso Estética em Função - Marcelo Calamita - Moss Tubarão 2024",
    "Curso de Prevenção e Saúde Renovar - André Kimura - Londrina 2024",
    "Curso Prescrição de Canabidiol na Odontologia - Guilherme Martins 2024",
    "Curso Laminados Cerâmicos InMerso - Andre Kimura 2024",
    "Curso Facetas Resinas Composta Técnica Direta-Indireta Chroma - Andre Kimura 2024",
    "Curso Prótese Sobre Implante - Zenith - Florianópolis 2025",
    "Curso Síndrome do Envelhecimento Precoce Bucal - Comunidade PRO - 2025",
  ];

  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="heading-primary text-left">
                Quem está por trás do Programa Digital de estabilização da SEPB
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Sou Dr. Guilherme Cabral, cirurgião-dentista especialista em Dentística, focado no diagnóstico e tratamento dos desgastes dentários, cariosos ou não.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Este projeto nasceu para revelar um problema pouco conhecido, mas grave: a Síndrome do Envelhecimento Bucal Precoce (SEPB). Minha missão é combater a SEPB, evitando que mais pessoas percam dentes por causa dessa condição silenciosa.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ofereço educação, acompanhamento e proteção real para o seu sorriso, por meio de lives, vídeos e do protocolo SEPB-Digital®.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Trabalho com odontologia minimamente invasiva e preventiva, porque acredito que qualidade de vida é a maior riqueza. Mastigar sem medo e sorrir com confiança são direitos que quero ajudar você a manter.
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
                className="btn-primary-standard btn-large"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
              >
                Conheça Minha História
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="/FotoPerfilGuilherme.jpeg"
                alt="Dr. Guilherme Ricardo Cabral dos Santos, professional portrait"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Authority badges */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="text-center">
                    <div className="font-poppins font-semibold text-deep-blue">
                      +500
                    </div>
                    <div className="text-xs text-gray-600">Vidas transformadas</div>
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
