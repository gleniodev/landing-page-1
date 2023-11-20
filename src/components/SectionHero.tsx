import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";

import WomanImg from "@/assets/woman-hero-lg.png";

export function Hero() {
  return (
    <section className="w-full h-[980px] bg-img_bg_hero bg-no-repeat bg-start bg-cover md:h-[607px] md:bg-cover lg:md:h-[707px]">
      <Container>
        <div className="w-full flex justify-between p-2 md:p-0 md:h-[607px] lg:md:h-[707px]">
          <div className="flex flex-col flex-1 text-white mt-28 text-center gap-1 md:max-w-[298px] md:text-start md:mt-52 lg:max-w-[470px] lg:mt-52">
            <h1 className=" font-semibold text-[38px] md:text-[32px] lg:text-[53px]">
              Salário Ampliado
            </h1>
            <p className="text-[24px] md:text-[20px] lg:text-[24px]">Oportunidades Expandidas</p>
            
            <Image className="w-[344px] self-center md:hidden" src={WomanImg} alt="Woman" />

            <p className="text-[24px] mt-4 mb-12 md:mt-8 md:mb-8 md:text-[20px] lg:text-[24px] lg:mt-12 lg:mb-12 ">
              Seu aumento de salário é o trampolim para realizações financeiras
              maiores por meio dos nossos empréstimos consignados.
            </p>            
            <Button             
              textColor={"text-black"}
              btColor={"bg-white"}
              btText={"Solicitar Agora"}
            />            
          </div>
          <Image
            className=" hidden md:block md:self-end md:w-[382px] lg:w-[506px] "
            src={WomanImg}
            alt="Woman"
          />
        </div>
      </Container>
    </section>
  );
}
