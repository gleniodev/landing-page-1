import Image from "next/image";
import { Container } from "./Container";

import TimeLine from "@/assets/timeline.png";
import TimeLineSm from "@/assets/timeline-sm.png";
import { Button } from "./Button";

export function SectionFour() {
  return (
    <section className="w-full lg:pt-20 lg:pb-20">
      <Container>
        <div className="w-full flex flex-1 flex-col items-center justify-center gap-28">
          <div>
            <h2 className="text-[34px] lg:text-[48px] font-bold text-center">
              Contrate o seu agora!
            </h2>
          </div>
          <div className="p-2">
            <Image
              className="md:hidden"
              src={TimeLineSm}
              alt={"Passo a Passo"}
            />

            <Image
              className="hidden md:block"
              src={TimeLine}
              alt={"Passo a Passo"}
            />
          </div>
          <div className=" w-[300px] lg:w-[522px]">
            <Button
              textColor={"text-white"}
              btColor={" bg-black"}
              btText={"Solicitar Agora"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
