"use client";

import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import swimming from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playground from "@/assets/playground.png";
import bg from "@/assets/bg.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const RightSidebar = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data);
  };

  return (
    <div>
      <h2 className="font-bold text-lg mb-6">Login with</h2>
      <div className="flex flex-col gap-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn border-blue-500 text-blue-500"
        >
          <FcGoogle />
          Login with Google
        </button>
        <button onClick={handleGithubSignIn} className="btn">
          <FaGithub />
          Login with Github
        </button>
      </div>
      <h2 className="font-bold text-lg mb-4">Find Us On</h2>
      <div className="flex flex-col">
        <button className="btn bg-white p-2">
          <FaFacebook />
          Facebook
        </button>
        <button className="btn bg-white p-2">
          <FaTwitter />
          Twitter
        </button>
        <button className="btn bg-white p-2">
          <FaInstagram />
          Instagram
        </button>
      </div>
      <div className="bg-base-200 mt-4">
        <h2 className="font-bold text-lg p-4">Q-Zone</h2>
        <div>
          <Image src={swimming} alt="swimming image" width={300} height={250} />
          <Image
            src={classImg}
            alt="classroom image"
            width={300}
            height={250}
          />
          <Image
            src={playground}
            alt="playground image"
            width={300}
            height={250}
          />
        </div>
      </div>
      <div className="mt-4">
        <Image src={bg} alt="bg" width={300} height={800} />
      </div>
    </div>
  );
};

export default RightSidebar;
