'use client'
import { Disclosure } from "@headlessui/react";
import MenuIcon from "@heroicons/react/24/outline/Bars3Icon";
import Link from "next/link";

export function Navigation() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 lg:divide-y lg:divide-gray-200">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <div className="font-extrabold">
                    <Link href={"/"}>
                      Home
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <Link
                    className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    href="/portfolios"
                  >
                    Portfolios
                  </Link>
                  <Link
                    className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    href="/blogs"
                  >
                    Blogs
                  </Link>
                  <Link
                    className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    href="/todos"
                  >
                    Todos
                  </Link>
                  <Link
                    className="border-transparent text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    href="/summary"
                  >
                    About Us
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs relative">
                  {/* <SearchContainer /> */}
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <Link
                  className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-600 border-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  href="https://academy.eincode.com"
                >
                  Login
                </Link>
                <div className="hover:cursor-pointer ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Register
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as="div"
                className="hover:cursor-pointer block text-base font-medium hover:bg-gray-100"
              >
                <Link
                  className="block px-4 py-2 text-gray-500 hover:text-gray-800"
                  href="/courses"
                >
                  Courses
                </Link>
              </Disclosure.Button>
              <Disclosure.Button
                as="div"
                className="hover:cursor-pointer block text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                <Link href="/blogs">
                  <a className="block px-4 py-2">Blogs</a>
                </Link>
              </Disclosure.Button>
              <Disclosure.Button
                as="div"
                className="hover:cursor-pointer block text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                <Link className="block px-4 py-2" href="/about">
                  About Us
                </Link>
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="space-y-1">
                <Disclosure.Button
                  as="a"
                  target="_"
                  href="https://academy.eincode.com"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Login
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  className="hover:cursor-pointer block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  <div
                    onClick={() =>
                      ml_webform_2178782 && ml_webform_2178782("show")
                    }
                  >
                    Register
                  </div>
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
