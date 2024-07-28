import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { ShoppingCart, Search, User, Menu, X, ChevronRight, Star } from 'lucide-react';

// Asegúrate de importar los estilos de react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 text-white py-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-amber-400"
        >
          NachoSupplements
        </motion.div>
        <div className="hidden md:flex space-x-6">
          {['Proteínas', 'Pre-entrenos', 'Aminoácidos', 'Accesorios'].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="hover:text-amber-400 transition duration-300"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-amber-400 transition duration-300" />
          <User className="w-5 h-5 cursor-pointer hover:text-amber-400 transition duration-300" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-amber-400 transition duration-300" />
          <div className="md:hidden">
            <Menu onClick={() => setIsOpen(true)} className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed inset-y-0 right-0 w-64 bg-zinc-800 p-4 z-50"
        >
          <X onClick={() => setIsOpen(false)} className="w-6 h-6 mb-4 cursor-pointer" />
          {['Proteínas', 'Pre-entrenos', 'Aminoácidos', 'Accesorios'].map((item) => (
            <a key={item} href="#" className="block py-2 hover:text-amber-400 transition duration-300">{item}</a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const ParallaxSection = () => (
  <div className="relative h-screen overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-athlete.jpg')",
        transform: "translateY(var(--parallax-y))"
      }}
    ></div>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative h-full flex items-center justify-center text-center">
      <div>
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight"
        >
          ELEVA TU <span className="text-amber-400">RENDIMIENTO</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Suplementos de calidad superior para atletas mexicanos que buscan resultados excepcionales
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-amber-400 text-zinc-900 font-bold py-3 px-8 rounded-full hover:bg-amber-300 transition duration-300 flex items-center mx-auto"
        >
          COMPRA AHORA <ChevronRight className="ml-2" />
        </motion.button>
      </div>
    </div>
  </div>
);

const ProductCard = ({ product, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
    onClick={() => onClick(product)}
  >
    <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
      <p className="text-amber-400 text-2xl font-bold mb-4">${product.price} MXN</p>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < product.rating ? 'text-amber-400' : 'text-gray-400'}`} fill="currentColor" />
        ))}
      </div>
      <button className="w-full bg-amber-400 text-zinc-900 font-bold py-2 px-4 rounded-full hover:bg-amber-300 transition duration-300 flex items-center justify-center">
        Añadir al carrito <ShoppingCart className="ml-2 w-5 h-5" />
      </button>
    </div>
  </motion.div>
);

const ProductModal = ({ product, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-zinc-800 p-8 rounded-lg max-w-2xl w-full mx-4"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold text-white">{product.name}</h2>
        <X onClick={onClose} className="w-6 h-6 cursor-pointer text-gray-400 hover:text-white" />
      </div>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-300 mb-4">{product.description}</p>
      <p className="text-amber-400 text-3xl font-bold mb-4">${product.price} MXN</p>
      <button className="w-full bg-amber-400 text-zinc-900 font-bold py-3 px-4 rounded-full hover:bg-amber-300 transition duration-300 flex items-center justify-center">
        Añadir al carrito <ShoppingCart className="ml-2 w-5 h-5" />
      </button>
    </motion.div>
  </motion.div>
);

const ProductSection = ({ title, products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">{title}</h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-2">
              <ProductCard product={product} onClick={setSelectedProduct} />
            </div>
          ))}
        </Slider>
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

const App = () => {
  const featuredProducts = [
    { 
      name: "Whey Pro Max", 
      price: 899, 
      image: "/images/whey-pro-max.jpg",
      rating: 5,
      description: "Proteína de suero de leche de alta calidad para una recuperación muscular óptima."
    },
    { 
      name: "Pre-Workout Explosion", 
      price: 649, 
      image: "/images/pre-workout-explosion.jpg",
      rating: 4,
      description: "Fórmula pre-entrenamiento para maximizar tu energía y enfoque durante el ejercicio."
    },
    { 
      name: "BCAA Recuperación Total", 
      price: 499, 
      image: "/images/bcaa-recuperacion.jpg",
      rating: 5,
      description: "Aminoácidos de cadena ramificada para una recuperación muscular más rápida."
    },
    { 
      name: "Creatina Power Boost", 
      price: 399, 
      image: "/images/creatina-power-boost.jpg",
      rating: 4,
      description: "Creatina monohidratada pura para aumentar la fuerza y el rendimiento muscular."
    },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--parallax-y', `${scrollY * 0.5}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-zinc-900 text-white">
      <Navigation />
      <ParallaxSection />
      <ProductSection title="PRODUCTOS DESTACADOS" products={featuredProducts} />
    </div>
  );
};

export default App;