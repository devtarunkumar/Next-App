"use client";

import React from "react";
import { useAppContext } from "../(context)/AppContext";
import Item from "../(components)/Item";

function Collection() {
    const { products } = useAppContext();

    const categories = [
        "Headphones",
        "Cameras",
        "Smartphones",
        "Smartwatches",
        "Mouse",
        "Speakers",
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* ================= LEFT SIDEBAR FILTER ================= */}
                <div className="lg:col-span-1 bg-white shadow-lg rounded-2xl p-6 border h-fit sticky top-28 space-y-10">

                    {/* Sort Filter */}
                    <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-3">
                            Sort by Price
                        </h5>

                        <select
                            className="w-full border rounded-xl px-3 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                        >
                            <option value="lowtohigh">Low to High</option>
                            <option value="hightolow">High to Low</option>
                            <option value="relevante">Relevant</option>
                        </select>
                    </div>

                    {/* Category Filter */}
                    <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-3">
                            Categories
                        </h5>

                        <div className="space-y-4">
                            {categories.map((cat, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-indigo-600 transition"
                                >
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 accent-indigo-600"
                                    />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ================= RIGHT SIDE PRODUCTS GRID ================= */}
                <div className="lg:col-span-3">
                    {products.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                            {products.map((product) => (
                                <Item key={product.id} product={product} />
                            ))}
                        </div>

                    ) : (
                        <p className="text-gray-500 text-lg mt-10">No products found.</p>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Collection;
