import React, { Component } from 'react';
import Link from 'next/link';

// layout for page

import Auth from '../../layouts/Auth';
import Router from 'next/router';
import { userService } from '../../services/user.service';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onChangeEmail = (e) => {
    const email = e.target.value;
    this.setState({
      email,
    });
  };

  onChangePassword = (e) => {
    const password = e.target.value;
    this.setState({
      password,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const username = this.state.email;
    const password = this.state.password;

    return userService
      .login(username, password)
      .then(() => {
        const returnUrl = Router.query.returnUrl || '/';

        Router.push('/');
      })
      .catch((error) => {
        throw ('apiError', { message: error });
      });
  };

  render() {
    return (
      <>
        <div className='container mx-auto px-4 h-full'>
          <div className='flex content-center items-center justify-center h-full'>
            <div className='w-full lg:w-4/12 px-4'>
              <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0'>
                <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                  <div className='text-blueGray-400 text-center mb-3 font-bold'></div>
                  <form onSubmit={this.onSubmit}>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                        htmlFor='grid-password'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        placeholder='Email'
                        onChange={this.onChangeEmail}
                      />
                    </div>

                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                        htmlFor='grid-password'
                      >
                        Password
                      </label>
                      <input
                        type='password'
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        placeholder='Password'
                        onChange={this.onChangePassword}
                      />
                    </div>
                    <div className='text-center mt-6'>
                      <button
                        className='bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
                        type='submit'
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Login.layout = Auth;
