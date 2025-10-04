import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const BookPage = () => {
  const [products] = useState([
    { id: 1, name: 'iPhone 15', price: 25000000, image: '📱', category: 'Điện thoại' },
    { id: 2, name: 'MacBook Pro', price: 45000000, image: '💻', category: 'Laptop' },
    { id: 3, name: 'AirPods Pro', price: 6000000, image: '🎧', category: 'Phụ kiện' },
    { id: 4, name: 'iPad Air', price: 18000000, image: '📱', category: 'Tablet' },
    { id: 5, name: 'Apple Watch', price: 12000000, image: '⌚', category: 'Đồng hồ' },
    { id: 6, name: 'Samsung Galaxy', price: 20000000, image: '📱', category: 'Điện thoại' }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [cart, setCart] = useState([]);

  const categories = ['Tất cả', 'Điện thoại', 'Laptop', 'Tablet', 'Phụ kiện', 'Đồng hồ'];

  const filteredProducts = selectedCategory === 'Tất cả' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="products-container">
      <h2>Danh Sách Sản Phẩm</h2>
      
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">{formatPrice(product.price)}</p>
              <button 
                onClick={() => addToCart(product)}
                className="add-to-cart-btn"
              >
                Thêm vào giỏ
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Giỏ hàng ({cart.length} sản phẩm)</h3>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.name}</span>
                <span>{formatPrice(item.price)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="nav-links">
        <Link to="/">Trang chủ</Link>
        <Link to="/login">Đăng nhập</Link>
        <Link to="/register">Đăng ký</Link>
        <Link to="/user">Tài khoản</Link>
      </div>
    </div>
  );
};

export default BookPage;
