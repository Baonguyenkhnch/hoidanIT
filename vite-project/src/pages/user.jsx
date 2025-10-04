import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const UserPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Eric',
    email: 'eric@example.com',
    phone: '0123456789',
    address: 'Hanoi, Vietnam'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log('Updated user info:', userInfo);
    setIsEditing(false);
  };

  return (
    <div className="user-container">
      <div className="user-profile">
        <h2>Thông Tin Tài Khoản</h2>
        
        <div className="profile-avatar">
          <div className="avatar">👤</div>
          <h3>{userInfo.name}</h3>
        </div>

        <div className="user-info">
          <div className="info-item">
            <label>Họ tên:</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
              />
            ) : (
              <span>{userInfo.name}</span>
            )}
          </div>

          <div className="info-item">
            <label>Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              />
            ) : (
              <span>{userInfo.email}</span>
            )}
          </div>

          <div className="info-item">
            <label>Số điện thoại:</label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
              />
            ) : (
              <span>{userInfo.phone}</span>
            )}
          </div>

          <div className="info-item">
            <label>Địa chỉ:</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
              />
            ) : (
              <span>{userInfo.address}</span>
            )}
          </div>
        </div>

        <div className="user-actions">
          {isEditing ? (
            <button onClick={handleSave} className="save-btn">Lưu</button>
          ) : (
            <button onClick={() => setIsEditing(true)} className="edit-btn">Chỉnh sửa</button>
          )}
        </div>

        <div className="nav-links">
          <Link to="/">Trang chủ</Link>
          <Link to="/login">Đăng nhập</Link>
          <Link to="/register">Đăng ký</Link>
          <Link to="/products">Sản phẩm</Link>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
