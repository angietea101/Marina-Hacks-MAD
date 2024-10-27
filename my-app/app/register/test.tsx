"use client"

import React from 'react'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import Link from "next/link";

// Define the schema with Zod
const formSchema = z
  .object({
    username: z
      .string()
      .min(5, { message: "Username must be at least 5 characters." })
      .max(15, { message: "Username can't be longer than 15 characters." }),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email.")
      .max(300, { message: "Email can't be longer than 300 characters." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password must be at least 6 characters" }),
  })
  .superRefine((data, ctx) => {
    if (data.confirmPassword !== data.password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

// Define TypeScript type for form data
type FormSchemaType = z.infer<typeof formSchema>

const RegisterForm: React.FC = () => {
    const router = useRouter();
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await fetch('/api/auth/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.username,
                email: values.email,
                password: values.password
            })
        })

        const data = await response.json()

        if (response.ok) {
            router.push('/login')
            toast.success("Account created!");
        } else {
            console.log("Registration failed.")
            toast.error(data.error);
        }
    }

    return (
      <div className="w-full h-screen grid bg-primary">
        <div className="m-auto">
          <img src="/logo.png" alt="Logo" className="h-30 w-50 mb-10 mx-auto" />
          <form className="border pt-6 pb-8 pl-10 pr-10 bg-secondary rounded-[30px] shadow-md">
            <div className="flex flex-col gap-2">
              <div className="text">
                register
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
    );
}

export default RegisterForm
