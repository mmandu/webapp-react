import { Link, NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink  to="/about" activeClassName="hurray">about</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="hurray">contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;