import React, { useState } from 'react';
import Layout from '../layouts/main';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  async function handleOnSubmit(e) {
    e.preventDefault();
    console.log('formdata', formData);
    return await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    }).then(() => {
      setFormData({
        fullName: '',
        email: '',
        message: '',
      });
    });
  }

  return (
    <Layout
      title='Contact Us'
      subtitle='You can become a volunteer for Shack Dwellers and do your part
    by improving the lives of less privelaged people. We also accept
    sponsorship for our various activities.'
    >
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
      </section>
      <section className='relative block py-24 lg:pt-0 bg-blueGray-800'>
        <br />
        <br />
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-center lg:-mt-64 -mt-48'>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200'>
                <div className='flex-auto p-5 lg:p-10'>
                  <h4 className='text-2xl font-semibold'>
                    Want to work with us?
                  </h4>
                  <p className='leading-relaxed mt-1 mb-4 text-blueGray-500'>
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <form onSubmit={handleOnSubmit}>
                    <div className='relative w-full mb-3 mt-8'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                        htmlFor='full-name'
                      >
                        Full Name
                      </label>
                      <input
                        type='text'
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        placeholder='Full Name'
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        value={formData.fullName}
                        required
                      />
                    </div>

                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                        htmlFor='email'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        placeholder='Email'
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        value={formData.email}
                        required
                      />
                    </div>

                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                        htmlFor='message'
                      >
                        Message
                      </label>
                      <textarea
                        rows='4'
                        cols='80'
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                        placeholder='Type a message...'
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        value={formData.message}
                        required
                      />
                    </div>
                    <div className='text-center mt-6'>
                      <button
                        className='bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        type='submit'
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
