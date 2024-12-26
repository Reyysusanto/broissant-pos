import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FormLogout from "./formLogOut";
import { FaUser } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { AiOutlinePieChart } from "react-icons/ai";
import {
  IoMailOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const currentPath = usePathname();

  // Function to determine if the link is active
  const isActive = (path: string) => currentPath === path;

  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-secondaryColor sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-md bg-gray-500 text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <FaUser className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Profile</span>
          </Link>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/home"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  isActive("/dashboard/home")
                    ? "bg-orange-500 text-white" // Style for active item
                    : "bg-transparent text-gray-400" // Default style
                }`}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Home</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/discounts"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  isActive("/dashboard/discounts")
                    ? "bg-orange-500 text-white"
                    : "bg-transparent text-gray-400"
                }`}
              >
                <RiDiscountPercentLine className="h-5 w-5" />
                <span className="sr-only">Discounts</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Discounts</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/data"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  isActive("/dashboard/data")
                    ? "bg-orange-500 text-white"
                    : "bg-transparent text-gray-400"
                }`}
              >
                <AiOutlinePieChart className="h-5 w-5" />
                <span className="sr-only">Data</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Data</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/mail"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  isActive("/dashboard/mail")
                    ? "bg-orange-500 text-white"
                    : "bg-transparent text-gray-400"
                }`}
              >
                <IoMailOutline className="h-5 w-5" />
                <span className="sr-only">Mail</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Mail</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/notification"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  isActive("/dashboard/notification")
                    ? "bg-orange-500 text-white"
                    : "bg-transparent text-gray-400"
                }`}
              >
                <IoNotificationsOutline className="h-5 w-5" />
                <span className="sr-only">Notification</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Notification</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/settings"
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  isActive("/dashboard/settings")
                    ? "bg-orange-500 text-white"
                    : "bg-transparent text-gray-400"
                }`}
              >
                <IoSettingsOutline className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
        <FormLogout />
      </aside>
    </TooltipProvider>
  );
}
