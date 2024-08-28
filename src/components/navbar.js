"use client";

import Image from 'next/image';
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import useRouter only on the client-side
const useRouter = dynamic(() => import("next/router").then(mod => mod.useRouter), { ssr: false });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter ? useRouter() : null; // Use router only if it's available

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (href) => {
    return router?.pathname === href;
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Image
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive("/") ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  Beranda
                </Link>
                <Link
                  href="/terbaru"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive("/terbaru") ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  Terbaru
                </Link>
                <Link
                  href="/hiburan"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive("/hiburan") ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  Hiburan
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Gaya Hidup
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Olahraga
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Nasional
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Internasional
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Ekonomi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive("/") ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            Beranda
          </Link>
          <Link
            href="/terbaru"
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive("/terbaru") ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            Terbaru
          </Link>
          <Link
            href="/hiburan"
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive("/hiburan") ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            Hiburan
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Gaya Hidup
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Olahraga
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Nasional
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Internasional
          </Link>
          <Link
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Ekonomi
          </Link>
        </div>
      </div>
    </nav>
  );
}
