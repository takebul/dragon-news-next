import Image from "next/image";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto mt-6">
      <div></div>
      <ul className="flex justify-between items-center gap-4 text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <Image src={userAvatar} alt="User avatar" width={60} height={60} />
        <button className="btn bg-purple-500 text-white">
          <NavLink href={"/login"}>Login</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
