import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import register from "../../api/auth/AuthAction.js";

export default function App() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "johndoe@example.com",
    password: "securePassword123",
    confirmpassword: "securePassword123",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
    marketing_accept: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Registering user with values: ", values); // Process form data
    const RegisterData = await register(values); // Call API with values directly
    console.log("Register Data: ", RegisterData);
    resetForm(); // Clear the form after submission
  };

  return (
    <>
      <section className="bg-white">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {() => (
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
                  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    Please Complete your information
                  </h2>
                  <Form className="mt-8 grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="firstname"
                        className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <Field
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                      <ErrorMessage
                        name="firstname"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <Field
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                      <ErrorMessage
                        name="lastname"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="password_confirmation"
                        className="block text-sm font-medium text-gray-700">
                        Password Confirmation
                      </label>
                      <Field
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                      <ErrorMessage
                        name="confirmpassword"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                    <div className="col-span-6">
                      <ErrorMessage
                        name="marketing_accept"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <div className="col-span-6 m-auto sm:items-center sm:gap-4">
                      <button
                        type="submit"
                        className="inline-block shrink-0 rounded-md border mb-4 border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                        Create an account
                      </button>
                      <p className="text-sm text-gray-500 sm:mt-0">
                        Already have an account?
                        <Link to="/login" className="text-gray-700 underline">
                          Log in
                        </Link>
                      </p>
                    </div>
                  </Form>
                </div>
              </main>
            </div>
          )}
        </Formik>
      </section>
    </>
  );
}
