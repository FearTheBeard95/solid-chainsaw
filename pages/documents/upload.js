import React, { Component } from 'react';
import Layout from '../../layouts/main';
import axios from 'axios';
import Router from 'next/router';
import { userService } from '../../services/user.service';

export default class upload extends Component {
  state = {
    document: '',
    authorized: false,
  };

  componentDidMount() {
    this.authCheck();
  }

  onChangeFile = (e) => {
    this.setState({
      document: e.target.files[0],
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('document', this.state.document);
    axios.post('/api/upload', formData, {}).then((res) => {
      Router.push('/documents');
    });
  };

  authCheck() {
    if (!userService.userValue) {
      this.setState({
        authorized: false,
      });
      Router.push('/auth/login');
    } else {
      this.setState({
        authorized: true,
      });
    }
  }

  render() {
    return (
      <Layout title='Upload Documents'>
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
                    <form onSubmit={this.onSubmit}>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlFor='email'
                        >
                          Document
                        </label>
                        <input
                          type='file'
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          onChange={this.onChangeFile}
                        />
                      </div>
                      <div className='text-center mt-6'>
                        <button
                          className='bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                          type='submit'
                        >
                          Upload
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
}
