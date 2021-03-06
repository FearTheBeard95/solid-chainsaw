import React from 'react';
import Layout from '../layouts/main';
import Image from 'next/image';

export default function Landing() {
  return (
    <Layout title='About Us' image='/gallery/upgrading2.jpg'>
      <section className='pb-20 bg-blueGray-200 -mt-24'>
        <br />
        <br />
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>
          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                Welcome to Shack Dwellers Federation of Namibia
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                The Shack Dwellers Federation of Namibia (SDFN) consist of 1,036
                saving groups, with a total number of 32,264 members in 14
                regions of Namibia. Members altogether saved over N$ 34 million
                by June 2021.
              </p>
            </div>

            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/logo.jpg'
                  className='w-full align-middle'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/learning2.jpeg'
                  className='w-full align-middle'
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                Community Saving
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                Community saving is the SDFN cornerstone to organize communities
                and the development of households participating in the SDFN
                saving groups. Each group manages its own savings account. When
                there are sufficient funds, the group may put a deposit on a
                piece of land. The local authorities should provide land, but
                this is still the main obstacle. Payments for the land are made
                to the respective local authorities over a ten-year period. The
                saved money can also be used to meet basic and daily needs as
                well as to secure further funding. Every six months each group
                is visited by members of another group for an ???audit??? of their
                saving books.
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                Women Empowerment
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                The activities of NHAG/SDFN have a visible impact on women
                empowerment in Namibia. Women largely and actively participate
                in all federation activities, within all 14 regions of Namibia.
                The processes of forming saving groups, engaging in
                community-based land tenure and upscaling informal settlement
                upgrading, have been mainly driven by women. In June 2021 of the
                32,264 members, 21,685 were women. Women have been empowered
                through active participation in SDFN activities, which has given
                the opportunity to break away from top-down leadership that had
                traditionally made people apathetic.
              </p>
            </div>

            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/upgrading.jpeg'
                  className='w-full align-middle'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/kids.jpeg'
                  className='w-full align-middle'
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                Private Sector Engagement
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                increased and significant contribution in private sector funding
                towards the construction of houses. Currently the following
                companies contributed not only to the construction of houses but
                also assisted the Shack Dwellers Federation of Namibia with
                technical and capacity building: Standard Bank of Namibia
                through its Buy-a-Brick Initiative; MTC and Huawei contributing
                significantly to the Buy-a-Brick Initiative; FirstRand Namibia
                Foundation through RMB Namibia; The Harold Pupkewitz Foundation;
                Ohorongo Cement; Neo Paints and B2Gold (Otjikoto Mine).
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
