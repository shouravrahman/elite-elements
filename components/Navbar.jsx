import Image from "next/image";
import Link from "next/link";
import React from "react";
import StyledLink from "./StyledLink";
import logoDark from "/public/images/logo/logo-dark.png";
import SearchInput from "./Search";
const Navbar = () => {
	return (
		<nav className='flex items-center justify-between lg:px-16 px-4 py-2 text-base'>
			<Link aria-label='Elite Elements Home' href='/'>
				<Image
					src={logoDark}
					alt='elite elements logo'
					width={120}
					height={80}
					className='object-cover'
				/>
			</Link>
			<SearchInput />

			<div
				aria-label='main navigation for components link and templates'
				role='navigation'
				className='flex items-center space-x-10 font-sans_jp font-bold text-textLight'
			>
				<Link href='#components'>Components</Link>
				<Link href='#templates'>Templates</Link>
			</div>

			<div
				aria-label='call to actions'
				role='region'
				className='flex items-center justify-between space-x-10 font-semibold text-accentLight'
			>
				<Link href='#signIn'>Sign In</Link>
				<StyledLink href='#github' filled={true} label='Github' />
			</div>
		</nav>
	);
};

export default Navbar;
