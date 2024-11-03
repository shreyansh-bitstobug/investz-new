"use client";

import { useState } from "react";
import Image from "next/image";

export default function Component() {
  const [activeTab, setActiveTab] = useState("Stock Prediction");

  const tabs = [
    {
      id: "Stock Prediction",
      title: "Stock Prediction",
      url: "/assets/images/stockprediction.png",
      heading: "Harness the Power of Data-Driven Insights",
      content:
        "Empower your investments with our advanced stock prediction tools. Leveraging sophisticated algorithms and historical data, we provide accurate forecasts on stock trends, enabling you to make informed decisions and seize opportunities while mitigating risks effectively.",
    },
    {
      id: "Global News",
      title: "Global News",
      url: "/assets/images/news.png",
      heading: "Stay Informed and Ahead of Market Movements",
      content:
        "Navigate the financial landscape with our Global News Dashboard, offering real-time news updates and sentiment analysis. Understand the potential impact of global events on your investments, allowing you to adjust your strategies proactively and stay ahead of market shifts.",
    },
    {
      id: "Portfolio Tracking",
      title: "Portfolio Tracking",
      url: "/assets/images/portfolio_tracking.png",
      heading: "Optimize Your Investment Strategy",
      content:
        "Manage and optimize your investments effortlessly with our Portfolio Tracking solution. Gain a clear view of your holdings, monitor performance in real time, and receive customized insights tailored to your financial objectives. Our intuitive interface empowers you to analyze trends and make data-driven adjustments to enhance your portfolio's growth potential.",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-16 px-4" id="solutions">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-purple-400 font-medium mb-4">SOLUTIONS</h2>
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
            One platform endless solutions
          </h1>
        </div>

        <div className="flex justify-center mb-8">
          <div className="border-b border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#1C1F26] to-[#2A2F3B]">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`transition-opacity duration-300 ${
                activeTab === tab.id ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="relative h-120">
                  <img src={tab.url} alt="" className="h-full" />
                </div>
                <div className="text-white space-y-4 p-12">
                  <h3 className="text-2xl font-bold">{tab.heading}</h3>
                  <p className="text-gray-400">{tab.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
