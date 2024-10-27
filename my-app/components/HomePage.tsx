"use client";

import { useSession } from 'next-auth/react';
import React from 'react';
import Link from "next/link";

const HomePage = () => {
    const { data: session } = useSession();
    
    return (
        <>
            <header className="sticky top-0 py-5">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        {/* Logo image */}
                        <img src="/logo.png" alt="Logo" height={160} width={170} />
                        
                        {/* Conditional Buttons based on session */}
                        <div className="flex space-x-4">
                            {session ? (
                                <Link href="/profile">
                                    <button className="bg-primary text-white py-2 px-4 rounded-full">
                                        Profile
                                    </button>
                                </Link>
                            ) : (
                                <>
                                    <Link href="/login">
                                        <button className="bg-primary text-white py-2 px-4 rounded-full">
                                            log in
                                        </button>
                                    </Link>
                                    <Link href="/register">
                                        <button className="bg-secondary text-white py-2 px-4 rounded-full">
                                            sign up
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

export default HomePage;

