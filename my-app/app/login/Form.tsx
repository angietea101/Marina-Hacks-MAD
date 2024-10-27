"use client";

import Link from "next/link";
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";

// Define the form schema
const FormSchema = z.object({
  username: z
    .string()
    .min(1, 'Username is required')
    .refine((val) => /^[a-zA-Z0-9_]+$/.test(val), {
      message: "Invalid username",
    }),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // Define the submit handler
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log("BUTTON pressed!")
    console.log("Form Values:", values);
    const loginData = await signIn('credentials', {
      username: values.username,
      password: values.password,
      redirect: false,
    });
    if (loginData?.error) {
      console.log(loginData.error);
    } else {
      router.push('/vendors');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-primary">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto px-4">
        <img src="/logo.png" alt="Logo" className="h-20 w-auto mb-6 mx-auto" />
        
        <form className="border p-6 sm:p-8 bg-secondary rounded-2xl shadow-lg">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-4">Login</h2>
            
            <label className="text-white font-semibold text-[20px] pb-0 pl-4">Username</label>
            <input
              className="w-full h-14 rounded-full p-4 text-input text-lg"
              type="text"
              placeholder="Your username"
            />
            
            <label className="text-white font-semibold text-[20px] pl-4 pt-4">Password</label>
            <input
              className="w-full h-14 rounded-full p-4 text-input text-lg"
              type="password"
              placeholder="Password"
            />
            
            <div className="flex justify-center mt-4">
              <input
                type="submit"
                className="w-40 h-12 cursor-pointer bg-primary rounded-full text-lg text-secondary font-semibold hover:shadow-lg transition-shadow"
                value="Login"
              />
            </div>
            
            <div className="mt-4 flex justify-center">
              <span className="text-white text-sm sm:text-base">
                Don't have an account?
              </span>
              <Link href="/register">
                <span className="ml-2 text-sm sm:text-base bg-yellow-900 text-white px-3 py-1 rounded-full cursor-pointer hover:bg-yellow-700 transition-colors">
                  Register
                </span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
