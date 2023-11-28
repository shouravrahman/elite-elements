import Link from "next/link";
import React from "react";

const Banner = () => {
	return (
		<div className='py-8 max-w-3xl'>
			<h2 className='text-accentLight font-semibold text-xl py-4'>
				Components
			</h2>
			<h3 className='text-textLight font-bold text-4xl mb-5'>
				Beautifully crafted UI components, ready for your next project.
			</h3>
			<p className='mb-6'>
				Over 500+ professionally designed, fully responsive, expertly crafted
				component examples you can drop into your Tailwind projects and
				customize to your heart’s content.
			</p>
			<Link className='text-accentLight underline-offset-2 underline' href='#'>
				Browse all components
			</Link>
		</div>
	);
};

export default Banner;
