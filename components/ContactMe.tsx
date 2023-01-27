import React from 'react'
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typing';
type Inputs = {
    name:string,
    email:string,
    subject:string,
    message:string
  };
type Props = {
    pageInfo:PageInfo
}

function ContactMe({pageInfo}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => (
        window.location.href = `mailto:vappu5429@gmail.com?subject=${formData.subject}&body=Hi,my name is
        ${formData.name}.${formData.message} (${formData.email})`
    );
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-4 justify-evenly mx-auto items-center
    z-0'>
        <h3 className='absolute top-24 uppercase mb-5 tracking-[20px] text-gray-500 text-2xl xl:top-14'>
            Contact
        </h3>
        <div className='flex flex-col space-y-6'>
            <h4 className='text-4xl font-semibold text-center '>
                I have got just what you need.
                <span className='underline decoration-[#F7AB0A]/50'>Lets Talk</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-4 justify-center'>
                <PhoneIcon className='text-[#F7AB0A]  h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>{pageInfo?.phoneNumber}</p>
                </div>


                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A]  h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>{pageInfo?.email}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A]  h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>{pageInfo?.address}</p>
                </div>
               
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contractInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contractInput' type="email" />
                </div>
             <input {...register('subject')} placeholder='Subject' className='contractInput' type="text" />
             <textarea {...register('message')} placeholder='Message' className='contractInput' name="" id=""/>
             <button type='submit' className='py-5 px-10 rounded-md text-black font-bold text-lg bg-[#F7AB0A]'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe