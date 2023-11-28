import React from "react";
import Banner from "./Banner";
import CategoriesTab from "./CategoriesTab";

const ComponentList = () => {
	return (
		<div className='lg:px-16 px-8'>
			<Banner />
			{/* categories tab */}
			<CategoriesTab />
		</div>
	);
};

export default ComponentList;
