export default function AboutPage() {
  return (
    <div className="flex flex-col gap-30 items-center justify-center text-center p-40">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Our Mission</h1>
        <p>
          At Emotional Echo, our mission is to empower individuals to explore
          <br />
          and articulate their inner experiences in a supportive, private, and
          <br />
          empathetic environment. We believe that giving voice to one's thoughts
          <br />
          and feelings is the first step towards healing and self-discovery. Our
          <br />
          platform connects you with personalized insights and tools, fostering
          <br />
          resilience and a deeper understanding of your emotional landscape.
          <br />
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col gap-2 items-center border-1 border-[#000000] p-5">
            <div></div>
            <h2>Kaushik Musale</h2>
            <p>Team Lead - Backend and Database</p>
          </div>

          <div className="flex flex-col gap-2 items-center border-1 border-[#000000] p-5">
            <div></div>
            <h2>Raseela K.K.</h2>
            <p>API Manager</p>
            <p></p>
          </div>

          <div className="flex flex-col gap-2 items-center border-1 border-[#000000] p-5">
            <div></div>
            <h2>Muskan Pagarkar</h2>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Our Values</h1>
        <div className="grid grid-cols-3 gap-5 text-start">
          <div className="flex flex-col flex-wrap gap-2 border-1 border-[#000000] p-5">
            <h2 className="text-xl font-bold">Empathy & Understanding</h2>
            <p>
              We are committed to creating a space where every voice is heard
              and understood without judgment, fostering genuine connection and
              support.
            </p>
          </div>

          <div className="flex flex-col flex-wrap gap-2 border-1 border-[#000000] p-5">
            <h2 className="text-xl font-bold">Privacy & Security</h2>
            <p>
              Your trust is paramount. We safeguard your personal information
              with the highest standards of data protection and confidentiality.
            </p>
          </div>

          <div className="flex flex-col flex-wrap gap-2 border-1 border-[#000000] p-5">
            <h2 className="text-xl font-bold">Accessibility for All</h2>
            <p>
              Mental well-being support should be available to everyone. We
              strive to make Emotional Echo inclusive and easy to use,
              regardless of background or ability.
            </p>
          </div>

          <div className="flex flex-col flex-wrap gap-2 border-1 border-[#000000] p-5">
            <h2 className="text-xl font-bold">Growth & Empowerment</h2>
            <p>
              We believe in the potential within each individual to overcome
              challenges. Our platform is designed to guide you towards personal
              growth and self-empowerment.
            </p>
          </div>

          <div className="flex flex-col flex-wrap gap-2 border-1 border-[#000000] p-5">
            <h2 className="text-xl font-bold">Continuous Improvement</h2>
            <p>
              We are dedicated to evolving our services based on scientific
              research, user feedback, and the latest advancements in mental
              health care.
            </p>
          </div>

          <div className="flex flex-col flex-wrap gap-2 border-1 border-[#000000] p-5">
            <h2 className="text-xl font-bold">Community & Connection</h2>
            <p>
              While focusing on individual well-being, we also aim to foster a
              sense of shared experience, reminding you that you are not alone
              on your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
