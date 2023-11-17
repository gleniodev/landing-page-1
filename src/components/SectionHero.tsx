import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";

import WomanImg from '@/assets/woman-hero.png'


export function Hero() {
    return (
        <section className="w-full h-[707px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="w-full h-[707px] flex justify-between" >
                    <div className="flex flex-col flex-1 max-w-[470px] text-white mt-52 gap-1">
                        <h1 className=" font-semibold text-[53px]">
                            Salário Ampliado
                        </h1>
                        <p className="text-[24px]">
                            Oportunidades Expandidas
                        </p>
                        <p className="text-[24px] mt-12 mb-12">
                            Seu aumento de salário é o trampolim para realizações financeiras maiores por meio dos nossos empréstimos consignados.                        
                        </p>      
                        <Button
                        textColor={"text-black"}
                        btColor={"bg-white"}
                        btText={"Solicitar Agora"}
                        />          
                    </div>
                    <Image 
                    className="relative self-end"
                    src={WomanImg} 
                    alt="Woman"/>
                </div>
            </Container>
        </section>
    )
}