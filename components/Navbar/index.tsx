import Link from "next/link";
import WebNav from "./WebNav";
import Image from "next/image";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <div className="flex flex-col w-full justify-center font-helvetica font-normal items-center bg-white ">
      <div className="flex flex-col w-[95vw] footerXM:w-[90vw] footerSM:w-[85vw] sm:w-[80vw] xxl:w-[1280px] ">
        <nav className="flex text-lg justify-center items-center">
          <Link href="/" className="mr-auto ml-5 my-2">
            <Image src="/favicon.png" width={53} height={70} alt="LA Lager" />
          </Link>
          <WebNav />
          <MobileNav />
        </nav>
      </div>
      <hr className="h-[1px] opacity-50 bg-[#C2C2C2] w-full border-0 rounded"></hr>
    </div>
  );
}
