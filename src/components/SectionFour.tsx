import Image from "next/image";
import { Container } from "./Container";

import TimeLine from "@/assets/timeline.png";
import { Button } from "./Button";

export function SectionFour() {
  return (
    <section className=" w-full pt-20 pb-20">
      <Container>
        <div className="w-full flex flex-1 flex-col items-center justify-center gap-28">
          <div>
            <h2 className="text-[48px] font-bold">Contrate o seu agora!</h2>
          </div>
          <div>
            <Image 
            src={TimeLine} 
            alt={"Passo a Passo"} 
            />
          </div>
          <div className="w-[522px]">
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
