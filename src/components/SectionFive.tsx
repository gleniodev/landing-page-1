import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";

import IconZap from "@/assets/icon-zap-s5.png";

import MenImg from "@/assets/men-form.png";
import Link from "next/link";

export function SectionFive() {
  return (
    <section
      className=" w-full bg-img_bg_sec5 bg-no-repeat bg-center bg-cover pt-10 pb-20 mt-20 lg:pt-20 lg:pb-0"
      id="sec-5"
    >
      <Container>
        <div className="w-full flex flex-1 flex-col items-center justify-center gap-10 lg:gap-20">
          <div className="w-full text-center ">
            <h2 className="text-[34px] text-white lg:text-[48px] font-bold text-center">
              Vamos conversar?
            </h2>
          </div>
          <div className="w-full flex justify-center gap-10">
            <div className="w-full flex flex-col items-center justify-start gap-10 max-w-[570px] lg:items-start p-6">
              <h1 className="font-semibold text-center text-white text-[20px] md:text-[32px] md:text-start lg:text-[32px] lg:leading-10 ">
                Alcance seus objetivos de forma rápida e personalizada!
              </h1>
              <p className="text-[20px] leading-10 text-white md:text-2xl text-center md:text-start ">
                Clique para conversar com um de nossos consultores no{" "}
                <span className="font-semibold text-green-500">WhatsApp</span> e
                descubra as melhores soluções para você.
              </p>
              <p className="text-[20px] md:text-2xl leading-10 text-white text-center md:text-start">
                Estamos aqui para tornar suas metas uma realidade.
              </p>
              <div className="w-[300px] md:w-[522px]">
                <Link href="https://api.whatsapp.com/send/?phone=5541999569132&text=Oi!+Gostaria+de+fazer+uma+simulação+de+empréstimo+consignado&type=phone_number&app_absent=0">
                  <button className="flex items-center justify-center gap-1 w-full h-16 bg-green-500  rounded-[34px] shadow-lg  hover:bg-green-700  transition-all hover:text-white">
                    <Image src={IconZap} alt="WhatsApp" />
                    <span className="text-[20px] md:text-[30px] text-white font-semibold ">
                      Solicitar Simulação
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <Image className="hidden lg:block lg:self-end" src={MenImg} alt={"Homem"} />
          </div>
        </div>
      </Container>
    </section>
  );
}
