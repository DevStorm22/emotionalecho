export default function LogInRegisterPage() {
  return (
    <div className="flex flex-col text-center gap-10 p-20 items-center justify-center">
      <div className="flex flex-col gap-7 border-1 border-[#ffffff] p-10 md:w-[50%] shadow-xl">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold">Welcome to Emotional Echo</h1>
          <h2 className="text-xl">
            Your space for mindful expression and personalized support.
          </h2>
        </div>

        <div className="flex flex-row gap-0 align-middle justify-center text-2xl font-medium">
          <div className="flex flex-col gap-3 bg-[#7a8ee1] p-4 w-[50%] text-[#ffffff] shadow-md">
            Login
          </div>
          <div className="flex flex-col gap-3 bg-[#7a8ee1] p-4 w-[50%] text-[#ffffff] shadow-md">
            Create Account
          </div>
        </div>
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
