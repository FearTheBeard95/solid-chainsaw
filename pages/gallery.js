import React from 'react';
import Layout from '../layouts/main';

export default function gallery() {
  return (
    <Layout>
      <section className='pb-20 bg-blueGray-200 -mt-24'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
              <h1 className='text-3xl mb-2 font-semibold leading-normal'>
                Under development
              </h1>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
