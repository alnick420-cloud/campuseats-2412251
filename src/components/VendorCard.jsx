import { Link } from 'react-router'

function VendorCard({ vendor }) {
  return (
    <Link to={`/vendor/${vendor.id}`} className="card vendor-card">
      <h3>{vendor.name}</h3>
      <p className="muted">{vendor.location}</p>
      <p className="muted">{vendor.openHours}</p>
      <p>{vendor.isOpen ? 'Open now' : 'Closed'}</p>
    </Link>
  )
}

export default VendorCard