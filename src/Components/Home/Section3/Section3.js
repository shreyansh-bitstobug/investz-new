export default function AboutSection() {
  const stocks = [
    {
      symbol: "AAPL",
      name: "Apple",
      price: "191.81",
      change: "+0.48",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      symbol: "MSFT",
      name: "Microsoft",
      price: "341.27",
      change: "+3.12",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      symbol: "AVGO",
      name: "Broadcom Inc.",
      price: "848.00",
      change: "-13.86",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      symbol: "SHOP",
      name: "Shopify",
      price: "115.45",
      change: "-2.30",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <section className="w-full bg-gray-900 py-16 px-4 md:px-8" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <p className="mb-4 text-sm font-medium tracking-wider text-purple-300">
            ABOUT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At InvestZ, we&aposre more than portfolio managers. We&aposre pioneers of a
            disciplined, value-driven approach, blending artificial intelligence
            with deep human insight. Founded by a team of experienced investors
            and financial strategists, we empower our clients with actionable
            insights, robust investment strategies, and the peace of mind that
            their wealth is in the hands of seasoned experts. We specialize in
            PMS, Alternative Investment Funds (AIFs), and tailored stock
            advisory services, catering to clients who seek both security and
            sustainable growth in their investments.
          </p>
        </div>

        <div className="relative">
          <img src="/assets/images/about.png" alt="" className="w-[35rem] rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
