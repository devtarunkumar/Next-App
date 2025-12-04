"use client"

import React, { useState } from 'react'
import { useAppContext } from '../(context)/AppContext'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import ProductDetails from './ProductDetails'

function Item({ product }) {
  const { currency } = useAppContext()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="
        overflow-hidden relative rounded-xl
        bg-white dark:bg-neutral-900
        border border-transparent
        hover:border-gray-300 dark:hover:border-neutral-700
        shadow-sm hover:shadow-lg
        transition-all duration-300
      "
    >
      {/* IMAGE SECTION */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="
          relative bg-[#f5f5f5] dark:bg-neutral-800
          flex items-center justify-center
          p-3 h-[250px] sm:h-[270px] md:h-[290px]
          overflow-hidden w-max-full
          group cursor-pointer
        "
      >
        <Image
          src={
            product.images.length > 1 && hovered
              ? product.images[1]
              : product.images[0]
          }
          height={500}
          width={500}
          alt={product.name || "product image"}
          className="
            object-contain
            transition-all duration-500
            ease-out
            group-hover:scale-105
          "
          unoptimized={true}
        />

        {/* Floating Add Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="sm"
              className="
                absolute bottom-3 right-3
                h-9 w-9 rounded-full p-0
                bg-black/80 text-white
                hover:bg-black
                shadow-md
                transition-all duration-300
                hover:scale-110
              "
            >
              <Plus size={18} />
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-xl rounded-xl">
            <DialogHeader>
              <DialogTitle className="font-semibold text-xl">
                {product.name}
              </DialogTitle>
            </DialogHeader>

            {/* PRODUCT INFO INSIDE MODAL */}
            <ProductDetails product={product} />
          </DialogContent>
        </Dialog>
      </div>

      {/* INFO SECTION */}
      <div className="p-3">
        <h5 className="text-base font-semibold line-clamp-1">
          {product.name}
        </h5>

        {/* ---------- PRICE + CATEGORY ---------- */}
        <div className="flex justify-between items-center pt-1 flex-wrap gap-1">
          <p className="font-medium text-sm opacity-80 truncate">
            {product.category[0]}
          </p>

          <div className="flex items-center gap-1 flex-shrink-0">
            {/* Original Price */}
            <span
              className={`text-sm ${product.offerPrice ? "line-through opacity-60" : "font-semibold"
                } truncate`}
            >
              {currency}{product.price}
            </span>

            {/* Offer Price */}
            {product.offerPrice && (
              <span className="text-green-600 font-bold text-sm truncate">
                {currency}{product.offerPrice}
              </span>
            )}
          </div>
        </div>

        <p className="line-clamp-2 text-sm opacity-90 pt-2">
          {product.description}
        </p>
      </div>
    </div>
  )
}

export default Item
