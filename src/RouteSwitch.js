import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Cart from './components/Cart';
import Home from './components/Home';
import Product from './components/Product';
import Shop from './components/Shop';

const RouteSwitch = () => {
    const [cart, setCart] = useState([]);

    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/product/:id" element={<Product/>}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default RouteSwitch;