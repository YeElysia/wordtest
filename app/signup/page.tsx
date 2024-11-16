//import 'bootstrap/dist/css/bootstrap.min.css';
//import './globals.css'
"use client"

import React, { useState } from 'react';
import { User } from '../../database/user';

export default function Login() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value) && value.length > 0) {
      setEmailError('请输入有效的邮箱地址');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email);
    if (!emailError) {
      // 提交表单数据
      console.log('表单提交', { email, password });
    }
  };

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (value: string) => {
    if (value.length > 0 && value.length < 6) {
      setPasswordError('密码必须至少包含 6 个字符');
    } else {
      setPasswordError('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="ellipse-1 -z-50"></div>
        <div className="ellipse-2 -z-50"></div>
        <div className="Login justify-center">
          <div className="flex min-h-full min-w-full flex-1 flex-col justify-center px-4 py-12 lg:px-6">
            <div className="sm:mx-auto sm:w-full sm:max-w-lg mb-4">
              <h2 className="text-center text-4xl/9 font-bold tracking-tight text-[#1935ca]">
                Sign up to your account
              </h2>
            </div>

            <div className="flex flex-col justify-center mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
              <form action="#" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-[#696F79]">
                    Your Email Address *
                  </label>
                  <div className="mt-2 w-full">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter email address"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={handleEmailChange}
                      className={`block w-full h-12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1935ca] placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 ${emailError ? 'border-red-500' : 'border-gray-300'}`}
                    />
                  </div>
                  {emailError && <p className="mt-2 text-red-500 text-sm">{emailError}</p>}
                </div>
                <div className='mb-4'>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-[#696F79]">
                      Your Password *
                    </label>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      type='text'
                      id="password"
                      value={password}
                      onChange={handleChange}
                      placeholder="Password"
                      required
                      autoComplete="current-password"
                      style={showPassword ? {} : { WebkitTextSecurity: 'disc' } as React.CSSProperties} // 禁用眼睛按钮
                      className="block w-full h-12 rounded-md border-0 ${error ? 'border-red-500' : 'border-gray-300'} py-1.5 pl-7 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1935ca] placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                    <button

                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-[13px] text-gray-500"
                    >
                      {showPassword ? (
                        <label className='block'>
                          Hide
                        </label>
                      ) : (
                        <label >
                          Show
                        </label>
                      )}
                    </button>
                  </div>
                  {passwordError && <p className="mt-2 text-red-500 text-sm">{passwordError}</p>}
                </div>
                <div className='sm:max-w-lg sm:w-full sm:mx-auto my-32 '>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}