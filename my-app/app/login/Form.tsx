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
    <>
      <div className="w-full h-screen grid bg-primary">
        <div className="m-auto">
          <img src="/logo.png" alt="Logo" className="h-30 w-50 mb-10 mx-auto" />
          <form 
            className="border pt-6 pb-8 pl-10 pr-10 bg-secondary rounded-[30px] shadow-md"
            onSubmit={form.handleSubmit(onSubmit)} // Bind handleSubmit here
          >
            <div className="flex flex-col gap-2">
              <div className="text">
                login
              </div>
              <label className="inputTitle">
                username
              </label>
              <input
                {...form.register('username')} // Connect input to react-hook-form
                className="w-[450px] h-[66px] mb-8 rounded-[50px] p-5 font-sans text-input text-[23px]"
                type="text"
                placeholder="your username"
              />
              <p className="text-red-500 text-xs italic">
                {form.formState.errors.username?.message}
              </p>
              <label className="inputTitle">
                password
              </label>
              <input
                {...form.register('password')} // Connect input to react-hook-form
                className="w-[450px] h-[66px] rounded-[50px] p-5 font-sans text-input text-[23px]"
                type="password"
                placeholder="password"
              />
              <p className="text-red-500 text-xs italic">
                {form.formState.errors.password?.message}
              </p>
              <div className="flex justify-center mt-6">
                <input
                  type="submit"
                  className="w-[156px] h-[66px] cursor-pointer bg-primary rounded-[50px] p-1 hover:shadow-md mt-5 font-sans text-lg text-secondary text-[36px]"
                  value="login"
                />
              </div>
              <div className="mt-5 flex justify-center">
                <span className="cursor-default text-[20px] text-white pr-2">
                  Don't have an account?
                </span> 
                <Link 
                  className="pl-2 text-[20px] bg-yellow-900 text-white px-2 py-1 rounded" 
                  href="/register"
                >
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
