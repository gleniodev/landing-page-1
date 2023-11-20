import Image from "next/image";

import { CardBlue } from "./CardBlue";
import { Container } from "./Container";

import Rectangles from "@/assets/rectangles.png";

export function SectionThree() {
  return (
    <section className="w-full pt-20 pb-20">
      <Container>
        <div className="flex flex-col">
          <div className="flex flex-col gap-20 text-blue-700 ">
            <h2 className="text-[48px] font-bold self-center">
              Como Funciona?
            </h2>
            <p className="text-2xl text-justify leading-10">
              O empréstimo consignado, frequentemente conhecido como crédito
              consignado, é uma modalidade de crédito em que as parcelas são
              automaticamente descontadas diretamente do contracheque, holerite
              ou benefício do solicitante.
            </p>
            <p className="text-2xl text-justify leading-10">
              Dentro desse contexto, têm a possibilidade de solicitar o crédito
              consignado os seguintes grupos:
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              className="absolute -left-[32px]"
              src={Rectangles}
              alt="Rectangles"
            />

            <div className=" w-[800px] pt-16 flex items-center flex-wrap gap-8">
              <div className="w-full flex">
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
                  <div className="card-divider-vertical absolute h-full left-0"></div>
                  <CardBlue
                    cardTitle={"Militares das Forças"}
                    cardText={
                      "Os Militares ativos, inativos e pensionistas do exército, marinha e aeronáutica"
                    }
                  />
                </div>
              </div>
              <div className="card-divider-horizontal"></div>

              <div className="w-full flex">
                {/* CARD 3 */}
                <div className="relative">
                  <CardBlue
                    cardTitle={"INSS"}
                    cardText={"Aposentados e pensionistas do INSS"}
                  />
                </div>

                {/* CARD 4 */}
                <div className="relative">
                  <div className="card-divider-vertical absolute h-full left-0"></div>
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
