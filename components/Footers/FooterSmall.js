import React from 'react';

export default function FooterSmall() {
  return (
    <>
      <footer className='relative bg-blueGray-800 pt-8 pb-6'>
        <div className='container mx-auto px-4'>
          <hr className='mb-6 border-b-1 border-blueGray-600' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4'>
              <div className='text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left'>
                Copyright © {new Date().getFullYear()}{' '}
                <a
                  href='https://www.creative-tim.com?ref=nnjs-footer-small'
                  className='text-white hover:text-blueGray-300 text-sm font-semibold py-1'
                >
                  Shack Dwellers
                </a>
              </div>
            </div>
            <div className='w-full md:w-8/12 px-4'>
              <ul className='flex flex-wrap list-none md:justify-end  justify-center'>
                <li>
                  <a
                    href='https://www.creative-tim.com?ref=nnjs-footer-small'
                    className='text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3'
                  >
                    Created by Carlos Sibalatani 🚀
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
