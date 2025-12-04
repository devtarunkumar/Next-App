"use client";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full mt-10 bg-gradient-to-b from-white to-gray-50 border-t pt-14 pb-8">
      <div className="w-[95%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

        {/* LEFT SECTION */}
        <div className="space-y-5">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-bold text-indigo-600">
              Electr<span className="text-black">o</span>
            </span>
          </Link>

          <p className="text-sm text-gray-600 leading-6">
            Electro brings you the latest and greatest electronics with
            premium quality, fast delivery, and unbeatable deals. Your trusted
            tech partner since 2025.
          </p>

          <div className="flex gap-3 pt-2">
            {/* SOCIAL ICONS */}
            {[ "facebook", "twitter", "instagram", "linkedin" ].map((s, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-indigo-600 hover:text-white transition cursor-pointer"
              >
                <i className={`ri-${s}-line text-lg`}></i>
              </div>
            ))}
          </div>
        </div>

        {/* COMPANY LINKS */}
        <div className="space-y-3 lg:pl-10">
          <h2 className="font-semibold text-gray-900 text-lg mb-3">
            Company
          </h2>

          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-indigo-600 transition" href="#">
                About us
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <Link className="hover:text-indigo-600 transition" href="#">
                Careers
              </Link>
              <span className="text-xs bg-indigo-600 text-white px-2 py-[2px] rounded-md">
                We’re hiring!
              </span>
            </li>

            <li>
              <Link className="hover:text-indigo-600 transition" href="#">
                Contact us
              </Link>
            </li>

            <li>
              <Link className="hover:text-indigo-600 transition" href="#">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="space-y-5">
          <h2 className="font-semibold text-gray-900 text-lg">
            Stay Updated
          </h2>

          <p className="text-sm text-gray-600 leading-6">
            Get weekly updates on new arrivals, offers and product launches.
          </p>

          <div className="flex items-center gap-2 bg-indigo-50 p-2 rounded-xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white w-full py-2 px-3 rounded-lg outline-none text-sm focus:ring-2 ring-indigo-600"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="text-center text-sm mt-10 border-t pt-5 text-gray-600">
        © 2025 Electro. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
