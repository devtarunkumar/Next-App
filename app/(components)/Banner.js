import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <section className="max-padd-container mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10">

        {/* Banner 1 */}
        <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <Image
            src="/banner-1.jpg"
            alt="banner"
            width={700}
            height={500}
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-all duration-700"
          />

          {/* Gradient + Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-2xl"></div>

          <p className="absolute bottom-4 left-4 text-white text-lg font-semibold tracking-wide drop-shadow-md">
            New Arrivals 2025
          </p>
        </div>

        {/* Banner 2 */}
        <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <Image
            src="/banner-2.jpg"
            alt="banner"
            width={700}
            height={500}
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-2xl"></div>

          <p className="absolute bottom-4 left-4 text-white text-lg font-semibold tracking-wide drop-shadow-md">
            Exclusive Deals
          </p>
        </div>

      </div>
    </section>
  );
}

export default Banner;
