"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    country: "",
    message: "",
    agreeTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className="bg-gray-900 text-white py-16 px-4 min-h-screen flex items-center"
      id="contact"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-8">
          <h2 className="text-purple-400 font-medium mb-2">CONTACT</h2>
          <h1 className="text-4xl font-bold mb-4">CONNECT WITH US</h1>
          <p className="text-gray-300 max-w-2xl">
            Have questions or need assistance? We&aposre here to help! Reach out to
            us for inquiries, support, or to discuss how we can assist you in
            achieving your financial goals. Fill out the form below, and our
            team will get back to you promptly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-1"
              >
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
                className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter subject"
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium mb-1"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter Country Name"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={8}
                className="w-full bg-transparent border-gray-700 border-[1px] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, agreeTerms: e.target.checked })
                  }
                  className="mr-2 rounded text-purple-500 focus:ring-purple-500"
                />
                <label htmlFor="agreeTerms" className="text-sm text-gray-300">
                  I agree with the{" "}
                  <a href="#" className="text-purple-400 hover:underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-400 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="bg-transparent text-white px-6 py-2  border-white border rounded-full transition duration-300"
              >
                Send Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
