import { getPortfolios } from "@/utils";
import Link from "next/link";

export function PortfolioList() {
  const portfolios = getPortfolios();
  return (
    <div className="mb-14">
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {portfolios.map((portfolio) => (
          <div
            key={portfolio.id}
            data-tip
            data-for={`course-${portfolio.slug}`}
            className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
          >
            <div className="bg-gray-200 group-hover:opacity-75 sm:aspect-none">
              <img
                src={portfolio.coverImage}
                alt={portfolio.title}
                className="w-full h-full object-center object-cover sm:w-full sm:h-full"
              />
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
              <h3 className="text-sm font-medium text-gray-900">
                <Link href={`/courses/${portfolio.slug}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {portfolio.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-500">{portfolio.description}</p>
              <div className="flex-1 flex flex-col justify-end">
                <a
                  target="_"
                  href="/"
                  className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  See Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
