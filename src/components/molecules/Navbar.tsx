import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants";
import clsx from "clsx";
import { Link as ScrollLink } from "react-scroll";
import React from "react";
import { RiHome2Line } from "react-icons/ri";

interface Props {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}

function NavItem({ children, href, isActive }: Props) {
  return (
    <ScrollLink
      to={href}
      smooth={true}
      duration={300}
      offset={-70} // Offset to adjust for fixed navbar
      spy={true}
      className={clsx("group cursor-pointer", FOCUS_VISIBLE_OUTLINE)}
      activeClass="text-blue-500 font-bold"
    >
      <div className="sm:flex sm:items-center sm:space-x-2">
        <div className={clsx("transition-colors group-hover:text-blue-500")}>
          {children}
        </div>
      </div>
    </ScrollLink>
  );
}

function Navbar() {
  return (
    <div className="flex font-dosis items-center space-x-4 text-sm font-medium leading-none lg:space-x-4">
      <NavItem href="landing">
        <RiHome2Line size={25} />
      </NavItem>
      <NavItem href="about">About</NavItem>
      <NavItem href="experience">Experience</NavItem>
      <NavItem href="skills">Skills</NavItem>
      <NavItem href="projects">Projects</NavItem>
      <NavItem href="blogs">Blogs</NavItem>
      <NavItem href="contact">Contact</NavItem>
    </div>
  );
}

export default Navbar;
