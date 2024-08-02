import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";
import Navbar from "./Navbar";

export function Header() {
  return (
    <div className="rounded-2xl fixed top-5 bg-gray-800/95 py-2 pl-2.5 pr-6 shadow-surface-glass backdrop-blur [@supports(backdrop-filter:blur(0px))]:bg-white/[5%]">
      <div className="flex items-center justify-between w-[500px]">
        <Link
          href="/"
          title="Navigate home"
          className="rounded-full text-black text-xl font-outfit font-semibold hover:text-white"
        >
          Chakravarthy
        </Link>

        <Navbar />
      </div>
    </div>
  );
}
