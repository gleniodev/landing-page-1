import Image from "next/image";
import { Container } from "./Container";
import DollarImg from "@/assets/dollar 2.png";
import LinesDollarTop from "@/assets/linesDollarTop.png";

export function SectionTwoo() {
  return (
    <section className="w-full lg:pt-20 lg:pb-0">
      <Container>
        <div className="w-full flex flex-1 flex-col items-center justify-center gap-20 lg:gap-28">
          <div>
            <h2 className="text-[34px] lg:text-[48px] font-bold">Agora Ficou Fácil!!!</h2>
          </div>
          <div className="flex w-full h-full gap-8 md:justify-center">
            <div>
              <Image
                className="hidden md:self-end lg:block"
                src={DollarImg}
                alt="Woman"
              />
            </div>
            <div>
              <div>
                <Image
                  className="hidden md:self-end md:block"
                  src={LinesDollarTop}
                  alt="Woman"
                />
                <div className="text-xl text-center relative flex flex-col gap-8 md:max-w-[620px] md:text-2xl md:text-justify md:leading-10 md:pl-14 md:-inset-y-16">
                  <p>
                    Um importante projeto de lei foi aprovado recentemente,
                    concedendo um significativo aumento salarial para os
                    servidores. Essa iniciativa é um passo crucial em direção ao
                    reconhecimento e valorização da dedicação e esforço desses
                    profissionais.{" "}
                  </p>
                  <p>
                    Agora, você pode aproveitar as oportunidades disponíveis
                    para melhorar sua situação financeira e alcançar seus
                    objetivos. Descubra como você pode se beneficiar dessa
                    grande conquista
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
