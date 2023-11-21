type Props = {
  cardTitle: string;
  cardText: string;
};

export function CardBlue({ cardTitle, cardText }: Props) {
  return (
    <div className="flex flex-col items-center justify-center p-6 w-[277px] h-[350px] lg:w-[382px] lg:h-[465px] lg:p-10 text-center gap-8">
      <div className="w-full h-full absolute bg-slate-100 rounded-3xl opacity-80 z-10"></div>
      <h2 className="flex text-[26px] lg:text-[38px] text-blue-700 first-letter:capitalize text-center font-bold z-20">
        {cardTitle}
      </h2>
      <p className="text-[20px] lg:text-2xl text-blue-700 leading-10 ite z-20">{cardText}</p>
    </div>
  );
}
