import Link from 'next/link';
import React from 'react';
import Layout from '../../layouts/main';
import { getDocuments } from '../../lib/documents';

export default function documents({ documents }) {
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
                  <li key={doc.documents.name}>
                    <h4 className='text-3xl font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
                      {doc.documents.name}
                      {'  '}
                      <Link href={doc.documents.link} key={doc.documents.name}>
                        <a target={'_blank'}>
                          <i className='fas fa-download p-1'></i>
                        </a>
                      </Link>
                      {'  '}
                      <i className='fas fa-trash'></i>
                    </h4>
                    <hr className='my-6 border-blueGray-300' />
                  </li>
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
