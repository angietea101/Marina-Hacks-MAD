"use client"

import React from 'react'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from "sonner"

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
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await fetch('/api/auth/register', {
            method: "POST",
            body: JSON.stringify(values)
        })

        const data = await response.json()

        if (data.error) {
            toast.error(data.error);
        }

        toast.success("Account created!");
    }

    return (
        <div className="w-full max-w-xs">
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                {/* Username Field */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        {...form.register("username")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        {...form.register("email")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        {...form.register("password")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="confirmPassword"
                    >
                        Confirm Password
                    </label>
                    <input
                        {...form.register("confirmPassword")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <p className="text-red-500 text-xs italic">
                        {form.formState.errors.confirmPassword?.message}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
