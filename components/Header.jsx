import React, { useContext } from 'react';

import Link from 'next/link';

const categories = [
  { name: 'Self-Defence', slug: 'self-defence' },
  { name: 'Equipment', slug: 'equipment' },
];

const header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-red-700 py-8">
        <div className="md:float block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-black">
              Athena
            </span>
          </Link>
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
