import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function MealCard() {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // handle like with shake animation
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden border">
      {/* Image */}
      <div className="h-40 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Image</span>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Large Pizza</h2>
          <span className="text-green-600 font-semibold">Ksh 2000</span>
        </div>
        <p className="text-gray-500 text-sm mb-3">
          Get your favorite pizza big at a discount.
        </p>

        {/* Like + Counter */}
        <div className="flex justify-between items-center mb-4">
          {/* Like button with shake */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            animate={liked ? { rotate: [0, -15, 15, 0] } : {}}
            transition={{ duration: 0.4 }}
            onClick={toggleLike}
            className="focus:outline-none"
          >
            <Heart
              className={`w-6 h-6 ${
                liked ? "text-red-500 fill-red-500" : "text-gray-400"
              }`}
            />
          </motion.button>

          {/* Counter */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-lg font-bold"
            >
              -
            </button>
            <span className="font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-lg font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Bottom Button */}
        <button className="w-full py-2 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition">
          Get it!
        </button>
      </div>
    </div>
  );
}
