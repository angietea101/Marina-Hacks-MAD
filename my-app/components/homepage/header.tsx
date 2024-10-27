"use client";

import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <section className="h-full w-full bg-primary">
            <header className="sticky top- py-5">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between ml-6 mt-3">
                        {/* Logo image */}
                        <img src="/logo.png" alt="Logo" height={160} width={170} />
                        
                        {/* Log in and Sign up buttons */}
                        <div className="flex space-x-4">
                            <Link href="/login">
                                <button className="w-[115px] h-[42px] bg-white text-secondary py-2 px-4 rounded-[20px] border-secondary border-[3px] right-20">
                                    log in
                                </button>
                            </Link>
                            <Link href="/register">
                                <button className="w-[115px] h-[42px] bg-secondary text-white py-2 px-4 rounded-[20px] mr-6">
                                    sign up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Header;
