import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import { LanguageProvider } from './contexts/LanguageContext';
import ArtisanSignup from './components/ArtisanSignup';
import ArtisanDashboard, { Product } from './components/ArtisanDashboard';
import CustomerSignup from './components/CustomerSignup';
import CustomerDashboard, { Address, Order } from './components/CustomerDashboard';
import AccountSettings from './components/AccountSettings';
import ArtisanSignIn from './components/ArtisanSignIn';
import CustomerSignIn from './components/CustomerSignIn';

type View = 'landing' | 'artisanSignup' | 'artisanDashboard' | 'customerSignup' | 'customerDashboard' | 'accountSettings' | 'artisanSignIn' | 'customerSignIn';

// Define a key for localStorage
const PRODUCTS_STORAGE_KEY = 'shilpoAI_products';
const ORDERS_STORAGE_KEY = 'shilpoAI_orders';

export interface CartItem extends Product {
  quantity: number;
}

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('landing');
  const [artisanName, setArtisanName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerSince, setCustomerSince] = useState<number | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Initialize products from localStorage or with an empty array
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const storedProducts = window.localStorage.getItem(PRODUCTS_STORAGE_KEY);
      return storedProducts ? JSON.parse(storedProducts) : [];
    } catch (error) {
      console.error("Error reading products from localStorage", error);
      return [];
    }
  });
  
  // Initialize orders from localStorage or with an empty array
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const storedOrders = window.localStorage.getItem(ORDERS_STORAGE_KEY);
      return storedOrders ? JSON.parse(storedOrders) : [];
    } catch (error) {
      console.error("Error reading orders from localStorage", error);
      return [];
    }
  });

  // Effect to save products to localStorage whenever they change
  useEffect(() => {
    try {
      window.localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    } catch (error) {
      console.error("Error saving products to localStorage", error);
    }
  }, [products]);
  
  // Effect to save orders to localStorage whenever they change
  useEffect(() => {
    try {
      window.localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (error) {
      console.error("Error saving orders to localStorage", error);
    }
  }, [orders]);


  useEffect(() => {
    // Global click handler
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Handle anchor links for smooth scrolling
      const anchor = target.closest('a[href^="#"]');
      if (anchor && currentView === 'landing') {
        const href = anchor.getAttribute('href');
        if (href && href.length > 1) { 
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
      }

      // Handle join modal trigger
      const joinTrigger = target.closest('[data-action="join"]');
      if (joinTrigger) {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };
    document.addEventListener('click', handleGlobalClick);

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));
    
    return () => {
      document.removeEventListener('click', handleGlobalClick);
      elementsToAnimate.forEach(el => observer.unobserve(el));
    };
  }, [currentView]);

  const handleNavigateToArtisanSignup = () => {
    setIsModalOpen(false);
    setCurrentView('artisanSignup');
    window.scrollTo(0, 0);
  };
  
  const handleNavigateToCustomerSignup = () => {
    setIsModalOpen(false);
    setCurrentView('customerSignup');
    window.scrollTo(0, 0);
  };

  const handleNavigateToLanding = () => {
    setCurrentView('landing');
    setArtisanName('');
    setCustomerName('');
    setCustomerSince(null);
    window.scrollTo(0, 0);
  };
  
  const handleNavigateToArtisanSignIn = () => {
    setCurrentView('artisanSignIn');
    window.scrollTo(0, 0);
  };
  
  const handleNavigateToCustomerSignIn = () => {
    setCurrentView('customerSignIn');
    window.scrollTo(0, 0);
  };

  const handleNavigateToDashboard = (name: string) => {
    setArtisanName(name);
    setCurrentView('artisanDashboard');
    window.scrollTo(0, 0);
  }

  const handleLoginAsCustomer = (name: string, signupDate: number) => {
    setCustomerName(name);
    setCustomerSince(signupDate);
    setCurrentView('customerDashboard');
    window.scrollTo(0, 0);
  };

  const handleNavigateToAccountSettings = () => {
    setCurrentView('accountSettings');
    window.scrollTo(0, 0);
  };
  
  const handleBackToCustomerDashboard = () => {
    setCurrentView('customerDashboard');
    window.scrollTo(0, 0);
  };


  const handleAddProduct = (newProductData: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
        id: Date.now(),
        createdAt: Date.now(),
        ...newProductData
    };
    setProducts(prevProducts => [newProduct, ...prevProducts]);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };
  
  const handleDeleteProductByName = (productNameToDelete: string) => {
    setProducts(prevProducts => 
        prevProducts.filter(p => p.title.toLowerCase() !== productNameToDelete.toLowerCase())
    );
  };

  const handleAddToCart = (productToAdd: Product, quantity: number) => {
    setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === productToAdd.id);
        if (existingItem) {
            // Update quantity of existing item
            return prevCart.map(item =>
                item.id === productToAdd.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
        } else {
            // Add new item to cart
            return [...prevCart, { ...productToAdd, quantity }];
        }
    });
  };

  const handleUpdateCartQuantity = (productId: number, newQuantity: number) => {
      setCart(prevCart => {
          if (newQuantity <= 0) {
              // Remove item if quantity is 0 or less
              return prevCart.filter(item => item.id !== productId);
          }
          return prevCart.map(item =>
              item.id === productId ? { ...item, quantity: newQuantity } : item
          );
      });
  };

  const handleRemoveFromCart = (productId: number) => {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const handlePlaceOrder = (items: CartItem[], address: Address) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5); // 5 days delivery time

    const newOrder: Order = {
        id: `SHILPO-${Date.now()}`,
        date: Date.now(),
        items,
        total,
        shippingAddress: address,
        status: 'Ordered',
        expectedDelivery: deliveryDate.toISOString(),
    };

    setOrders(prevOrders => [newOrder, ...prevOrders]);
    setCart([]);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'artisanSignup':
        return <ArtisanSignup onBack={handleNavigateToLanding} onStoreCreated={handleNavigateToDashboard} onNavigateToSignIn={handleNavigateToArtisanSignIn} />;
      case 'customerSignup':
        return <CustomerSignup onBack={handleNavigateToLanding} onAccountCreated={handleLoginAsCustomer} onNavigateToSignIn={handleNavigateToCustomerSignIn} />;
      case 'artisanSignIn':
        return <ArtisanSignIn onBack={handleNavigateToLanding} onLogin={handleNavigateToDashboard} onNavigateToSignUp={handleNavigateToArtisanSignup} />;
      case 'customerSignIn':
        return <CustomerSignIn onBack={handleNavigateToLanding} onLogin={handleLoginAsCustomer} onNavigateToSignUp={handleNavigateToCustomerSignup} />;
      case 'artisanDashboard':
        return <ArtisanDashboard 
                  artisanName={artisanName} 
                  onLogout={handleNavigateToLanding} 
                  products={products}
                  onAddProduct={handleAddProduct}
                  onUpdateProduct={handleUpdateProduct}
                  onDeleteProduct={handleDeleteProductByName}
                />;
      case 'customerDashboard':
        return <CustomerDashboard 
                  customerName={customerName} 
                  onLogout={handleNavigateToLanding}
                  products={products}
                  orders={orders}
                  cart={cart}
                  onAddToCart={handleAddToCart}
                  onUpdateCartQuantity={handleUpdateCartQuantity}
                  onRemoveFromCart={handleRemoveFromCart}
                  onPlaceOrder={handlePlaceOrder}
                  onNavigateToAccountSettings={handleNavigateToAccountSettings}
                />;
      case 'accountSettings':
        return <AccountSettings
                  customerName={customerName}
                  memberSince={customerSince}
                  orderCount={orders.length}
                  onBack={handleBackToCustomerDashboard}
                />
      case 'landing':
      default:
        return (
          <>
            <Header />
            <main>
              <Hero />
              <Features />
              <HowItWorks />
              <Testimonials />
              <CTA />
            </main>
            <Footer />
          </>
        );
    }
  };


  return (
    <LanguageProvider>
      <div className="bg-brand-dark text-brand-light font-sans antialiased">
        {renderContent()}
        <JoinModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onArtisanSignupClick={handleNavigateToArtisanSignup}
          onBuyerSignupClick={handleNavigateToCustomerSignup}
        />
      </div>
    </LanguageProvider>
  );
};

export default App;