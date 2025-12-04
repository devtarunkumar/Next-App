"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, Search, User } from "lucide-react";
import { categories } from "@/public/data";
import { Button } from "@/components/ui/button";

function Header() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <header className="w-full bg-white sticky top-0 z-50 flex justify-center py-2">
      <div className="w-[95%] max-w-7xl bg-white shadow-md border rounded-full px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            Electr<span className="text-black">o</span>
          </Link>

          {/* SEARCH BAR */}
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-[6px] w-[420px] max-lg:hidden">

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent outline-none text-sm"
            />

            {/* LEFT DIVIDER */}
            <div className="h-5 w-[1px] bg-gray-300 mx-2"></div>

            {/* CATEGORIES DROPDOWN */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium outline-none">
                {selectedCategory || "Categories"}
                <ChevronDownIcon size={16} />
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categories.map((cat, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    {cat.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* RIGHT DIVIDER */}
            <div className="h-5 w-[1px] bg-gray-300 mx-2"></div>

            <Search size={18} strokeWidth={2.5} className="cursor-pointer" />
          </div>

          {/* CART + LOGIN */}
          <div className="flex items-center gap-4">

            {/* CART BOX */}
            <div className="relative cursor-pointer font-medium border px-3 py-1.5 rounded-full hover:bg-gray-50 transition">
              Cart
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-1.5 py-[1px] rounded-full">
                0
              </span>
            </div>

            {/* LOGIN BUTTON */}
            <Button className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
              <User size={16} />
              Login
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
