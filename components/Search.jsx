import React from "react";
import search from "public/images/search.gif";
import Image from "next/image";

const SearchInput = () => {
	return (
		<div className='relative w-72'>
			<input
				type='text'
				placeholder='Search...'
				className='w-full py-2 px-4 rounded-full transition-all duration-300 focus:outline-none focus:ring font-sans_jp focus:border-primaryBackgroundDark'
			/>
			<div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
				<Image
					src={search}
					className='h-5 w-5 text-textLight'
					alt='search here'
				/>
			</div>
		</div>
	);
};

export default SearchInput;
