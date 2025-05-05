import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Register from './pages/Auth/Register'; // ✅ new import

function App() {
  return (
    <div className="p-4">
      <nav className="space-x-4 mb-4">
        <Link to="/" className="text-blue-600">Home</Link>
        <Link to="/about" className="text-blue-600">About</Link>
        <Link to="/register" className="text-blue-600">Register</Link> {/* ✅ new link */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} /> {/* ✅ new route */}
      </Routes>
    </div>
  );
}

export default App;
