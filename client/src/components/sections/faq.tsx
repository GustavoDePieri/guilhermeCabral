import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Por que nunca ouvi falar sobre SEPB?",
      answer: "A SEPB é um conceito relativamente novo na odontologia. Muitos profissionais ainda focam apenas no tratamento de cáries, mas o desgaste não carioso é uma realidade crescente que precisa ser abordada preventivamente.",
    },
    {
      question: "Quanto tempo demora o protocolo?",
      answer: "O protocolo inicial leva de 2 a 4 sessões, dependendo do caso. O acompanhamento é contínuo, com revisões a cada 3-6 meses para garantir a eficácia a longo prazo.",
    },
    {
      question: "É dolorido?",
      answer: "Não! O protocolo é minimamente invasivo. A maioria dos procedimentos é indolor, e quando necessário, usamos anestesia local. O foco é na prevenção, não em tratamentos agressivos.",
    },
    {
      question: "Esse tratamento serve para mim?",
      answer: "O protocolo é ideal para qualquer pessoa que queira preservar seus dentes naturais. É especialmente indicado para quem tem sensibilidade, desgaste visível ou histórico de problemas dentários recorrentes.",
    },
    {
      question: "Preciso vir muitas vezes ao consultório?",
      answer: "Após a fase inicial, o acompanhamento é espaçado. A ideia é que você ganhe autonomia para cuidar da sua saúde bucal, reduzindo a necessidade de visitas frequentes ao consultório.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-primary mb-16">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-standard">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left perfect-center justify-between focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="card-header-standard text-lg text-left">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-futuristic-turquesa transition-transform flex-shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="card-text-standard text-left">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="perfect-center mt-12">
            <Button
              size="lg"
              className="btn-primary-standard btn-large"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
            >
              Tire Suas Dúvidas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
