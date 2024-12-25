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
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Link from "next/link";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
});

const SignUpPage = () => {
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
              Sign Up
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="relative flex">
                <BsFillPersonFill className="absolute text-2xl translate-x-2 translate-y-3" />
                <Input
                  className="pl-10 py-6 text-sm border border-primaryColor"
                  name="firstName"
                  id="firstName"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className="relative flex">
                <BsFillPersonFill className="absolute text-2xl translate-x-2 translate-y-3" />
                <Input
                  className="pl-10 py-6 text-sm border border-primaryColor"
                  name="lastName"
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                />
              </div>
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
              <div className="relative flex">
                <FaPhoneAlt className="absolute text-2xl translate-x-2 translate-y-3" />
                <Input
                  className="pl-10 py-6 text-sm border border-primaryColor"
                  name="phone"
                  id="phone"
                  type="tel"
                  placeholder="+6212122323"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-between gap-4">
            <Button className="w-full bg-primaryColor">Sign In</Button>
            <p className="text-gray-500 text-xs">
              Already have an account{" "}
              <Link href={'/sign-in'} className="text-primaryColor">Sign In</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default SignUpPage;
