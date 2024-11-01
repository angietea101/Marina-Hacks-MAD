"use client"

import React from 'react'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'


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
        <div className={"w-full h-screen grid bg-primary"}>
            <div className="m-auto">
                <img src="/logo.png" alt="logo" className="h-30 w-50 mb-10 mx-auto" />
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="bg-secondary shadow-md rounded-[30px] px-10 pt-6 pb-8 mb-4 w-[500px]" // Adjusted width
                >
                    {/* Username Field */}
                    <div className="mb-4">
                        <label
                            className="block text-white text-base font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            {...form.register("username")}
                            className="shadow appearance-none border rounded-full w-full h-[50px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Increased height
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                        <p className="text-red-500 text-xs italic">
                            {form.formState.errors.username?.message}
                        </p>
                    </div>
    
                    {/* Email Field */}
                    <div className="mb-4">
                        <label
                            className="block text-white text-base font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            {...form.register("email")}
                            className="shadow appearance-none border rounded-full w-full h-[50px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Increased height
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                        <p className="text-red-500 text-xs italic">
                            {form.formState.errors.email?.message}
                        </p>
                    </div>
    
                    {/* Password Field */}
                    <div className="mb-4">
                        <label
                            className="block text-white text-base font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            {...form.register("password")}
                            className="shadow appearance-none border rounded-full w-full h-[50px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Increased height
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                        <p className="text-red-500 text-xs italic">
                            {form.formState.errors.password?.message}
                        </p>
                    </div>
    
                    {/* Confirm Password Field */}
                    <div className="mb-6">
                        <label
                            className="block text-white text-base font-bold mb-2"
                            htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </label>
                        <input
                            {...form.register("confirmPassword")}
                            className="shadow appearance-none border rounded-full w-full h-[50px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Increased height
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                        />
                        <p className="text-red-500 text-xs italic">
                            {form.formState.errors.confirmPassword?.message}
                        </p>
                    </div>
    
                    <div className="flex items-center justify-center mt-6">
                        <button
                            className="w-[160px] h-[50px] cursor-pointer bg-primary rounded-[50px] p-1 hover:shadow-md font-sans text-lg text-secondary text-[24px]" // Adjusted button size
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );    
}

export default RegisterForm
