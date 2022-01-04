import React from 'react';

// components

import Navbar from '../components/Navbars/IndexNavbar';
import FooterSmall from '../components/Footers/FooterSmall.js';

export default function Main({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <section className='relative w-full h-full py-40 min-h-screen'>
          <div className='absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full'></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
