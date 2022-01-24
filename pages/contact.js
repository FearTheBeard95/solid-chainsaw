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
      image={'/gallery/try.jpg'}
    >
      <section className='pb-20 relative block bg-blueGray-100'>
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
              className='text-blueGray-100 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>
      </section>
      <section className='relative block py-24 lg:pt-0 bg-blueGray-100'>
        <div className='container mx-auto px-4 pb-32'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>
              <div className='md:pr-12'>
                <br />
                <h3 className='text-3xl font-semibold'>
                  Windhoek NHAG Contact Information
                </h3>
                <ul className='list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='fas fa-map-pin'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          11, Mozart Street, Windhoek West, Namibia
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='far fa-phone'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          <a href='tel:+264 61 239 398'>+264 61 239 398</a>
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='far fa-envelope'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          <a href='mailto:NHAG.info@gmail.com'>
                            NHAG.info@gmail.com
                          </a>
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='far fa-fax'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          <a href='tel: +264 61 239397'>+264 61 239397</a>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>
              <div className='md:pr-12'>
                <br />
                <br />
                <br />
                <h3 className='text-3xl font-semibold'>
                  SDFN Central Information Center
                </h3>
                <ul className='list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='fas fa-map-pin'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          Habitat II, ERF 925 Etetewe Street Hakahana
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='far fa-phone'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          <a href='tel:+264 81 242 9086'>+264 81 242 9086</a>
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='far fa-envelope'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          <a href='mailto:NHAG.info@gmail.com'>
                            NHAG.info@gmail.com
                          </a>
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='far fa-shipping-fast'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          P.O BOX 21010, Windhoek
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='far fa-user-alt'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          National SDFN Facilitator: Edith Mbanga
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>
              <div className='md:pr-12'>
                <br />
                <h3 className='text-3xl font-semibold'>
                  Oshakati SDFN Northern Information Centre
                </h3>
                <ul className='list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='fas fa-map-pin'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          ERF 5221 Evululuko, Oshakati, Namibia
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='far fa-phone'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          <a href='tel:+264 65 221 624'>+264 65 221 624</a>
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='far fa-envelope'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          <a href='mailto:NHAG.info@gmail.com'>
                            NHAG.info@gmail.com
                          </a>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
