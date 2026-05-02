"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async (formData) => {
    console.log(formData.email);
    const email = formData.email;
    const password = formData.password;
    const name = formData.name;
    const photo = formData.photo;
    console.log(photo, "photo");

    const { data, error } = await authClient.signUp.email({
      name,
      photo,
      email,
      password,
      image: photo,
      callbackURL: "/",
      // fetchOptions: {
      //   onSuccess: () => {
      //     router.push("/");
      //   },
      // },
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
    <div className="container  mx-auto my-4 py-10 min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center my-6 mx-8">
          Register your account
        </h2>
        <div className="border-t border-slate-200 mb-6"></div>
        <form
          onSubmit={handleSubmit(handleRegisterFunc)}
          className="fieldset bg-base-200 border-base-300 rounded-box border p-4"
        >
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input
              {...register("name", { required: "Name field is required" })}
              type="text"
              className="input validator"
              placeholder="Enter your Name"
              required
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Photo URL</label>
            <input
              {...register("photo", {
                required: "Photo URL field is required",
              })}
              type="text"
              className="input validator"
              placeholder="Enter your photo url"
              required
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
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
              className="absolute right-18 top-10 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </label>

          <button className="btn btn-neutral mt-4" type="submit">
            Register
          </button>
          <button className="btn btn-ghost mt-1" type="reset">
            Reset
          </button>
          <div>
            <p className="font-semibold text-center text-lg">
              If you have an account ?{" "}
              <Link href={"login"} className="text-red-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
