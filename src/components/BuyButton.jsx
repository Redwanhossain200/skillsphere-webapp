'use client';

import toast from 'react-hot-toast';
import { LuShoppingCart } from 'react-icons/lu';
import { useCart } from '@/context/CartContext';

export default function BuyButton({ title, courseId }) {
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    toast.promise(addToCart(courseId), {
      loading: 'Adding to cart...',
      success: `${title} added to cart successfully!`,
      error: 'Failed to add to cart',
    });
  };

  return (
    <button
      onClick={handleBuyNow}
      className="btn btn-primary w-full mb-2 btn-lg">
      <LuShoppingCart size={20} /> Buy Now
    </button>
  );
}
