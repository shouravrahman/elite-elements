import Image from 'next/image';
import React from 'react';
import ComponentCard from './ComponentCard';

const DisplayCategory = ({ title, description }) => (
  <div className="grid max-h-screen grid-cols-1 gap-8 px-8 py-4 md:grid-cols-2 lg:grid-cols-4">
    {/* card */}

    <ComponentCard
      img="/images/applicationUI/calendars.png"
      title="Hero section"
      componentCount="12 components"
      href="/components/layout"
    />
    <ComponentCard
      img="/images/applicationUI/calendars.png"
      title="Hero section"
      componentCount="12 components"
      href="/components/layout"
    />
    <ComponentCard
      img="/images/applicationUI/calendars.png"
      title="Hero section"
      componentCount="12 components"
      href="/components/layout"
    />
    <ComponentCard
      img="/images/applicationUI/calendars.png"
      title="Hero section"
      componentCount="12 components"
      href="/components/layout"
    />
  </div>
);

export default DisplayCategory;
