import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
    const session = await getServerSession(authOptions);

  return (
    <h1>Vendors</h1>
  )
}

export default page