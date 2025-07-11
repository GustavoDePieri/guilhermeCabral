export default function Timeline() {
  const steps = [
    {
      number: 1,
      title: "Avaliação Digital Completa",
      description: "Diagnóstico preciso usando tecnologia 3D para mapear cada detalhe da sua saúde bucal",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Professional dental examination with modern equipment"
    },
    {
      number: 2,
      title: "Diagnóstico Visual e Explicativo",
      description: "Você entende exatamente o que está acontecendo com seus dentes através de imagens claras",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Dentist explaining treatment plan to patient"
    },
    {
      number: 3,
      title: "Protocolo de Estabilização",
      description: "Tratamento personalizado para interromper o processo de desgaste imediatamente",
      image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Advanced dental treatment procedure"
    },
    {
      number: 4,
      title: "Educação e Acompanhamento",
      description: "Aprenda técnicas práticas para manter sua saúde bucal em casa",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Patient education and guidance session"
    },
    {
      number: 5,
      title: "Liberdade e Confiança",
      description: "Viva com a tranquilidade de saber que seus dentes estão protegidos para o futuro",
      image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
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
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                  <div className="lg:w-1/2 lg:pl-8">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
