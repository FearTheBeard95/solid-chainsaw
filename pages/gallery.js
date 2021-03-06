import React from 'react';
import Layout from '../layouts/main';
import Link from 'next/link';
import Image from 'next/image';
import { getGallery } from '../lib/gallery';

export default function gallery({ gallery }) {
  return (
    <Layout title={'Gallery'} image={'/gallery/learning.jpg'}>
      <section className='pb-20 bg-blueGray-200 -mt-24'>
        <br />
        <br />
        <div className='container mx-auto'>
          <div className='justify-center flex flex-wrap'>
            <div className='w-full lg:w-12/12 px-4  -mt-24'>
              <div className='flex flex-wrap'>
                {gallery.map(({ image }) => (
                  <div className='w-full lg:w-4/12 px-4' key={image.name}>
                    <Link href={image.link}>
                      <a target={'_blank'}>
                        <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg ease-linear transition-all duration-150'>
                          <Image
                            alt='...'
                            className='align-middle border-none max-w-full h-auto'
                            src={image.link}
                            height={1000}
                            width={1300}
                            layout='intrinsic'
                          />
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const gallery = await getGallery();
  return {
    props: {
      gallery,
    },
  };
}
