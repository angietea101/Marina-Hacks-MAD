"use client";

import { useSession, signOut } from 'next-auth/react';
import React from 'react';
import Link from "next/link";

const header = () => {
    const { data: session } = useSession();
    return (
        <>
            <header className="top-0 py-5">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        {/* Logo image */}
                        <img src="/logo.png" alt="Logo" height={160} width={170} />
                        
                        {/* Conditional Buttons based on session */}
                        <div className="flex space-x-4">
                            {session ? (
                                <>
                                    <button 
                                        onClick={() => signOut({ callbackUrl: "/login" })} 
                                        className="bg-red-500 text-white py-2 px-4 rounded-full"
                                    >
                                        Log out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link href="/login">
                                        <button className="bg-secondary text-white py-2 px-4 rounded-full">
                                            Log in
                                        </button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            
        </>
    );
};

export default header;