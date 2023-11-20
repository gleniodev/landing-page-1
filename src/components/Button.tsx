import { link } from "fs";
import Link from "next/link";

type Props = {
  btText: String;
  btColor: String;
  textColor: String;
};

export function Button({ btText, btColor, textColor }: Props) {
  return (
    <Link href="#sec-5">
      <button
        className={`w-full  h-16  ${btColor} ${textColor} font-semibold text-[30px] rounded-[34px] shadow-lg  hover:bg-sky-600 transition-all hover:text-white md:h-12 md:text-[24px] lg:text-[30px] lg:h-16`}
       >
        {btText}
      </button>
    </Link>
  );
}
