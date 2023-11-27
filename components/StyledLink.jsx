"use client";
import Link from "next/link";
import React from "react";
import Lottie from "lottie-react";
import arrow from "/public/arrow.json";
import arrowDark from "/public/arrow-dark.json";
import cn from "@/lib/cn";

const StyledLink = ({ href, label, filled }) => {
	const animationData = filled ? arrow : arrowDark;

	return (
		<Link
			role='button'
			className={cn(
				"bg-primaryBackgroundLight text-textLight rounded-lg py-2 px-4 transition-all duration-300 font-sans flex items-center justify-center font-semibold shadow-md",
				{
					"bg-primaryBackgroundDark text-textDark": filled,
				}
			)}
			href={href}
		>
			{label}
			<Lottie
				aria-label={label}
				className='h-8 w-10 pl-2'
				animationData={animationData}
				loop={true}
			/>
		</Link>
	);
};

export default StyledLink;
