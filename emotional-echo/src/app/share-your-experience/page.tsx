export default function ShareYourExperiencePage() {
  return (
    <div className="flex flex-col justify-center items-center p-10 bg-[#c5cde1] rounded-lg m-10">
      <h1 className="text-4xl font-bold">Share Your Experience</h1>
      <div className="flex flex-col gap-5 mt-15 w-[70%]">
        <h2 className="text-2xl font-semibold">How are you feeling today?</h2>
        <form action="#" method="POST" className="flex flex-col gap-5">
          <textarea
            className="border-2 border-[#7a8ee1] p-5 rounded-md h-60"
            placeholder="Describe your feelings and experiences here..."
          ></textarea>
          <button
            type="submit"
            className="bg-[#7a8ee1] px-7 py-2 rounded-md text-[#ffffff] font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
