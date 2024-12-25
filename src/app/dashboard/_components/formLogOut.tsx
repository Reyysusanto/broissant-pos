"use client"

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { LogOut } from "lucide-react";
import React from "react";


export default function FormLogout() {

	return (
		<nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
			<Tooltip>
				<TooltipTrigger asChild>
					<form action={""}>
                    <button
						className="flex h-9 w-9 items-center justify-center rounded-lg text-white bg-primaryColor opacity-60 transition-colors hover:text-foreground md:h-8 md:w-8"
					>
						<LogOut className="h-5 w-5" />
						<span className="sr-only">Logout</span>
					</button>
                    </form>
				</TooltipTrigger>
				<TooltipContent side="right">Logout</TooltipContent>
			</Tooltip>
		</nav>
	);
}
