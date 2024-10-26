import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'
import RegisterForm from './Form';

const page = async () => {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/")
    }
  return (
    <section className='container h-screen flex items-center justify-center'>
        <RegisterForm />
    </section>
  )
}

export default page