"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className }) => {
  const pathName = usePathname();
  console.log(pathName);

  const isActive = href === pathName;

  return (
    <Link
      href={href}
      className={`${isActive ? "border-b-2 border-purple-500" : ""} ${className} `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
