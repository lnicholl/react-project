import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/product-list">All products</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
