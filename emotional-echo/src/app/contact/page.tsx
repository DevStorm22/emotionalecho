export default function ContactPage() {
  return (
    <div className="flex flex-col text-center gap-10 items-center justify-center">
      <div className="flex flex-col gap-7">
        <h1 className="text-6xl font-bold">Get In Touch</h1>
        <h2 className="text-xl">
          We're here to listen and help. Feel free to reach out with any
          questions, feedback, or support needs.
        </h2>
      </div>

      <div className="flex flex-col border-1 border-[#ffffff] md:w-[70%] shadow-xl">
        <form
          className="flex flex-col text-start p-10"
          action="#"
          method="POST"
        >
          <label htmlFor="name" className="text-xl">
            Name:
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="border-2 border-gray-300 p-2 rounded-md"
            required
          />
          <br />
          <label htmlFor="email" className="text-xl">
            Email:
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            className="border-2 border-gray-300 p-2 rounded-md"
            required
          />
          <br />
          <label htmlFor="message" className="text-xl">
            Message:
          </label>
          <br />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message..."
            className="border-2 border-gray-300 p-2 rounded-md"
            rows={5}
            required
          ></textarea>
          <br />
          <button
            type="submit"
            className="bg-[#5978ad] px-7 py-2 rounded-mds text-[#ffffff] font-bold"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="flex flex-col border-1 py-10 gap-4 border-[#ffffff] md:w-[70%] shadow-xl">
        <h2 className="text-2xl font-bold">Contact With Us</h2>
        <div></div>
        <p className="text-lg">
          Your privacy is important to us. We never share your information
          without your explicit consent.
        </p>
      </div>
    </div>
  );
}
