"use client";

import Image from "next/image";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, isPending, "session");
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

      {isPending ? (
        <span className="loading loading-ring loading-xl"></span>
      ) : user ? (
        <div className="flex items-center gap-2">
          <h2>Hello, {user?.name} </h2>
          <Image
            src={user?.image || userAvatar}
            alt="User avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
          <button
            onClick={async () => await authClient.signOut()}
            className="btn bg-red-500 text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <NavLink href={"/login"}>Login</NavLink>
        </button>
      )}
    </div>
  );
};

export default Navbar;
