export default function Section2() {
  const features = [
    {
      title: "Portfolio Management Services",
      description:
        "Our PMS provides a personalized and professionally managed investment portfolio, designed with your financial objectives in mind.",
      imageSrc: "/assets/images/pms.png",
    },
    {
      title: "Alternative Investment Funds",
      description:
        "InvestZ AIFs deliver exclusive access to opportunities in emerging sectors, special situations, and unique asset classes that maximize returns while managing risk effectively.",
      imageSrc: "/assets/images/aif.png",
    },
    {
      title: "Stock Advisory Services",
      description:
        "For those seeking to make informed, tactical moves in the stock market, our advisory services provide detailed, research-backed recommendations that align with your investment strategy.",
      imageSrc: "/assets/images/sas.png",
    },
  ];

  return (
    <section className="w-full bg-gray-900 py-16 text-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="mb-4 text-sm font-medium tracking-wider text-purple-300">
            FEATURES
          </p>
          <h3 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
            Powerful features just for you
          </h3>
        </div>

        <div className="flex flex-row gap-8 mx-20">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg overflow-hidden w-1/3">
              <div className="p-6 space-y-6">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="w-[20rem] rounded-2xl"
                />
                <h4 className="text-xl font-semibold">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
