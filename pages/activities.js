import React from 'react';
import HeaderStats from '../components/Headers/HeaderStats';
import Layout from '../layouts/main';
import Image from 'next/image';

export default function Actitivies() {
  return (
    <Layout title='Activities' subtitle='Our causes'>
      <section className='pb-20 bg-blueGray-200 -mt-24'>
        <br />
        <br />
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/try.jpeg'
                  className='w-full align-middle rounded-t-lg'
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                1. Community Saving
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                89% of the Namibian population does not qualify for conventional
                home loans and connot access commercial housing. Community
                saving is the SDFN cornerstone to organize communities. This
                contributes to the development of households participating in
                the SDFN saving groups. Each group manages its own savings
                account. By regular saving the urban poor of Namibia are
                deriving financial strength from their own resources.
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/learning2.jpeg'
                  className='w-full align-middle rounded-t-lg'
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                2. Learning Exchanges
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
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
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/planningStudio.jpeg'
                  className='w-full align-middle rounded-t-lg'
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                2. CLIP (Profiling, Enumeration and Mapping)
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                The Community Land Information Program (CLIP) is a tool to be
                used by informal settlement residents to better understand their
                communities, discuss their development priorities and negotiate
                for better living conditions in settlements. The latest CLIP
                numbers show that there are 282 informal settlements with
                228,423 shacks accommodation about 950,000 people in Namibia.
                This means more than 40% of Namibian’s overall population and
                around 80% of its urban population is currently living in
                shacks.
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700'>
                <img
                  width={600}
                  height={400}
                  alt='...'
                  src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
                  className='w-full align-middle rounded-t-lg'
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                4. Informal Settlement Upgrading
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                Upgrading is a term given to measures to improve housing
                conditions in informal settlements. SDFN and NHAG are
                Co-Initiators of the National Alliance for informal settlement
                upgrading because the informal settlement emergency in Namibia
                is of such scale, that not one stakeholder is able to adress it.
                This Alliance is a partnership approach to scaling up security
                of tenure and housing opportunities through co-production
                between organised communities, local and regional authorities,
                central government, and universitie
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/fund.png'
                  className='w-full align-middle rounded-t-lg'
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                5. The Twahangana Fund
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                Since 1995 the Twahangana Fund channelled a bit over N$ 180
                million to the poor of Namibia. This community-managed revolving
                fund provides micro loans to the members of SDFN savings groups
                for land acquisition, servicing of land and house construction.
                This fund serves as a tool for the very poor to access financial
                support in a way that is not supported by official banking
                instruments. Communities, the Government of Namibia and private
                sector are contributing to the Twahangana Fund.
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/construction.png'
                  className='w-full align-middle rounded-t-lg'
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                6. House Construction and Services
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                The Community Land Information Program (CLIP) is a tool to be
                used by informal settlement residents to better understand their
                communities, discuss their development priorities and negotiate
                for better living conditions in settlements. The latest CLIP
                numbers show that there are 282 informal settlements with
                228,423 shacks accommodation about 950,000 people in Namibia.
                This means more than 40% of Namibian’s overall population and
                around 80% of its urban population is currently living in
                shacks.
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/5.jpeg'
                  className='w-full align-middle rounded-t-lg'
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                7. Financial Partners
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                The work of SDFN and NHAG is currently supported by Misereor
                (Germany), GIZ (Germany) and the Shack/Slum Dwellers
                International. Funds for the Twahangana Fund are contributed by
                the Ministry of Urban and Rural Development (MURD) as well as
                the private sector which include the Buy-a-Brick Initiative of
                Standard Bank Namibia - to which MTC and Huawei distributed
                significantly, the First National Bank of Namibia, the Harold
                Pupkewitz Foundation, Ohorongo Cement, Neo Paints and B2Gold.
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/covid.jpeg'
                  className='w-full align-middle rounded-t-lg'
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                8. Responses to COVID-19
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                When the COVID-19 pandemic started in Namibia in March 2020 SDFN
                and NHAG looked at it as a serious issue that needed to be
                addressed to make sure SDFN Members and communities of informal
                settlements are well informed. With support from NHAG, SDFN
                requested trainings from the Ministry of Health & Social
                Services in April 2020. Twenty SDFN members were trained to
                educate communities about COVID-19 symptoms and how they can
                protect themselves from the virus. SDFN/NHAG have developed
                pamphlets and fact sheets being distributed in various local
                languages
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
