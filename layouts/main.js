import React from 'react';
import Link from 'next/link';
import { userService } from '../services/user.service';

// components

import Navbar from '../components/Navbars/IndexNavbar';
import FooterSmall from '../components/Footers/FooterSmall';

export default function Main({ children, title, subtitle, authenticated }) {
  const [authorized, setAuthorized] = React.useState(false);

  React.useEffect(() => {
    // run auth check on initial load
    authCheck();
  }, []);

  function authCheck() {
    if (!userService.userValue) {
      setAuthorized(false);
    } else {
      setAuthorized(true);
    }
  }
  return (
    <>
      <Navbar />
      <main>
        <div className='relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75'>
          <div
            className='absolute top-0 w-full h-full bg-center bg-cover'
            style={{
              backgroundImage: "url('/logo.jpg')",
            }}
          >
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-80 bg-black'
            ></span>
          </div>
          <div className='container relative mx-auto'>
            <div className='items-center flex flex-wrap'>
              <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
                <div className='pr-12'>
                  <h1 className='text-white font-semibold text-5xl'>{title}</h1>
                  <p className='mt-4 text-lg text-blueGray-200'>{subtitle}</p>
                  {authenticated &&
                    (authorized ? (
                      <Link href='/documents/upload'>
                        <a>
                          <button
                            className='bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                            type='button'
                          >
                            Upload
                          </button>
                        </a>
                      </Link>
                    ) : null)}
                </div>
              </div>
            </div>
          </div>
          <div
            className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16'
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='text-blueGray-200 fill-current'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>
        </div>
        {children}
      </main>
      <FooterSmall />
    </>
  );
}
