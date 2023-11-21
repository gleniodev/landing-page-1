import Link from "next/link";
import { Container } from "./Container";

export function Footer(){
    return (
        <section className="w-full h-[40px] bg-black flex justify-center items-center">
            <Container>
            <div className="w-full flex justify-center gap-10 text-white p-2 text-xs">
                <p>De Figueiredo Serviços Financeiros © 2023</p>
                <p>Desenvolvido por 
                    <Link rel="stylesheet" href="https://www.instagram.com/glenioanderson/">
                    <span className=" text-sky-500"> @glenioanderson</span>
                    </Link>
                </p>
            </div>

            </Container>
        </section>
    )
}