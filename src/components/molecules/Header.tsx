import { RiHome2Line } from "react-icons/ri";
import Link from "next/link";
import Navbar from "./Navbar";

export function Header() {
  return (
    <div className="rounded-2xl fixed bottom-5 bg-gray-900/30 py-2 pl-2.5 pr-6 shadow-surface-glass backdrop-blur [@supports(backdrop-filter:blur(0px))]:bg-white/[5%]">
      <div className="flex items-center justify-between w-[400px]">
        <Link
          href="/"
          title="Navigate home"
          className="rounded-full text-black text-xl font-outfit font-semibold hover:text-blue-500"
        >
          <RiHome2Line />
        </Link>

        <Navbar />
      </div>
    </div>
  );
}
