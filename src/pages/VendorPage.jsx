import { Link, useParams, useSearchParams } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function VendorPage() {
  const { id } = useParams()
  const { vendors, loading, error, reload } = useVendors()
  const [searchParams, setSearchParams] = useSearchParams()

  // all hooks above; early returns below
  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  const vendor = vendors.find((v) => v.id === id)
  if (!vendor) {
    return (
      <div className="card">
        <p>Vendor not found.</p>
        <Link to="/">Back to vendors</Link>
      </div>
    )
  }

  const categories = ['All', ...new Set(vendor.menu.map((item) => item.category))]

  // the URL is the source of truth: /vendor/:id?cat=Rice
  const requested = searchParams.get('cat')
  const activeCategory = categories.includes(requested) ? requested : 'All'

  const visibleItems =
    activeCategory === 'All'
      ? vendor.menu
      : vendor.menu.filter((item) => item.category === activeCategory)

  function handleCategoryClick(category) {
    if (category === 'All') setSearchParams({})
    else setSearchParams({ cat: category })
  }

  return (
    <section>
      <h2 className="section-title">Menu: {vendor.name}</h2>

      <div className="category-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn ${category === activeCategory ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <MenuList items={visibleItems} />
    </section>
  )
}

export default VendorPage