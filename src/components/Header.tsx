import Image from "next/image"
import Logo from '@/assets/logo.png'

export function Header (){
    return (
        <header className="w-full absolute p-3 h-34  ">
        <div className="w-full h-full bg-black opacity-80 absolute inset-0"></div>
          <div className="w-full flex items-center justify-center gap-4 relative">
            <div className="logo-line"></div>
            <Image src={Logo} alt="Logo" />
            <div className="logo-line"></div>
          </div>
        </header>
      );
      
}