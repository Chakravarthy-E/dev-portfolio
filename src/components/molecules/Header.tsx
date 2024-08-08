import Navbar from "./Navbar";
import ThemeSwitcherBtn from "../atoms/ThemeSwitcher";

export function Header() {
  return (
    <div className="rounded-2xl fixed bottom-5 bg-gray-900/30 py-2 pl-2.5 pr-6 shadow-surface-glass backdrop-blur [@supports(backdrop-filter:blur(0px))]:bg-white/[5%]">
      <div className="flex items-center justify-center w-[450px] space-x-3">
        <Navbar />
        <ThemeSwitcherBtn />
      </div>
    </div>
  );
}
