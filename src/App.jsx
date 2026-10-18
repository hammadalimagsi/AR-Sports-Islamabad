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
    <div className="min-h-screen flex flex-col bg-white text-brand-text selection:bg-brand-green selection:text-white">
      <ScrollToTop />
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto max-w-sm z-50 bg-brand-charcoal text-white font-medium text-xs sm:text-sm px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-brand-green/50 animate-in slide-in-from-bottom-2 duration-200">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-ping shrink-0" />
          <span className="truncate">{toastMessage}</span>
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
