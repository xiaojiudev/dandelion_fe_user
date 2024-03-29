'use client'
import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button, Checkbox, Form, Input } from 'antd';

import { SIGNIN_URI } from '@/constants/baseURL';
import { regexEmail, regexName, regexPW, regexPhone } from '@/constants/regex';

type SignUpType = {
    email?: string;
    fullname?: string;
    phone?: number;
    password?: string;
    agree?: boolean;
}

export default function Signup() {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <>
            <div className='w-full max-w-[416px]'>
                <h2 className='text-2xl font-bold mb-8'>Sign up to Dandelion</h2>
                <div className='flex flex-row flex-wrap gap-3'>
                    <button className='flex items-center justify-center py-3 flex-1 border hover:border-[#dbdbde] rounded-lg text-sm font-medium' tabIndex={1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="none" role="img" className="mr-2">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z" fill="#4285F4"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z" fill="#34A853"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z" fill="#FBBC05"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z" fill="#EA4335"></path>
                        </svg>
                        <span>
                            Sign up with Google
                        </span>
                    </button>
                    <button className='flex items-center justify-center py-3 flex-1 border hover:border-[#dbdbde] rounded-lg text-sm font-medium' tabIndex={2}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0,0,256,256" role="img" className='mr-2'>
                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                <g transform="scale(5.33333,5.33333)">
                                    <path d="M24,5c-10.49341,0 -19,8.50659 -19,19c0,10.49341 8.50659,19 19,19c10.49341,0 19,-8.50659 19,-19c0,-10.49341 -8.50659,-19 -19,-19z" fill="#039BE5" />
                                    <path d="M26.572,29.036h4.917l0.772,-4.995h-5.69v-2.73c0,-2.075 0.678,-3.915 2.619,-3.915h3.119v-4.359c-0.548,-0.074 -1.707,-0.236 -3.897,-0.236c-4.573,0 -7.254,2.415 -7.254,7.917v3.323h-4.701v4.995h4.701v13.729c0.931,0.14 1.874,0.235 2.842,0.235c0.875,0 1.729,-0.08 2.572,-0.194z" fill="#ffffff" />
                                </g>
                            </g>
                        </svg>
                        <span>
                            Sign up with Facebook
                        </span>
                    </button>

                </div>
                <hr className='h-[1px] my-8 p-0 overflow-visible border-none bg-[#e7e7e9] text-[#6e6d7a] text-center after:content-["or"] after:inline-block after:relative after:-top-[14px] after:px-4 after:bg-white after:text-sm'></hr>
                <div className=''>
                    <Form
                        name="register"
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 24 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ agree: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout='vertical'
                    >
                        {/* FirstName & LastName */}
                        <Form.Item className='mb-0'>
                            <div className='flex gap-3 mb-0'>
                                <Form.Item<SignUpType>
                                    name="email"
                                    label={<span className='font-semibold text-[15px]'>Your Email</span>}
                                    required
                                    validateDebounce={500}
                                    hasFeedback
                                    rules={[{ required: true, type: "email", message: 'Email invalid!', pattern: new RegExp(regexEmail) }]}
                                    className='flex-1'
                                >
                                    <Input tabIndex={3} placeholder='bonnie@domain.com' allowClear />
                                </Form.Item>
                                <Form.Item<SignUpType>
                                    name="fullname"
                                    label={<span className='font-semibold text-[15px]'>Full Name</span>}
                                    required
                                    validateDebounce={500}
                                    hasFeedback
                                    rules={[{ required: true, type: "string", message: "Name invalid!", pattern: new RegExp(regexName) }]}
                                    className='flex-1'
                                >
                                    <Input tabIndex={3} placeholder='e.g. Bonnie Green' allowClear />
                                </Form.Item>
                            </div>
                        </Form.Item>

                        {/* Email */}
                        <Form.Item<SignUpType>
                            name="phone"
                            label={<span className='font-semibold text-[15px]'>Phone</span>}
                            required
                            validateDebounce={500}
                            hasFeedback
                            rules={[{ required: true, type: "string", message: "Phone invalid!", pattern: new RegExp(regexPhone) }]}
                        >
                            <Input addonBefore={"+84"} tabIndex={3} placeholder='0111222333' maxLength={10} allowClear />
                        </Form.Item>

                        {/* Password */}
                        <Form.Item<SignUpType>
                            label={<span className='font-semibold text-[15px]'>Password</span>}
                            name="password"
                            required
                            hasFeedback
                            validateDebounce={500}
                            rules={[{ required: true, message: "Sample password 12346aB@", pattern: new RegExp(regexPW) }]}
                        >
                            <Input.Password tabIndex={4} placeholder='8+ characters' maxLength={20} allowClear />
                        </Form.Item>


                        {/* Checkbox */}
                        <Form.Item
                            wrapperCol={{ span: 24, offset: 0 }}
                        >
                            <Form.Item
                                name="agree"
                                valuePropName="checked"
                                noStyle
                                required
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                    },
                                ]}
                            >
                                <Checkbox tabIndex={5} className='select-none text-sm text-gray-800'>
                                    I agree with Dandelion&apos;s <a href="">Terms of Service</a>, <a href="">Privacy Policy</a>, and default <a href="">Notification Settings</a>.
                                </Checkbox>
                            </Form.Item>
                        </Form.Item>

                        {/* Submit */}
                        <Form.Item>
                            <Button type="primary" block shape='round' htmlType="submit" tabIndex={6}>
                                Create Account
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <p className='text-sm text-center text-[#3d3d4e]'>
                    Already have an account?&nbsp;
                    <Link href={SIGNIN_URI} className='underline text-primary-400'>Sign In</Link>
                </p>
            </div>
            <Link href={SIGNIN_URI}>
                <button className='absolute top-10 left-10 w-10 h-10 border hover:border-[#dbdbde] rounded-full flex justify-center items-center'>
                    <ChevronLeft size={18} />
                </button>
            </Link>
        </>
    )
}
