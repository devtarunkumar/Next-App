import React from "react";

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-gray-800"
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

const testimonials = [
  {
    date: "12 Jan 2025",
    message:
      "Super clean and easy to use. These Tailwind + React components saved me hours!",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Richard Nelson",
  },
  {
    date: "15 Mar 2025",
    message:
      "The design quality is top-notch. Perfect balance between simplicity and style!",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Sophia Martinez",
  },
  {
    date: "20 Apr 2025",
    message:
      "Very smooth, elegant and clean. Loved how easy it is to customize everything.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    name: "Michael Carter",
  },
];

export default function Example() {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6">

      {/* ====== HEADER ====== */}
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900">
          <span className="text-black">People</span>{" "}
          <span className="text-orange-500">Says</span>
        </h2>
        <p className="mt-2 text-gray-600 text-base sm:text-lg">
          Hear what our happy customers have to say about our products. <br />
          Discover how our electronics make their lives easier and more enjoyable.
        </p>
      </div>


      {/* ====== TESTIMONIALS GRID ====== */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="w-full space-y-4 rounded-md border border-gray-200 bg-white p-4 text-gray-600 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-500">{t.date}</p>
            </div>

            <p>“{t.message}”</p>

            <div className="flex items-center gap-2 pt-3">
              <img src={t.img} className="w-8 h-8 rounded-full" alt={t.name} />
              <p className="font-medium text-gray-800">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
