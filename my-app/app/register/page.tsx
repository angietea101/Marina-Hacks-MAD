import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'
import RegisterForm from './Form';
import styles from './Form.module.css'

const page = async () => {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/")
    }
  return (
    <section className={"bg-primary"}>
        <RegisterForm />
    </section>
  )
}

export default page