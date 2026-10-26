import { useState, useEffect } from 'react'
import MenuList from './components/MenuList.jsx'
import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import Footer from './components/Footer.jsx'
import CartPage from './components/CartPage.jsx'
import { Loading, ErrorMessage } from './components/Status.jsx'

function App() {
  // fetched data
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  // ui state
  const [selectedVendorId, setSelectedVendorId] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [view, setView] = useState('menu') // 'menu' | 'cart' | 'done'

  // cart: array of { item, qty }
  const [cart, setCart] = useState([])
  const [lastOrder, setLastOrder] = useState(null)

  // B2: fetch vendors
  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    fetch('/api/vendors.json', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setVendors(data)
        setSelectedVendorId(data[0].id)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [reloadKey])

  // B3: cart handlers
  function handleAddToCart(item) {
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

  function handleChangeQty(itemId, delta) {
    setCart((prev) =>
      prev
        .map((l) => (l.item.id === itemId ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0)
    )
  }

  function handleRemove(itemId) {
    setCart((prev) => prev.filter((l) => l.item.id !== itemId))
  }

  // derived values (never stored in state)
  const cartCount = cart.reduce((sum, l) => sum + l.qty, 0)
  const cartTotal = cart.reduce((sum, l) => sum + l.item.price * l.qty, 0)

  // B5: place order
  function handlePlaceOrder(details) {
    setLastOrder({ ...details, total: cartTotal })
    setCart([])
    setView('done')
  }

  // B6: filter by category
  function handleSelectVendor(id) {
    setSelectedVendorId(id)
    setSelectedCategory('All') // reset so we never show an empty filter
  }

  const selectedVendor = vendors.find((v) => v.id === selectedVendorId)
  const menu = selectedVendor ? selectedVendor.menu : []
  const categories = ['All', ...new Set(menu.map((item) => item.category))]
  const visibleItems =
    selectedCategory === 'All'
      ? menu
      : menu.filter((item) => item.category === selectedCategory)

  // choose what to show
  let content
  if (view === 'cart') {
    content = (
      <CartPage
        cart={cart}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onPlaceOrder={handlePlaceOrder}
      />
    )
  } else if (view === 'done') {
    content = (
      <div className="card">
        <h2>Order placed</h2>
        <p>
          Pickup at {lastOrder.pickupTime} (Mahallah {lastOrder.mahallah})
        </p>
        <p>Total: RM {lastOrder.total.toFixed(2)}</p>
      </div>
    )
  } else if (loading || !selectedVendor) {
    content = error ? (
      <ErrorMessage message={error} onRetry={() => setReloadKey((k) => k + 1)} />
    ) : (
      <Loading />
    )
  } else if (error) {
    content = (
      <ErrorMessage message={error} onRetry={() => setReloadKey((k) => k + 1)} />
    )
  } else {
    content = (
      <>
        <section>
          <h2 className="section-title">Choose a vendor</h2>
          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                isSelected={vendor.id === selectedVendorId}
                onSelect={handleSelectVendor}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Menu: {selectedVendor.name}</h2>

          <div className="category-bar">
            {categories.map((category) => (
              <button
                key={category}
                className={`btn ${category === selectedCategory ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <MenuList items={visibleItems} onAdd={handleAddToCart} />
        </section>
      </>
    )
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onShowMenu={() => setView('menu')}
        onShowCart={() => setView('cart')}
      />
      <main className="container">{content}</main>
      <Footer />
    </>
  )
}

export default App