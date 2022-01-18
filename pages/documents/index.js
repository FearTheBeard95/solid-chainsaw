import Link from 'next/link';
import React from 'react';
import Layout from '../../layouts/main';
import { getDocuments } from '../../lib/documents';

export default function Documents({ documents }) {
  return (
    <Layout title={'Documents'} authenticated={true}>
      <section className='pb-20 bg-blueGray-200 -mt-24'>
        <br />
        <br />
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'></div>

          <div className='flex flex-wrap items-start justify-center mt-32'>
            <div className='w-full  px-4 mr-auto ml-auto'>
              <ul>
                {documents.map((doc) => (
                  <Link href={doc.documents.link} key={doc.documents.name}>
                    <a target={'_blank'}>
                      <li>
                        <h4 className='text-3xl font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
                          {doc.documents.name}
                          {'  '}
                          <i className='fas fa-download p-1'></i>
                          {'  '}
                        </h4>
                        <hr className='my-6 border-blueGray-300' />
                      </li>
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allDocuments = await getDocuments();
  console.log(allDocuments);
  return {
    props: {
      documents: allDocuments,
    },
  };
}
