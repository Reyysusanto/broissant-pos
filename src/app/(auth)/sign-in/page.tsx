"use client";

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
import { useRouter } from "next/navigation";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
});

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const Route = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }

    try {
      const response = await fetch(
        "https://pos-broissant-production.up.railway.app/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email , password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();

      console.log(data)
      if (data.status === true) {
        const user = data.data;

        if (user.email === email && user.password === password) {
          setUserData(user); 
          console.log(userData)
          setError("");
          Route.push('/dashboard/home')
        } else {
          setError("Invalid email or password.");
        }
      } else {
        setError("Invalid email or password.");
      }
    } catch (error: unknown) {
      console.error("Error: ", error);

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
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
              {error && <p className="text-red-500">{error}</p>}
              <div className="relative flex">
                <MdEmail className="absolute text-2xl translate-x-2 translate-y-3" />
                <Input
                  className="pl-10 py-6 text-sm border border-primaryColor"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="youremail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            <Button type="submit" className="w-full bg-primaryColor">
              Sign In
            </Button>
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
                  />
                  <p>Facebook</p>
                </div>
              </Button>
            </div>
            <p className="text-gray-500 text-xs">
              By registering you with our{" "}
              <span className="text-primaryColor">Terms and Conditions</span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default SignInPage;
