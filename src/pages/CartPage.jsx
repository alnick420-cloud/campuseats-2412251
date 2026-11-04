import { Link, useNavigate } from 'react-router'
import { useCart } from '../hooks/useCart.js'
import CartItem from '../components/CartItem.jsx'
import CheckoutForm from '../components/CheckoutForm.jsx'

function CartPage() {
  const { cart, total, placeOrder } = useCart()
  const navigate = useNavigate()

  function handlePlaceOrder(details) {
    placeOrder(details)
    navigate('/orders')
  }

  if (cart.length === 0) {
    return (
      <p className="muted">
        Your cart is empty. <Link to="/">Pick something from a menu first.</Link>
      </p>
    )
  }

  return (
    <div>
      <h2 className="section-title">Your cart</h2>
      <div className="cart-layout">
        <div className="card">
          <ul className="cart-list">
            {cart.map((line) => (
              <CartItem key={line.item.id} line={line} />
            ))}
          </ul>
          <p className="cart-total">Total: RM {total.toFixed(2)}</p>
        </div>
        <CheckoutForm onPlaceOrder={handlePlaceOrder} />
      </div>
    </div>
  )
}

export default CartPage