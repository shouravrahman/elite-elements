'use client';
import React, { useState } from 'react';
import DisplayCategory from './DisplayCategory';

const tabs = [
  {
    title: 'Application UI',
    type: 'application',
    description:
      'Form layouts, tables, modal dialogs — everything you need to build beautiful responsive web applications.',
  },
  {
    title: 'Marketing UI',
    type: 'marketing',
    description:
      'Marketing Heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.',
  },
  {
    title: 'Ecommerce UI',
    type: 'ecommerce',
    description:
      'Ecommerce Checkout forms, shopping carts, product views — everything you need to build your next ecommerce front-end.',
  },
];

const CategoriesTab = () => {
  const [typeToDisplay, setTypeToDisplay] = useState('application');

  const handleClick = (type) => {
    setTypeToDisplay(type);
  };

  return (
    <section className="bg-white mt-6 h-screen rounded-md shadow-lg">
      <div className="ml-4 mt-2 flex max-w-6xl border-spacing-0  items-center justify-start space-x-2  px-6">
        {tabs.map((tab) => (
          <li
            key={tab.type}
            className={`${
              typeToDisplay === tab.type && 'hover:border-none'
            } mr-8 list-none border-t-[0.4px] border-borderLight text-left hover:border-accentLight`}
            // {{typeToDisplay === tab.type && "border-none"`}}
          >
            <button
              onClick={() => handleClick(tab.type)}
              className={`${
                typeToDisplay === tab.type &&
                'border-spacing-0 border-t-2 border-accentLight bg-transparent font-semibold text-accentLight active:rounded-b-none '
              } text-md   px-4 py-8  text-left font-semibold transition-all duration-300  focus:outline-none`}
            >
              {tab.title}
              <p className="mt-4 text-left text-sm font-normal leading-6 text-textLight">
                {tab.description}
              </p>
            </button>
          </li>
        ))}
      </div>

      <DisplayCategory
        title={tabs.find((tab) => tab.type === typeToDisplay)?.title || ''}
        description="Description for the selected category."
      />
    </section>
  );
};

export default CategoriesTab;
