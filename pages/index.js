/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            backgroundImage: "url('/coverpage.png')",
          }}
        ></div>
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
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg bg-blueGray-700'>
                <Image
                  alt='...'
                  src='/logo.jpg'
                  height={1000}
                  width={1500}
                  className='w-full align-middle'
                />
                <blockquote className='relative p-8 mb-4'>
                  <h4 className='text-xl font-bold text-white'>
                    Welcome to Shack Dwellers Federation of Namibia(SDFN) &
                    Namibia Housing Action Group (NHAG)
                  </h4>
                  <p className='text-md font-light mt-2 text-white'>
                    The Shack Dwellers Federation of Namibia (SDFN), is a
                    community-based network of housing saving schemes, aiming to
                    improve the living conditions of urban and rural poor, while
                    promoting women???s participation. SDFN is affiliate to Shack
                    Dwellers International (SDI). This Federation was founded in
                    October 1998 by 30 grassroots housing groups, which were
                    active since the late eighties. The Namibia Housing Action
                    Group (NHAG) is a Non-Governmental Service Organization,
                    aiming to support and add value to the activities and
                    processes of the Shack Dwellers Federation Namibia. It was
                    established in 1992 to support the savings groups of the
                    Shack Dwellers Federation as an umbrella organization. NHAG
                    became a separate NGO in 1999, when it was established as a
                    Trust to support the peoples??? processes of the Shack
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
                        The Shack Dwellers??? Federation of Namibia???s main focus
                        is to improve the living conditions of low-income people
                        living in shacks, rented rooms and those without any
                        accommodation, while promoting women???s participation.
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
                        The Shack Dwellers??? Federation of Namibia???s main focus
                        is to improve the living conditions of low-income people
                        living in shacks, rented rooms and those without any
                        accommodation, while promoting women???s participation.
                        The Federation facilitates and advocates for change for
                        those excluded from commercial housing and financial
                        processes, using a community-driven approach.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-12/12 px-4'>
                  <div className='relative flex flex-col min-w-0 mt-4'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-newspaper'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>SDFN Youth</h6>
                      <p className='mb-7 text-blueGray-500'>
                        Namibia has one of the youngest and fastest-growing
                        populations in southern Africa. In 2018 the median age
                        in Namibia was 21.3 years. The youth unemployment rate
                        in Namibia continues to increase and reached an all-time
                        high of 46.10% in 2018. Youth empowerment in Namibia is
                        thus crucial for the sustainable development of the
                        country. The youth is very involved in the Community
                        Land Information Program (CLIP) to collect data towards
                        scaling up informal settlement upgrading. They are very
                        active and visible in fundraising activities, to sustain
                        themselves as an organization, to pay tuition fees and
                        to do youth projects.
                      </p>
                      <br />
                      <p className='mb-7 text-blueGray-500'>
                        SDFN Youth also took the lead on and enjoyed
                        implementing the Know your City TV (KYCTV) Project,
                        funded by Shack/ Slum Dwellers International (SDI).
                        KYCTV is a call to action within the SDI ``Know your
                        City Campaign??? for cities in different countries to know
                        their people, know the poverty and plight of the poorest
                        and work together to bring about an end to poverty in
                        our world{"'"}s cities. They documented different SDFN
                        projects across the country, from informal settlement
                        upgrading to housing construction. The youth
                        participated in international training sessions with
                        SDI, on editing and filming. The youth also used their
                        filming excursions as an opportunity to train other
                        community members, exchange knowledge, and improve their
                        skills.
                      </p>
                      <br />
                      <p className='mb-7 text-blueGray-500'>
                        Click on any of the links below to view their work.
                      </p>
                      <p className='mb-7 text-blueGray-700'>
                        <li>
                          <a
                            className='hover:text-blueGray-500'
                            href='https://www.youtube.com/channel/UCEH61JBwtJlVtyPWql19FRA'
                            target='_blank'
                            rel='noreferrer'
                          >
                            Know your City TV (KYCTV){' '}
                            <i className='text-blueGray-400 fab fa-youtube' />
                          </a>
                        </li>
                        <li>
                          <a
                            className='hover:text-blueGray-500'
                            href='https://www.cohabitat.io/en/partners/329d1e95-801d-4954-9ebf-2cfd74750727'
                            target='_blank'
                            rel='noreferrer'
                          >
                            Know your City TV (KYCTV){' '}
                            <i className='text-blueGray-400 fas fa-newspaper' />
                          </a>
                        </li>
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
      <Footer />
    </>
  );
}
