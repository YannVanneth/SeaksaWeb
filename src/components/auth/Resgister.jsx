import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-center bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="A scenic background"
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="/">
                <span className="sr-only">Home</span>
              </a>
              <img
                src="../src/assets/logo.png"
                className="mr-3 h-16 sm:h-9"
                alt="SeakSa Logo"
              />
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to SeakSa 🦑
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  href="/">
                  <span className="sr-only">Home</span>
                  <img
                    src="../src/assets/logo.png"
                    className="h-8 sm:h-10"
                    alt="SeakSa Logo"
                  />
                </a>
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to SeakSa 🦑
                </h1>
                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>

              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  {" "}
                  {/* Please Conplete your infomation */}
                </h2>
                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="password_confirmation"
                      className="block text-sm font-medium text-gray-700">
                      Password Confirmation
                    </label>
                    <input
                      type="password"
                      id="password_confirmation"
                      name="password_confirmation"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="marketing_accept" className="flex gap-4">
                      <input
                        type="checkbox"
                        id="marketing_accept"
                        name="marketing_accept"
                        className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                      />
                      <span className="text-sm text-gray-700">
                        I want to receive emails about events, product updates,
                        and company announcements.
                      </span>
                    </label>
                  </div>

                  <div className="col-span-6 m-auto sm:items-center sm:gap-4">
                    <button className="inline-block shrink-0 rounded-md border mb-4 border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                      Create an account
                    </button>
                    <p className=" text-sm text-gray-500 sm:mt-0">
                      Already have an account?
                      <Link to="/login">
                        <a href="#" className="text-gray-700 underline">
                          Log in
                        </a>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <button className="inline-flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook"
                    className="h-5 w-5 mr-2"
                  />
                  Facebook
                </button>
                <button className="inline-flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                  <FaGoogle className="h-5 w-5 mr-2 text-blue-600" />
                  Google
                </button>
                <button className="inline-flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                  <FaApple className="h-5 w-5 mr-2 text-blue-600" />
                  Apple
                </button>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
