 import React from "react";
 import "./navbar.css"
 import CartWidget from "./CartWidget/CartWidget";


function NavBar(){
    return (
        <>
            <h3 className="h3">Home and Deco</h3>
            <ul>
                <li>
                    <a href="_blank"> Home</a>
                    <a href="_blank"> Productos</a>
                    <a href="_blank"> Ofertas</a>
                    <a href="_blank"> Ayuda</a>
                </li>
            </ul>
            <CartWidget/>
        </>
    );
}

export default NavBar;