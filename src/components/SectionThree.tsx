import Image from "next/image";

import { CardBlue } from "./CardBlue";
import { Container } from "./Container";

import Rectangles from "@/assets/rectangles.png";

export function SectionThree() {
  return (
    <section className="w-full pt-20 pb-20 md:p-20">
      <Container>
        <div className="flex flex-col">
          <div className="flex flex-col gap-10 p-6 text-blue-700 md:p-0 md:gap-20 ">
            <h2 className="text-[34px] lg:text-[48px] font-bold text-center">
              Como Funciona?
            </h2>
            <p className="text-2xl text-center leading-10 md:text-justify">
              O empréstimo consignado, frequentemente conhecido como crédito
              consignado, é uma modalidade de crédito em que as parcelas são
              automaticamente descontadas diretamente do contracheque, holerite
              ou benefício do solicitante.
            </p>
            <p className="text-2xl text-center leading-10 md:text-justify">
              Dentro desse contexto, têm a possibilidade de solicitar o crédito
              consignado os seguintes grupos:
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              className="hidden absolute md:block -left-[32px]"
              src={Rectangles}
              alt="Rectangles"
            />

            <div className="lg:w-[800px] pt-16 flex items-center flex-wrap gap-8">
              {/* WRAP CARDS */}
              <div className="w-full flex flex-wrap gap-6 justify-center">
                {/* CARD 1 */}
                <div className="relative">
                  <CardBlue
                    cardTitle={"Servidores Públicos"}
                    cardText={
                      "Trabalhadores com carteira assinada de empresas privadas conveniadas"
                    }
                  />
                </div>
                {/* CARD 2 */}
                <div className="relative">
                  <CardBlue
                    cardTitle={"Militares das Forças"}
                    cardText={
                      "Os Militares ativos, inativos e pensionistas do exército, marinha e aeronáutica"
                    }
                  />
                </div>
                {/* CARD 3 */}
                <div className="relative">
                  <CardBlue
                    cardTitle={"INSS"}
                    cardText={"Aposentados e pensionistas do INSS"}
                  />
                </div>
                {/* CARD 4 */}
                <div className="relative">
                  <CardBlue
                    cardTitle={"BPC"}
                    cardText={
                      "Beneficiários do Benefício de Prestação Continuada (BPC)."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
