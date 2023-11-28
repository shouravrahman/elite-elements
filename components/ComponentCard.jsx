import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ComponentCard = ({ img, href, title, componentCount }) => {
  return (
    <Link
      href={href}
      className="hover:bg-hoverCardLight overflow-hidden rounded-md p-4 text-left shadow-md transition-all  duration-300"
    >
      <Image
        width={768}
        height={385}
        alt="app"
        className="mb-6 h-40 w-full object-cover"
        src={img}
      />
      <h1>{title}</h1>
      <p className="pt-2 text-sm">{componentCount}</p>
    </Link>
  );
};

export default ComponentCard;
