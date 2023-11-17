type Props = {
  cardTitle: string;
  cardText: string;
};

export function CardBlue({ cardTitle, cardText }: Props) {
  return (
    <div className="w-[382px] h-[365px] flex flex-col items-center justify-center p-10 text-center gap-8">
      <h2 className=" flex text-[38px] text-blue-700 first-letter:capitalize text-center font-bold">
        {cardTitle}
      </h2>
      <p className="text-2xl text-blue-700 leading-10 ite">{cardText}</p>
    </div>
  );
}
