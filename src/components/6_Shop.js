import './CSS/Shop.css'
import React from "react";
import { Link } from 'react-router-dom';
import ShopList from './7_ShopList';


const Shop =()=>{
    
    return(
        <div className="Shopping_All">
            <div className="Shopping_Header">
                <h3><Link to="https://hong-car.netlify.app/" className='Shopping_Home'> Hong Car </Link></h3>               
            </div>
            <ShopList />
        </div>

    );
};

export default Shop;