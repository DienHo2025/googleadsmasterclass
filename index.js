import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Google Ads Masterclass</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Learn how to run high-performing Google Ads campaigns from start to finish. Perfect for digital marketers, freelancers, and business owners.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm w-full sm:w-80"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <p className="text-green-600 text-xl font-medium">Thanks! We'll be in touch soon.</p>
        )}
      </div>

      <div className="mt-16 max-w-3xl mx-auto grid gap-10">
        <section>
          <h2 className="text-2xl font-semibold mb-2">What You’ll Learn</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Campaign setup & structure</li>
            <li>Performance Max & Shopping Ads</li>
            <li>Advanced targeting & bidding strategies</li>
            <li>Real-world case studies & optimization tips</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Who It’s For</h2>
          <p className="text-gray-700">Marketers, freelancers, and business owners looking to scale with Google Ads.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">About the Instructor</h2>
          <p className="text-gray-700">
            Diện is a Google Ads strategist who has helped 50+ brands grow through performance marketing. This masterclass is built on real agency experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">FAQs</h2>
          <p className="text-gray-700">
            This is a self-paced course with lifetime access. You’ll get templates, tools, and direct support.
          </p>
        </section>
      </div>
    </div>
  );
}
