import {Link} from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
    return(
        <nav>
            <Link>
                <h1 className="title">GamingWizard</h1>
            </Link>
            <ul>
                <Link to="/">
                    <li>/Home</li>
                </Link>
                <Link to="/shop">  
                    <li>/Shop</li>
                </Link>
                <Link to="/cart">
                    <li>/Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;