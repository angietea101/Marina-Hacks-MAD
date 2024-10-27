"use client";

import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <div className="w-full h-screen grid bg-primary">
        <div className="m-auto">
          <img src="/logo.png" alt="Logo" className="h-30 w-50 mb-10 mx-auto" />
          <form className="border pt-6 pb-8 pl-10 pr-10 bg-secondary rounded-[30px] shadow-md">
            <div className="flex flex-col gap-2">
              <div className="text">
                login
              </div>
              <label className="inputTitle">
                username
              </label>
              <input
                className="w-[450px] h-[66px] mb-8 rounded-[50px] p-5 font-sans text-input text-[23px]"
                type="text"
                placeholder="your username"
              />
              <label className="inputTitle">
                password
              </label>
              <input
                className="w-[450px] h-[66px] rounded-[50px] p-5 font-sans text-input text-[23px]"
                type="password"
                placeholder="password"
              />
              <div className="flex justify-center mt-6">
                <input
                  type="submit"
                  className="w-[156px] h-[66px] cursor-pointer bg-primary rounded-[50px] p-1 hover:shadow-md mt-5 font-sans text-lg text-secondary text-[36px]"
                  value="login"
                />
              </div>
              <div className="mt-5 flex justify-center">
                <span className="cursor-default text-[20px] text-white pr-2">
                Don't have an account?   </span> 
                <Link 
                className="pl-2 text-[20px] bg-yellow-900 text-white px-2 py-1 rounded" href="/register">Sign up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

