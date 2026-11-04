import { useCart } from '../hooks/useCart.js'

function OrdersPage() {
  const { orders } = useCart()

  if (orders.length === 0) {
    return <p className="muted">No orders yet.</p>
  }

  return (
    <section>
      <h2 className="section-title">My Orders</h2>
      {orders.map((order) => (
        <div className="card order" key={order.id}>
          <p><strong>Pickup at {order.pickupTime}</strong> · Mahallah {order.mahallah}</p>
          <p className="muted">
            For {order.name} · placed {new Date(order.placedAt).toLocaleString()}
          </p>
          <ul>
            {order.lines.map((l) => (
              <li key={l.item.id}>{l.qty} × {l.item.name}</li>
            ))}
          </ul>
          <p className="cart-total">Total: RM {order.total.toFixed(2)}</p>
        </div>
      ))}
    </section>
  )
}

export default OrdersPage