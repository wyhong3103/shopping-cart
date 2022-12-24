import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <h1 className="title">GamingWizard</h1>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">  
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;