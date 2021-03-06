import React from 'react';

// components

import Navbar from '../components/Navbars/IndexNavbar';
import FooterSmall from '../components/Footers/Footer';

export default function Auth({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <section className='relative w-full h-full py-40 min-h-screen'>
          <div
            className='absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full'
            style={{
              backgroundImage: "url('/upgrading.jpeg')",
            }}
          ></div>
          <br />
          <br />
          <br />
          <br />
          <br />
          {children}
        </section>
      </main>
    </>
  );
}
