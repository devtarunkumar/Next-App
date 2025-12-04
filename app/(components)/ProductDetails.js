import React, { useState } from 'react'
import { useAppContext } from '../(context)/AppContext'
import Image from "next/image";
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ProductDetails({ product }) {
  const { currency } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  const price = product.offerPrice ? product.offerPrice : product.price;

  return (
    <div className="flex flex-col md:flex-row gap-10">

      {/* PRODUCT IMAGE */}
      <div className="bg-white p-4 rounded-2xl shadow-md flex items-center justify-center">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={320}
          height={320}
          className="rounded-xl object-cover"
          unoptimized
        />
      </div>

      {/* PRODUCT INFO */}
      <div className="flex-1 p-3 md:my-auto space-y-4">

        {/* Title */}
        <h2 className="text-2xl font-semibold">{product.name}</h2>

        {/* Category + Color */}
        <div className="flex items-center gap-4 text-sm">
          <span className="px-3 py-1 rounded-full bg-primary text-white text-xs shadow">
            {product.category[0]}
          </span>
          <span className="px-3 py-1 rounded-full bg-secondary text-black/80 text-xs shadow">
            {product.color}
          </span>
        </div>

        {/* Prices */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <p className="text-gray-500 line-through">
              {currency}{product.price}
            </p>
            {product.offerPrice && (
              <p className="text-xl font-bold text-green-600">
                {currency}{product.offerPrice}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {product.description}
        </p>

        {/* Quantity + Subtotal */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-5">

          {/* Quantity Control */}
          <div className="flex items-center ring-1 ring-gray-300 bg-secondary rounded-full px-2 shadow-sm">
            <Button
              variant="ghost"
              className="h-8 w-8 p-1 rounded-full hover:bg-primary hover:text-white"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              <Minus size={16} />
            </Button>

            <p className="font-semibold w-8 text-center">{quantity}</p>

            <Button
              variant="ghost"
              className="h-8 w-8 p-1 rounded-full hover:bg-primary hover:text-white"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus size={16} />
            </Button>
          </div>

          {/* Subtotal */}
          <div className="flex items-center gap-2 text-lg">
            <span className="font-medium">SubTotal:</span>
            <span className="font-bold text-primary">
              {currency}{(price * quantity).toLocaleString()}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button className="w-full mt-4 flex gap-2 text-lg py-5 rounded-xl shadow-md hover:shadow-lg transition-all">
          <ShoppingCart size={20} />
          Add to Cart
        </Button>
      </div>

    </div>
  );
}

export default ProductDetails;
