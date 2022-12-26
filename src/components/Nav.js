import {Link} from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
    return(
        <nav>
            <Link to="/shopping-cart/">
                <h1 className="title">GamingWizard</h1>
            </Link>
            <ul>
                <Link to="/shopping-cart/">
                    <li>/Home</li>
                </Link>
                <Link to="/shopping-cart/shop">  
                    <li>/Shop</li>
                </Link>
                <Link to="/shopping-cart/cart">
                    <li>/Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;