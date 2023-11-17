import { Card } from "./CardBlack";
import { Container } from "./Container";

export function SectionOne() {
  return (
    <section className=" w-full pt-20 pb-20">
      <Container>
        <div className="w-full flex flex-1 flex-col items-center justify-center gap-28">
          <div>
            <h2 className="text-[48px] font-bold">Se você precisa...</h2>
          </div>
          <div className="flex w-full h-full gap-8">
            <Card textCard={"Quitar dívidas em atraso"} />
            <Card textCard={"Substituir dívidas caras por outras com juros menores"} />
            <Card textCard={"Investir em uma renda extra"} />
        </div>
        </div>
      </Container>
    </section>
  );
}
