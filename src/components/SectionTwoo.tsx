import Image from "next/image";
import { Container } from "./Container";
import DollarImg from "@/assets/dollar 2.png";
import LinesDollarTop from "@/assets/linesDollarTop.png";

export function SectionTwoo() {
  return (
    <section className=" w-full pt-20 pb-20">
      <Container>
        <div className="w-full flex flex-1 flex-col items-center justify-center gap-28">
          <div>
            <h2 className="text-[48px] font-bold">Agora Ficou Fácil!!!</h2>
          </div>
          <div className="flex  w-full h-full gap-8">
            <div>
              <Image
                className="relative self-end"
                src={DollarImg}
                alt="Woman"
              />
            </div>
            <div>
              <div >
                <Image
                  className="relative self-end"
                  src={LinesDollarTop}
                  alt="Woman"
                />
                <div className="relative flex flex-col gap-8 max-w-[620px] pl-14 -inset-y-16">
                  <p className=" text-2xl text-justify leading-10 ">
                    Um importante projeto de lei foi aprovado recentemente, concedendo
                    um significativo aumento salarial para os servidores. Essa
                    iniciativa é um passo crucial em direção ao reconhecimento e
                    valorização da dedicação e esforço desses profissionais.{" "}
                  </p>
                  <p className=" text-2xl text-justify leading-10">
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
