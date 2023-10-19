import Link from "next/link";

export function Hero({count}) {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-25 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Portfolio</span>{" "}
              <span className="block text-indigo-600 xl:inline">
                Filip Jerga
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Feel free to check my work. I have written many blogs and work on
              projects.
            </p>
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap justify-center lg:justify-start">
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Portfolios
                  </dt>
                  <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                    {count.portfolios}
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Blogs
                  </dt>
                  <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                    {count.blogs}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  href="/portfolios"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Check Portoflios
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                {/* Second Button */}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/cover.png"
            alt=""
          />
          <img
            className="absolute w-52 left-96 -top-14 inset-0 object-cover"
            src="https://thrangra.sirv.com/cl.png"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
