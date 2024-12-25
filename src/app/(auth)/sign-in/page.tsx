"use client"

import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MdEmail, MdLock } from "react-icons/md";
import { Italianno } from "next/font/google";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
});

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form action="">
      <div className="relative h-screen items-center justify-center flex">
        <Image
          src={"/Images/AuthBg.png"}
          alt="AuthBg"
          fill
          objectFit="cover"
          quality={100}
        />
        <Card className="w-[350px] absolute">
          <CardHeader>
            <div className="flex items-end justify-center">
              <Image
                src={"/Images/broissantLogo.png"}
                alt="broissantLogo"
                width={70}
                height={70}
                objectFit="contain"
                quality={100}
              />
              <CardTitle className={`${italianno.className} text-4xl`}>
                Broissant
              </CardTitle>
            </div>
            <CardDescription className="text-primaryColor font-semibold text-xl">
              Sign In
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="relative flex">
                <MdEmail className="absolute text-2xl translate-x-2 translate-y-3" />
                <Input
                  className="pl-10 py-6 text-sm border border-primaryColor"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="youremail@gmail.com"
                />
              </div>
              <div className="relative flex items-center">
                <MdLock className="absolute text-2xl translate-x-2" />
                <Input
                  className="pl-10 py-6 text-sm border border-primaryColor"
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                />
                <button
                  type="button"
                  className="absolute right-3 text-2xl"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                </button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-between gap-4">
            <Button className="w-full bg-primaryColor">Sign In</Button>
            <div className="w-full h-[2px] bg-gray-200"></div>
            <div className="flex justify-between w-full text-xs">
              <p className="text-gray-500">Or continue with</p>
              <Link className="text-primaryColor" href={"/sign-up"}>
                Sign Up
              </Link>
            </div>
            <div className="flex justify-between w-full gap-2">
              <Button className="flex-1 bg-secondaryColor hover:bg-opacity-90 text-white py-2 px-4">
                <div className="flex items-center justify-center gap-2">
                  <FcGoogle size={20} />
                  <p>Google</p>
                </div>
              </Button>
              <Button className="flex-1 bg-secondaryColor hover:bg-opacity-90 text-white py-2 px-4">
                <div className="flex items-center justify-center gap-2">
                  <FaFacebook
                    size={20}
                    className="text-blue-500 bg-white rounded-full"
                  />{" "}
                  <p>Facebook</p>
                </div>
              </Button>
            </div>
            <p className="text-gray-500 text-xs">
              By registering you with out{" "}
              <span className="text-primaryColor">Terms and Conditions</span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default SignInPage;
