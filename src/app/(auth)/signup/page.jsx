"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  sendEmailVerification,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/config";

const google = new GoogleAuthProvider();

const SignupPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const { email, password } = formData;
    setLoading(true);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        console.log({ userCred });
        sendEmailVerification(auth.currentUser).then(() =>
          alert("Email Verification link sent")
        );
        sessionStorage.setItem("user", true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log({ error });
      });
  };

  const signInWithGoogle = async (e) => {
    signInWithPopup(auth, google).then((result) => {
      let credentials = GoogleAuthProvider.credentialFromResult(result);
      const token = credentials.accessToken;
      const user = result.user;
      console.log({ credentials, token, user });
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-4">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 bg-gray-700"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-4"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 bg-gray-700"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            {loading ? (
              <div className="p-2 rounded-full animate-spin border border-white" />
            ) : (
              "Sign Up"
            )}
          </button>
          <div className="flex mt-4 w-full items-center justify-center dark:bg-gray-800">
            <button
              type="button"
              onClick={signInWithGoogle}
              className="w-full justify-center px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
            >
              <Image
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
                width={24}
                height={24}
              />
              <span>Login with Google</span>
            </button>
          </div>
        </form>
        <div className="mt-4">
          <span className="text-gray-400 text-sm">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-400 hover:underline ml-2">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
