import { Card } from "./CardBlack";
import { Container } from "./Container";

export function SectionOne() {
  return (
    <section className=" w-full pt-20 pb-20">
      <Container>
        <div className="w-full flex flex-1 flex-col items-center justify-center gap-20 lg:gap-28">
          <div>
            <h2 className="text-[34px] font-bold lg:text-[48px]">Se você precisa...</h2>
          </div>
          <div className="w-full h-full flex flex-wrap gap-8 items-center justify-center md:flex-wrap lg:flex-wrap">
            <Card textCard={"Quitar dívidas em atraso"} />
            <Card textCard={"Substituir dívidas caras por outras com juros menores"} />
            <Card textCard={"Investir em uma renda extra"} />
            <Card textCard={"Transformar sonhos em conquistas reais"} />
        </div>
        </div>
      </Container>
    </section>
  );
}
