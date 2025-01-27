import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
export default function LoginPage() {
  return (
   <>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div class="mt-2">
          <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>
      <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
      </div>
      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm/6 text-White ">
      Don't have an account ?
      <a href="#" class="font-semibold text-red-600 hover:text-indigo-500"> Sign </a>
    </p>
  </div>
  <div className="flex flex-col items-center mt-5">
      <div className="flex space-x-4">
      <button className="flex items-center gap-2 w px-8 py-2 rounded border-2 border-blue-600  text-white">
      <div className="flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
        <FaFacebookF />
        </div>
        </button>
        <button className="flex items-center gap-2 px-8 py-2 rounded border-2 border-blue-600  text-white">
        <div className="flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
        <FaGoogle />
      </div>
        </button>
        <button className="flex items-center gap-2 px-8 py-2 rounded border-2 border-blue-600  text-white">
        <div className="flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
        <FaTelegram />
        </div>
        </button>
      </div>
    </div>
</div>
   </>
  )
}
