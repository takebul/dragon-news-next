"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (formData) => {
    console.log(formData.email);
    const email = formData.email;
    const password = formData.password;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log({ data, error });

    if (error) {
      toast.error(error.message);
    }

    if (data.token) {
      toast.success("Signup successful");
    }
  };

  // console.log(watch("email"));
  // console.log(watch("password"));

  return (
    <div className="container  mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 my-4 py-10">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center my-6 mx-8">
          Login your account
        </h2>
        <div className="border-t border-slate-200 mb-6"></div>
        <form
          onSubmit={handleSubmit(handleLoginFunc)}
          className="fieldset bg-base-200 border-base-300 rounded-box border p-4"
        >
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              {...register("email", { required: "Email field is required" })}
              type="email"
              className="input validator"
              placeholder="Email"
              required
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <label className="fieldset relative">
            <span className="label">Password</span>
            <input
              {...register("password", {
                required: "Password field is required",
              })}
              type={isShowPassword ? "text" : "password"}
              className="input validator"
              placeholder="Password"
              required
            />
            <span
              className="absolute right-8 top-10 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </label>

          <button className="btn btn-neutral mt-4" type="submit">
            Login
          </button>
          <button className="btn btn-ghost mt-1" type="reset">
            Reset
          </button>
          <div>
            <p className="font-semibold text-center text-lg">
              Don't have an account ?{" "}
              <Link href={"register"} className="text-red-500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
