import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul>
        <li><Link className="active" to="/">Home</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
};

export default Header;
