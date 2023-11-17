import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";

import IconZap from "@/assets/icon-zap-s5.png";

import MenImg from "@/assets/men-form.png";
import Link from "next/link";

export function SectionFive() {
  return (
    <section
      className=" w-full bg-img_bg_sec5 bg-no-repeat bg-center bg-cover pt-10  mt-20"
      id="sec-5"
    >
      <Container>
        <div className="w-full flex flex-1 flex-col items-center justify-center gap-20">
          <div className="w-full text-center ">
            <h2 className="text-[48px] font-bold text-white">
              Vamos conversar?
            </h2>
          </div>
          <div className="w-full flex justify-center gap-10">
            <div className="w-full flex flex-col items-start justify-start gap-10 max-w-[570px]">
              <h1 className="text-[34px] leading-10 text-white font-semibold">
                Alcance seus objetivos de forma rápida e personalizada!
              </h1>
              <p className=" text-2xl leading-10 text-white">
                Clique para conversar com um de nossos consultores no{" "}
                <span className="font-semibold text-green-500">WhatsApp</span> e
                descubra as melhores soluções para você.
              </p>
              <p className=" text-2xl leading-10 text-white">
                Estamos aqui para tornar suas metas uma realidade.
              </p>
              <span className=" text-[30px] leading-10 text-white font-semibold"></span>
              <div className="w-[522px]">
                <Link href="https://api.whatsapp.com/send/?phone=5583986201833&text=Oi!+Gostaria+de+fazer+uma+simulação+de+empréstimo+consignado&type=phone_number&app_absent=0">
                  <button className="flex items-center justify-center gap-1 w-full h-16 bg-green-500  rounded-[34px] shadow-lg  hover:bg-green-700  transition-all hover:text-white">
                    <Image src={IconZap} alt="WhatsApp" />
                    <span className="text-[30px] text-white font-semibold ">
                      Solicitar Simulação
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <Image className="relative self-end" src={MenImg} alt={"Homem"} />
          </div>
        </div>
      </Container>
    </section>
  );
}
