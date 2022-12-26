import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Cart from './components/Cart';
import Home from './components/Home';
import Product from './components/Product';
import Shop from './components/Shop';
import Message from './components/Message';
import './styles/General.css';


const App = () => {
    
    /*
        item in cart should have 
        {
            id,
            name,
            price,
            qty,
        }
    */
    const [cart, setCart] = useState([]);

    const productDetails = [
        {
            id : 1,
            name : "Counter Strike : Global Offensive",
            price : "19.99",
            rating : 4,
        },
        {
            id : 2,
            name : "Grand Theft Auto V",
            price : "19.99",
            rating : 4,
        },
        {
            id : 3,
            name : "Red Dead Redemption II",
            price : "50.99",
            rating : 5,
        },
        {
            id : 4,
            name : "Hogwarts Legacy",
            price : "50.99",
            rating : 5,
        },
        {
            id : 5,
            name : "Assassin Creed Syndicate",
            price : "19.99",
            rating : 3,
        },
        {
            id : 6,
            name : "Assasin Creed Black Flag",
            price : "10.99",
            rating : 4,
        },
        {
            id : 7,
            name : "Grand Theft Auto San Andreas",
            price : "9.99",
            rating : 5,
        },
        {
            id : 8,
            name : "The Quarry",
            price : "39.99",
            rating : 4,
        },
        {
            id : 9,
            name : "The Elder Scrolls V: Skyrim",
            price : "19.99",
            rating : 4,
        },
        {
            id : 10,
            name : "Marvel's Spiderman",
            price : "50.99",
            rating : 5,
        },
        {
            id : 11,
            name : "Among Us",
            price : "3.99",
            rating : 5,
        },
        {
            id : 12,
            name : "Elden Ring",
            price : "50.99",
            rating : 5,
        },
        {
            id : 13,
            name : "Cyberpunk 2077",
            price : "50.99",
            rating : 3,
        },
        {
            id : 14,
            name : "The Sims 4",
            price : "50.99",
            rating : 4.5,
        },
        {
            id : 15,
            name : "Call Of Duty : Black Ops",
            price : "20.99",
            rating : 5,
        },
    ];

    const incItemCart = (id) => {
        setCart(prev => {
            const newCart = [];
            
            let found = false;

            for(const i of prev){
                const temp = {...i};
                if (temp.id === id){
                    found = true;
                    temp.qty++
                }
                newCart.push(temp);
            }

            if (!found) newCart.push({
                id : id,
                name : productDetails[id-1].name,
                price : productDetails[id-1].price,
                qty : 1,
            })

            return newCart;
        })
    }

    const decItemCart = (id) => {
        setCart(prev => {
            const newCart = [];
            for(const i of prev){
                const temp = {...i};
                if (temp.id === id){
                    temp.qty--;
                }
                if (temp.qty > 0) newCart.push(temp);
            }

            return newCart;
        })
    }

    return(
        <BrowserRouter basename='/'>
            <Nav/>
            <Routes>
                <Route 
                    path="/shopping-cart/" 
                    element={<Home/>}
                />
                <Route 
                    path="/shopping-cart/cart" 
                    element={
                        <Cart 
                            cart={cart} 
                        />
                    }
                />
                <Route 
                    path="/shopping-cart/shop" 
                    element={<Shop products={productDetails}/>}
                />
                <Route 
                    path="/shopping-cart/product/:id" 
                    element={
                        <Product 
                            cart={cart} 
                            products={productDetails}
                            inc={incItemCart} 
                            dec={decItemCart} 
                        />
                    }
                />
            <Route 
                path="*" 
                element={<Message msg="Page not found!"/>}
            />
            </Routes>
        </BrowserRouter>
    )
};

export default App;