import ComponentDetail from '@/components/ComponentDetail';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className=" mx-auto mt-16 max-w-6xl">
        <h2 className="fotn-bold mb-3 font-sans_jp text-4xl">
          Tailwindcss components
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum odit
          vel deserunt aliquid, mollitia veritatis asperiores harum, commodi
          perferendis repudiandae necessitatibus ab. Eos sapiente consequuntur
          iusto quam nihil velit quasi?
        </p>
      </div>
      <ComponentDetail />
      <ComponentDetail />
      <ComponentDetail />
      <ComponentDetail />
    </div>
  );
};

export default page;
