import React from 'react';
import "./navbar.css"
import { GiShoppingCart } from "react-icons/gi";


function navbar() { 
                                
    return (
        <header > 
            <h3>LOGO</h3>
            <ul className="list"> 
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PRODUCT</li>
                    
                
                <GiShoppingCart className="icon"/>
                 

            </ul>
        </header>
    )
}


export default navbar ;