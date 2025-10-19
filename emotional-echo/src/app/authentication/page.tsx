"use client";
import { useState } from "react";
export default function LogInRegisterPage() {
  const [auth, setAuth] = useState("login");
  const handleAuthChange = (type: string) => {
    setAuth(type);
  };
  const handleAuthForm = () => {
    if (auth === "login") {
      return (
        <form action="#" method="POST" className="flex flex-col text-start">
          <label htmlFor="email" className="text-xl">
            Email:
          </label>
          <br />
          <input
            type="email"
            className="border-2 border-[#7a8ee1] p-3 rounded-md"
            placeholder="your@email.com"
            required
          />
          <br />
          <label htmlFor="password" className="text-xl">
            Password:
          </label>
          <br />
          <input
            type="password"
            className="border-2 border-[#7a8ee1] p-3 rounded-md"
            placeholder="Your Password..."
            required
          />
          <br />
          <button
            type="submit"
            className="bg-[#7a8ee1] px-7 py-2 rounded-mds text-[#ffffff] font-bold"
          >
            Submit
          </button>
        </form>
      );
    }
    if (auth === "register") {
      return (
        <form action="#" method="POST" className="flex flex-col text-start">
          <label htmlFor="username" className="text-xl">
            Username:
          </label>
          <br />
          <input
            type="text"
            className="border-2 border-[#7a8ee1] p-3 rounded-md"
            placeholder="your_username"
            required
          />
          <br />
          <label htmlFor="email" className="text-xl">
            Phone Number:
          </label>
          <br />
          <input
            type="tel"
            className="border-2 border-[#7a8ee1] p-3 rounded-md"
            placeholder="your_phone_number"
            pattern="[0-9]{10}"
            required
          />
          <br />
          <label htmlFor="email" className="text-xl">
            Email:
          </label>
          <br />
          <input
            type="email"
            className="border-2 border-[#7a8ee1] p-3 rounded-md"
            placeholder="your@email.com"
            required
          />
          <br />
          <label htmlFor="password" className="text-xl">
            Password:
          </label>
          <br />
          <input
            type="password"
            className="border-2 border-[#7a8ee1] p-3 rounded-md"
            placeholder="Your Password..."
            required
          />
          <br />
          <button
            type="submit"
            className="bg-[#7a8ee1] px-7 py-2 rounded-mds text-[#ffffff] font-bold"
          >
            Submit
          </button>
        </form>
      );
    }
  };

  return (
    <div className="flex flex-col text-center gap-10 p-20 items-center justify-center">
      <div className="flex flex-col gap-7 border-1 border-[#ffffff] p-10 md:w-[50%] shadow-xl">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold">Welcome to Emotional Echo</h1>
          <h2 className="text-xl">
            Your space for mindful expression and personalized support.
          </h2>
        </div>

        <div className="flex flex-row gap-1 align-middle justify-center text-2xl font-medium">
          <div
            className="flex flex-col gap-3 bg-[#7a8ee1] p-4 w-[50%] text-[#ffffff] shadow-md pointer-cursor"
            onClick={() => handleAuthChange("login")}
          >
            Log In
          </div>
          <div
            className="flex flex-col gap-3 bg-[#7a8ee1] p-4 w-[50%] text-[#ffffff] shadow-md pointer-cursor"
            onClick={() => handleAuthChange("register")}
          >
            Create Account
          </div>
        </div>

        <div>{handleAuthForm()}</div>
        <p>
          By continuing, you agree to our{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline hover:text-red-600"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline hover:text-red-600"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
