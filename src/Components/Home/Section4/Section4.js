export default function InvestmentPhilosophy() {
  return (
    <section className="w-full bg-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="/assets/images/investment.png"
            alt=""
            className="w-[35rem] rounded-2xl"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Investment Philosophy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our core belief centers on delivering superior returns without
            compromising safety. We achieve this by identifying unique
            opportunities across asset classes, market sizes, and global
            geographies. Guided by principles of value investing, we target
            companies with strong fundamentals, competitive advantages, and
            growth potential, enabling us to uncover and capitalize on
            often-overlooked investment opportunities. With a keen eye on
            emerging markets and special situations, we aim to generate returns
            that outpace the broader market while preserving capital and
            enhancing financial security for our clients.
          </p>
        </div>
      </div>
    </section>
  );
}
