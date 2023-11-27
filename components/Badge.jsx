"use client";
import React from "react";
import checkedIcon from "/public/checked-dark.json";
import Lottie from "lottie-react";

const Badge = ({ label, checked }) => {
	return (
		<div className='flex items-center justify-center gap-2 border border-borderLight px-4 py-2 rounded-lg'>
			<p className='text-textLight font-semibold'>{label}</p>
			<div
				className={`w-5 h-5 rounded-full ${
					checked ? "bg-blur" : "bg-primaryBackgroundDark"
				}`}
			>
				{checked && (
					<Lottie
						aria-label={label}
						className='h-10 w-10 '
						animationData={checkedIcon}
						loop={false}
					/>
				)}
			</div>
		</div>
	);
};

export default Badge;
