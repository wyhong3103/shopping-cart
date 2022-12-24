import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import ItemCard from "../ItemCard";

describe("Item Card Test", () => {
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
    for(let i = 0; i < 15; i++){
        test(`Details for item ${i+1} are correctly rendered`, () => {
            render(<ItemCard item={productDetails[i]}/>);
            
            const name = screen.getByText(productDetails[i].name);
            const price = screen.getByText(productDetails[i].price);

            expect(name).toBeInTheDocument();
            expect(price).toBeInTheDocument();
        });
    }
});