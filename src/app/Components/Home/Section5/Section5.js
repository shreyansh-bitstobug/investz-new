export default function InvestmentPhilosophy() {
  return (
    <section className="w-full bg-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Clients
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We proudly serve a diverse clientele, including Foreign Portfolio
            Investors (FPIs), institutions, ultra-high-net-worth individuals
            (UHNWIs), and entrepreneurs who require a minimum investment of USD
            100K. Our clients trust us to provide strategic insight and
            performance, whether they’re seeking long-term growth, income
            generation, or unique investment opportunities in rapidly evolving
            markets. We partner with those who demand not only wealth growth but
            also wealth preservation.
          </p>
        </div>
        <div className="relative">
          <img
            src="/assets/images/client.png"
            alt=""
            className="w-[35rem] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
