"use client"

import { useSession } from 'next-auth/react'
import React from 'react'

const HomePage = () => {
    const { data: session } = useSession();
    return (
    <>
        {session ? (
            <>
                <h1>Welcome back</h1>
            </>
        ) : (
            <>
            <h1 className='text-3x1 text-red-500'>You're not logged in</h1>
            </>
        )}
    </>
  )
}

export default HomePage