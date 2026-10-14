import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { useCart } from './context/CartContext';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import CustomDesignPage from './pages/CustomDesignPage';
import SchoolTeamwearPage from './pages/SchoolTeamwearPage';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const { toastMessage } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 selection:bg-electric-500 selection:text-white">
      <ScrollToTop />
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white font-semibold text-sm px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200 border border-emerald-400/40">
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar />

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Main Content View */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/custom-design" element={<CustomDesignPage />} />
          <Route path="/school-teamwear" element={<SchoolTeamwearPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback 404 Route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
