import React from "react";
import StyledLink from "./StyledLink";
import Image from "next/image";
import hero from "/public/images/hero.png";
import Badge from "./Badge";

const Hero = () => {
	return (
		<header className='flex lg:pl-16 px-8 py-8 justify-between'>
			<main className='flex flex-1 flex-col self-start mt-10 max-w-2xl'>
				<div className='flex items-center gap-4 mb-16'>
					<Badge label='Extensible Components' checked={true} />
					<Badge label='Copy and Paste' checked={true} />
					<Badge label='Accessibility Tested' checked={true} />
				</div>
				<h1 className='text-4xl md:text-6xl lg:text-8xl font-figtree font-semibold leading-tight mb-8 '>
					Build your next idea even faster
				</h1>
				<p className='text-textLight text-base md:text-xl lg:text-xl mb-8'>
					Beautifully designed, expertly crafted components and templates, built
					by the makers of Tailwind CSS. The perfect starting point for your
					next project.
				</p>
				<div className='flex items-center gap-4'>
					<StyledLink filled href='#github' label='Browse Components' />
					<StyledLink href='#github' label='Github' />
				</div>
			</main>

			<section className='max-w-4xl '>
				<Image
					src={hero}
					alt='Hero background'
					width='auto'
					height='auto'
					className='object-cover'
				/>
			</section>
		</header>
	);
};

export default Hero;
