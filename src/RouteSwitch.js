import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Cart from './components/Cart';
import Home from './components/Home';
import Product from './components/Product';
import Shop from './components/Shop';


const RouteSwitch = () => {
    const [cart, setCart] = useState([]);

    const productDetails = [
        {
            id : 1,
            name : "Counter Strike : Global Offensive",
            price : "$19.99",
            rating : 4,
        },
        {
            id : 2,
            name : "Grand Theft Auto V",
            price : "$19.99",
            rating : 4,
        },
        {
            id : 3,
            name : "Red Dead Redemption II",
            price : "$50.99",
            rating : 5,
        },
        {
            id : 4,
            name : "Hogwarts Legacy",
            price : "$50.99",
            rating : 5,
        },
        {
            id : 5,
            name : "Assassin Creed Syndicate",
            price : "$19.99",
            rating : 3,
        },
        {
            id : 6,
            name : "Assasin Creed Black Flag",
            price : "$10.99",
            rating : 4,
        },
        {
            id : 7,
            name : "Grand Theft Auto San Andreas",
            price : "$9.99",
            rating : 5,
        },
        {
            id : 8,
            name : "The Quarry",
            price : "$39.99",
            rating : 4,
        },
        {
            id : 9,
            name : "The Elder Scrolls V: Skyrim",
            price : "$19.99",
            rating : 4,
        },
        {
            id : 10,
            name : "Marvel's Spiderman",
            price : "$50.99",
            rating : 5,
        },
        {
            id : 11,
            name : "Among Us",
            price : "$3.99",
            rating : 5,
        },
        {
            id : 12,
            name : "Elden Ring",
            price : "$50.99",
            rating : 5,
        },
        {
            id : 13,
            name : "Cyberpunk 2077",
            price : "$50.99",
            rating : 3,
        },
        {
            id : 14,
            name : "The Sims 4",
            price : "$50.99",
            rating : 4.5,
        },
        {
            id : 15,
            name : "Call Of Duty : Black Ops",
            price : "$20.99",
            rating : 5,
        },
    ];

    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cart" element={<Cart cart={cart} products={productDetails}/>}></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/product/:id" element={<Product cart={cart} products={productDetails}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default RouteSwitch;