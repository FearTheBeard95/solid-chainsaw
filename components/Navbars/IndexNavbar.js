import React from 'react';
import Link from 'next/link';
import { userService } from '../../services/user.service';
// components

import IndexDropdown from '../Dropdowns/IndexDropdown';

export default function Navbar({ authenticated }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
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
  const onLogOut = () => {
    return userService.logout();
  };
  return (
    <>
      <nav className='top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link href='/'>
              <a
                className='text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
                href='#pablo'
              >
                SHACK DWELLERS
              </a>
            </Link>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id='example-navbar-warning'
          >
            <ul className='flex flex-col lg:flex-row list-none mr-auto'>
              <li className='flex items-center'>
                <Link href='/about'>
                  <a className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'>
                    About
                  </a>
                </Link>
              </li>
              <li className='flex items-center'>
                <Link href='/activities'>
                  <a className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'>
                    Activities
                  </a>
                </Link>
              </li>
              <li className='flex items-center'>
                <Link href='/documents'>
                  <a className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'>
                    documents
                  </a>
                </Link>
              </li>
              <li className='flex items-center'>
                <Link href='/partners'>
                  <a className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'>
                    Partners
                  </a>
                </Link>
              </li>
              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://sdinet.org'
                  target='_blank'
                  rel='noreferrer'
                >
                  SDI
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://namibia-shackdwellers.blogspot.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Blog
                </a>
              </li>
              <li className='flex items-center'>
                <Link href='/gallery'>
                  <a className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'>
                    Gallery
                  </a>
                </Link>
              </li>
              <li className='flex items-center'>
                <Link href='/contact'>
                  <a className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://www.facebook.com/sharer/sharer.php?u=https://www.shackdwellersnamibia.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='text-blueGray-400 fab fa-facebook text-lg leading-lg ' />
                  <span className='lg:hidden inline-block ml-2'>Share</span>
                </a>
              </li>

              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://twitter.com/intent/tweet?url=https://www.shackdwellersnamibia.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='text-blueGray-400 fab fa-twitter text-lg leading-lg ' />
                  <span className='lg:hidden inline-block ml-2'>Tweet</span>
                </a>
              </li>
              <li className='flex items-center'>
                {authorized ? (
                  <button
                    className='bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => onLogOut()}
                  >
                    Logout
                  </button>
                ) : (
                  <Link href='/auth/login'>
                    <a>
                      <button
                        className='bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                        type='button'
                      >
                        Login
                      </button>
                    </a>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
