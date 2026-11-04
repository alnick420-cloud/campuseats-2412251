import { CartContext } from './cart-context.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('campuseats-cart', [])
  const [orders, setOrders] = useLocalStorage('campuseats-orders', [])

  // derived, never stored
  const count = cart.reduce((sum, l) => sum + l.qty, 0)
  const total = cart.reduce((sum, l) => sum + l.item.price * l.qty, 0)

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((l) => l.item.id === item.id)
      if (existing) {
        return prev.map((l) =>
          l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l
        )
      }
      return [...prev, { item, qty: 1 }]
    })
  }

  function changeQty(itemId, delta) {
    setCart((prev) =>
      prev
        .map((l) => (l.item.id === itemId ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0)
    )
  }

  function removeFromCart(itemId) {
    setCart((prev) => prev.filter((l) => l.item.id !== itemId))
  }

  function placeOrder(details) {
    const order = {
      id: Date.now(),
      ...details,                 // name, mahallah, pickupTime
      lines: cart,
      total,
      placedAt: new Date().toISOString(),
    }
    setOrders((prev) => [order, ...prev])
    setCart([])
  }

  const value = {
    cart, orders, count, total,
    addToCart, changeQty, removeFromCart, placeOrder,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider