import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}

function NavItem({ children, href, isActive }: Props) {
  return (
    <Link href={href} className={clsx("group", FOCUS_VISIBLE_OUTLINE)}>
      <div className="sm:flex sm:items-center sm:space-x-2">
        <div className="transition-colors group-hover:text-blue-500">
          {children}
        </div>
      </div>
    </Link>
  );
}

function Navbar() {
  return (
    <div className="flex font-dosis items-center space-x-4 text-sm font-medium leading-none lg:space-x-4">
      <NavItem href="/about">About</NavItem>
      <NavItem href="/experience">Experience</NavItem>
      <NavItem href="/skills">Skills</NavItem>
      <NavItem href="/projects">Projects</NavItem>
      <NavItem href="/blogs">Blogs</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </div>
  );
}

export default Navbar;
