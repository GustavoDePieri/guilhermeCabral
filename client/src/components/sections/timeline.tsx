import { Button } from "@/components/ui/button";

export default function Timeline() {
  const steps = [
    {
      number: 1,
      title: "Avaliação Digital Completa",
      description: "Anamnese detalhada e trabalho multidisciplinar para diagnosticar a causa do problema usando tecnologia 3D para mapear cada detalhe da sua saúde bucal",
      image: "/fotos/IMG_8159.PNG",
      alt: "Professional dental examination with modern equipment"
    },
    {
      number: 2,
      title: "Diagnóstico Visual e Explicativo",
      description: "Você entende, com imagens claras e explicações didáticas, o que está causando o desgaste dos seus dentes — e aprende como agir para interrompê-lo antes que cause danos maiores. Isso devolve a você o controle da sua saúde bucal, sem depender exclusivamente do dentista para corrigir problemas depois que já aconteceram.",
      image: "/fotos/IMG_8139.jpg",
      alt: "Dentist explaining treatment plan to patient"
    },
    {
      number: 3,
      title: "Tratamento personalizado para interromper o desgaste e proteger seus dentes",
      description: [
        "Você recebe um plano de cuidado individualizado que:",
        "• Interrompe o processo de desgaste ativo",
        "• Reduz a sensibilidade dental que esse desgaste provoca", 
        "• Inclui procedimentos diminuem o impacto dos fatores que causam esses desgastes"
      ],
      image: "/fotos/IMG_1915.JPG",
      alt: "Advanced dental treatment procedure"
    },
    {
      number: 4,
      title: "Educação e orientação continuada",
      description: [
        "Você fará parte de uma comunidade exclusiva que mantém contato direto com você para esclarecer dúvidas sobre qualquer situação que possa impactar seus dentes. Além disso, vai ter acesso a:",
        "• Vídeos e lives explicativos que mostram, na prática, como evitar o desgaste no dia a dia",
        "• Flyers, folders e materiais visuais claros que ajudam a identificar riscos e agir com segurança",
        "• Conteúdos atualizados que tornam você protagonista no cuidado com sua saúde bucal",
        "Tudo para que você tenha conhecimento e suporte contínuos para manter seus dentes protegidos."
      ],
      image: "/fotos/Screenshot 2025-08-17 at 15.46.07.png",
      alt: "Patient education and guidance session"
    },
    {
      number: 5,
      title: "Liberdade e Confiança",
      description: [
        "Ao finalizar o protocolo, você conquista muito mais que dentes restaurados:",
        "• Livre da sensibilidade que antes limitava sua alimentação e causava desconforto diário",
        "• Sem medo de morder, quebrar ou perder dentes de forma inesperada", 
        "• Tranquilidade de saber que seus dentes estão saudáveis, com os fatores de desgaste controlados",
        "• Segurança de que seu sorriso vai permanecer bonito e funcional por muito mais tempo",
        "• Autonomia real para identificar riscos e agir antes que pequenos problemas se tornem grandes",
        "• Confiança na própria rotina de cuidado, sem depender apenas de consultas para manter seus dentes protegidos",
        "Viva com a certeza de que você tem o conhecimento, as ferramentas e o suporte necessários para envelhecer sorrindo — com saúde e liberdade."
      ],
      image: "/fotos/ChatGPT Image 17 de ago. de 2025, 15_56_14.png",
      alt: "Happy patient with confident smile"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl text-deep-blue text-center mb-16">
            Passo a Passo da Sua Transformação
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-futuristic-turquesa/20 hidden lg:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.number} className={`flex flex-col lg:flex-row${index % 2 === 1 ? '-reverse' : ''} items-center gap-8`}>
                  <div className="lg:w-1/2 lg:pr-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-futuristic-turquesa rounded-full flex items-center justify-center text-white font-poppins font-bold text-xl">
                        {step.number}
                      </div>
                      <h3 className="font-poppins font-semibold text-2xl text-deep-blue ml-4">
                        {step.title}
                      </h3>
                    </div>
                    {Array.isArray(step.description) ? (
                      <div className="text-gray-600 text-lg space-y-2">
                        {step.description.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    )}
                  </div>
                  <div className="lg:w-1/2 lg:pl-8">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="rounded-xl shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="text-center mt-16">
              <Button
                size="lg"
                className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold"
                onClick={() => window.open('https://wa.me/554898864120?text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
              >
                Agende Sua Avaliação Personalizada
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
