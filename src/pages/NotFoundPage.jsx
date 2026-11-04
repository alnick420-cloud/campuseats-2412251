import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="card">
      <h2>404</h2>
      <p>No page here.</p>
      <Link to="/">Back to vendors</Link>
    </div>
  )
}

export default NotFoundPage