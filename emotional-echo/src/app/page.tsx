export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center text-center bg-[#c5cde1] py-30 px-10 rounded-lg mx-10 mb-10">
        <h1 className="text-6xl font-bold">Welcome to Emotional Echo</h1>
        <p className="text-xl">
          Find a safe space to express your feelings and receive <br />
          personalized support for your mental well-being.
        </p>
        <div className="bg-[#5978ad] px-7 py-1 rounded-2xl text-[#ffffff] font-bold">
          Share Your Issue
        </div>
      </div>

      <div className="flex flex-col gap-10 m-10">
        <div className="text-4xl font-bold justify-center items-center text-center">
          Why Choose Emotional Echo?
        </div>

        <div className="grid grid-cols-3 gap-10 p-3">
          <div className="flex flex-col gap-5 justify-center items-center text-center border-1 border-[#8C8C8C] p-5 rounded-lg">
            <div>Image</div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Private & Secure</h2>
              <p>
                Your thoughts and feelings are held in strict confidence,
                ensuring a safe space for expression.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center text-center border-1 border-[#8C8C8C] p-5 rounded-lg">
            <div>Image</div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Personalized Insights</h2>
              <p>
                Receive tailored suggestions and reflections based on your
                unique emotional patterns.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center text-center border-1 border-[#8C8C8C] p-5 rounded-lg">
            <div>Image</div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Empathy-Driven Support</h2>
              <p>
                Our approach is built on understanding and compassion, guiding
                you towards well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
