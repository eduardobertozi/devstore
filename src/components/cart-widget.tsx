'use client'

import { useCart } from '@/contexts/cart-context'
import { ShoppingBagIcon } from 'lucide-react'

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBagIcon className="size-4 text-sm" />
      <span>Cart ({items.length})</span>
    </div>
  )
}
