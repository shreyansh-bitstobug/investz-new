"use client";

import { useState } from "react";
import { Twitter, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-8">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">InvestZ</h2>
            </div>
            <div>
              <div className="text-gray-400 space-y-2">
                <p>+91 7838086921</p>
                <p>nishant@investz.in</p>
              </div>
              <div className="flex pt-4 gap-4">
                <a
                  href="#twitter"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#facebook"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#linkedin"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigate</h3>
            <nav className="space-y-3">
              <a
                href="#features"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#solutions"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Solutions
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address..."
                className="flex-1 px-4 py-2 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white font-medium hover:bg-gray-800 transition-colors rounded-sm"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-800">
          <p>
            Copyright © 2024 InvestZ. Designed by{" "}
            <a
              href="https://bitstobug.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              BitsToBug
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
