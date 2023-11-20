import Image from "next/image";
import Logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="w-full h-24 absolute p-3 md:h-24  ">
      <div className="w-full h-full bg-black opacity-80 absolute inset-0"></div>
      <div className="w-full flex items-center justify-center gap-4 relative">
        <div className="logo-line"></div>
        <Image className="w-28 md:w-28 lg:relative" src={Logo} alt="Logo" />
        <div className="logo-line"></div>
      </div>
    </header>
  );
}
