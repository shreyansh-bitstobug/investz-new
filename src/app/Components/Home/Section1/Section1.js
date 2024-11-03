export default function Section1() {
  return (
    <section className="relative h-auto w-full overflow-hidden bg-gradient-to-t from-gray-900 to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-600/40 via-transparent to-transparent" />
      <div className="container relative mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
        <p className="mb-4 text-sm font-medium tracking-wider text-purple-300">
          INVESTZ FINANCE
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Build Wealth,
          <br />
          Create a Legacy
        </h1>
        <p className="mb-8 max-w-2xl text-gray-300">
          Welcome to InvestZ, your trusted partner in wealth management, where
          expertise and innovation unite to deliver exceptional, risk-adjusted
          returns for high-net-worth individuals, institutions, and family
          offices worldwide.
        </p>
        <button className="rounded-full bg-white/10 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900">
          Start Now
        </button>
      </div>

      <div className="container mx-auto my-[4rem] flex flex-col items-center text-center px-4">
        <p className="text-sm font-medium tracking-wider text-purple-300">
          OUR CLIENTS
        </p>
        <div className="flex flex-wrap justify-center gap-[6rem] mt-[2rem]">
          <img src="/assets/images/fundrock.png" alt="" className="h-[2rem]" />
          <img src="/assets/images/5paisa.png" alt="" className="h-[2rem]" />
          <img src="/assets/images/navis.png" alt="" className="h-[2rem]" />
          <img src="/assets/images/prospira.png" alt="" className="h-[2rem]" />
        </div>
      </div>
    </section>
  );
}
