import { Link } from "react-router-dom";
import { ArrowLeft, SearchX } from "lucide-react";

function NotFound() {
  return (
    <main className="not-found">
      <SearchX size={70} />

      <h1>404</h1>

      <h2>Page not found</h2>

      <p>The page you're looking for doesn't exist.</p>

      <Link to="/" className="primary-btn">
        <ArrowLeft size={18} />
        Back Home
      </Link>
    </main>
  );
}

export default NotFound;
