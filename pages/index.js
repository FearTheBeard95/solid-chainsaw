/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Link from 'next/link';

import IndexNavbar from '../components/Navbars/IndexNavbar.js';
import Footer from '../components/Footers/Footer';

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
        <div
          className='absolute top-0 w-full h-full bg-center bg-cover'
          style={{
            backgroundImage: "url('/upgrading.jpeg')",
          }}
        >
          <span
            id='blackOverlay'
            className='w-full h-full absolute opacity-50 bg-black'
          ></span>
        </div>
        <div className='container mx-auto items-center flex flex-wrap relative'>
          <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'>
            <div className='pt-32 sm:pt-0'>
              <h2 className='font-semibold text-4xl text-blueGray-100'>
                Improving the lives of Poor People in Namibia.
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-blueGray-100'>
                Shack Dwellers Federation of Namibia(SDFN) & Namibia Housing
                Action Group (NHAG)
              </p>
              <div className='mt-12'>
                <Link href='/contact'>
                  <a className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'>
                    Be A Volunteer
                  </a>
                </Link>
                <Link href='/contact'>
                  <a className='github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg'>
                    Be A Sponsor
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-48 md:mt-40 pb-40 relative bg-blueGray-100'>
        <div
          className='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20'
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
              className='text-blueGray-100 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>
        <div className='container mx-auto'>
          <div className='flex flex-wrap items-center'>
            <div className='w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700'>
                <blockquote className='relative p-8 mb-4'>
                  <h4 className='text-xl font-bold text-white'>
                    Welcome to Shack Dwellers Federation of Namibia(SDFN) &
                    Namibia Housing Action Group (NHAG)
                  </h4>
                  <p className='text-md font-light mt-2 text-white'>
                    The Shack Dwellers Federation of Namibia (SDFN), is a
                    community-based network of housing saving schemes, aiming to
                    improve the living conditions of urban and rural poor, while
                    promoting women’s participation. SDFN is affiliate to Shack
                    Dwellers International (SDI). This Federation was founded in
                    October 1998 by 30 grassroots housing groups, which were
                    active since the late eighties. The Namibia Housing Action
                    Group (NHAG) is a Non-Governmental Service Organization,
                    aiming to support and add value to the activities and
                    processes of the Shack Dwellers Federation Namibia. It was
                    established in 1992 to support the savings groups of the
                    Shack Dwellers Federation as an umbrella organization. NHAG
                    became a separate NGO in 1999, when it was established as a
                    Trust to support the peoples’ processes of the Shack
                    Dwellers Federation of Namibia..
                  </p>
                </blockquote>
              </div>
            </div>

            <div className='w-full md:w-6/12 px-4'>
              <div className='flex flex-wrap'>
                <div className='w-full md:w-6/12 px-4'>
                  <div className='relative flex flex-col mt-4'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-sitemap'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>
                        SDFN Vision & Mission
                      </h6>
                      <p className='mb-4 text-blueGray-500'>
                        The Shack Dwellers’ Federation of Namibia’s main focus
                        is to improve the living conditions of low-income people
                        living in shacks, rented rooms and those without any
                        accommodation, while promoting women’s participation.
                        The Federation facilitates and advocates for change for
                        those excluded from commercial housing and financial
                        processes, using a community-driven approach.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-6/12 px-4'>
                  <div className='relative flex flex-col min-w-0 mt-4'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-newspaper'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>
                        NHAG Vision & Mission
                      </h6>
                      <p className='mb-4 text-blueGray-500'>
                        The Shack Dwellers’ Federation of Namibia’s main focus
                        is to improve the living conditions of low-income people
                        living in shacks, rented rooms and those without any
                        accommodation, while promoting women’s participation.
                        The Federation facilitates and advocates for change for
                        those excluded from commercial housing and financial
                        processes, using a community-driven approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pb-20 relative block bg-blueGray-800'>
        <div
          className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20'
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
              className='text-blueGray-800 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>

        <div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
          <div className='flex flex-wrap text-center justify-center'>
            <div className='w-full lg:w-6/12 px-4'>
              <h2 className='text-4xl font-semibold text-white'>Our work</h2>
              <br />
              <Link href='/activities'>
                <a className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'>
                  View All
                </a>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap mt-12 justify-center'>
            <div className='w-full lg:w-3/12 px-4 text-center'>
              <div className='text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                <i className='fas fa-medal text-xl'></i>
              </div>
              <h6 className='text-xl mt-5 font-semibold text-white'>
                Community Saving
              </h6>
              <p className='mt-2 mb-4 text-blueGray-400'>
                89% of the Namibian population does not qualify for conventional
                home loans and connot access commercial housing. Community
                saving is the SDFN cornerstone to organize communities. This
                contributes to the development of households participating in
                the SDFN saving groups. Each group manages its own savings
                account. By regular saving the urban poor of Namibia are
                deriving financial strength from their own resources.
              </p>
            </div>
            <div className='w-full lg:w-3/12 px-4 text-center'>
              <div className='text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                <i className='fas fa-poll text-xl'></i>
              </div>
              <h5 className='text-xl mt-5 font-semibold text-white'>
                Learning Exchanges
              </h5>
              <p className='mt-2 mb-4 text-blueGray-400'>
                Awareness and skills needed to improve the living conditions of
                the members are shared during local, national and international
                exchanges. From these exchanges Namibian communities learned how
                to save daily, collect information, map and plan settlements,
                and most importantly communities in informal settlements have
                realised they can do things for themselves.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className='pb-16 bg-blueGray-200 relative pt-32'>
        <div
          className='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20'
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

        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10'>
            <div className='w-full text-center lg:w-8/12'>
              <h3 className='font-semibold text-3xl'>Want help out?</h3>
              <p className='text-blueGray-500 text-lg leading-relaxed mt-4 mb-4'>
                You can become a volunteer for Shack Dwellers and do your part
                by improving the lives of less privelaged people. Click below to
                contact us
              </p>
              <p className='text-blueGray-500 text-lg leading-relaxed mt-4 mb-4'>
                We also accept sponsorship for our various activities. Click
                below to contact us.
              </p>
              <div className='sm:block flex flex-col mt-10'>
                <a
                  href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index'
                  target='_blank'
                  className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
                >
                  Contact
                </a>
              </div>
              <div className='text-center mt-16'></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
