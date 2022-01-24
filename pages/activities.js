import React from 'react';
import HeaderStats from '../components/Headers/HeaderStats';
import Layout from '../layouts/main';
import Image from 'next/image';

export default function Actitivies() {
  return (
    <Layout
      title='Activities'
      subtitle='Our causes'
      image={'/gallery/waterpump.jpg'}
    >
      <section className='pb-20 bg-blueGray-200 -mt-24'>
        <br />
        <br />
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/try.jpeg'
                  className='w-full align-middle '
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                1. Community Saving
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                89% of the Namibian population does not qualify for conventional
                home loans and cannot access commercial housing. Community
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
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/learning2.jpeg'
                  className='w-full align-middle '
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                2. Learning Exchanges
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                Awareness and skills needed to improve the living conditions of
                the members of SDFN are shared during local, national and
                international exchanges. From these exchanges Namibian
                communities learned how to save daily, collect information, map
                and plan settlements, and most importantly communities in
                informal settlements have realized they can do things for
                themselves.
              </p>
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
                  src='/planningStudio.jpeg'
                  className='w-full align-middle '
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                3. CLIP (Profiling, Enumeration and Mapping)
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                The Community Land Information Program (CLIP) is a tool used by
                informal settlement residents to better understand their
                communities, discuss their development priorities and negotiate
                for better living conditions in settlements. Through CLIP
                219,936 households were enumerated in informal settlements
                across all urban areas in Namibia, with varying degrees of
                services, tenure and shelter. This means more than 40% of
                Namibian’s overall population and around 80% of its urban
                population is currently living in shacks
              </p>
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
                  src='/upgrading.jpeg'
                  className='w-full align-middle '
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
                is of such scale, that not one stakeholder is able to address
                it. This Alliance is a partnership approach to scaling up
                security of tenure and housing opportunities through
                co-production between organized communities, local and regional
                authorities, central government, and universities.
              </p>
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
                  src='/pirechartreplace.jpg'
                  className='w-full align-middle'
                  layout='intrinsic'
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                5. The Twahangana Fund
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                Since 1995 the Twahangana Fund channeled N$ 263 million to the
                housing groups of SDFN members. This community-managed revolving
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
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg bg-blueGray-700'>
                <Image
                  width={600}
                  height={400}
                  alt='...'
                  src='/construction.png'
                  className='w-full align-middle '
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                6. House Construction and Services
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                Over 7,000 houses have been completed by the members themselves.
                Members usually build two-room houses, comprising 34 square
                meters at a cost of about N$1,060 per square meter. They also
                install their water and sewer services when they get blocks of
                land. The development is done incrementally, depending on the
                household’s affordability.
              </p>
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
                  src='/5.jpeg'
                  className='w-full align-middle '
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
                the private sector which includes the Buy-a-Brick Initiative of
                Standard Bank Namibia, MTC/Huawei, Office of the First Lady,
                FirstRand Namibia Foundation through RMB Namibia, the Pupkewitz
                Foundation, Ohorongo Cement, Neo Paints, B2Gold
              </p>
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
                  src='/covid.jpeg'
                  className='w-full align-middle '
                />
              </div>
            </div>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                8. Responses to COVID-19
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                Members of the Shack Dwellers Federation of Namibia (SDFN),
                especially SDFN youth members, successfully started backyard
                gardens next to their housing/shacks during the beginning of the
                COVID-19 pandemic. In most of these backyard gardens, they grow
                their own vegetables all year round - mainly spinach, Swiss
                chard, beetroot, carrots, peppers, and tomatoes. Through
                example, these gardens spread quickly as a very feasible
                solution to overcome some of the challenges of the pandemic.
                Some of the gardeners are even able to sell some of their
                vegetables within their community or started small businesses to
                sell seedlings and small portions of seeds. The project’s
                overall aim is to increase food and nutrition security during
                and beyond COVID-19 in urban communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
