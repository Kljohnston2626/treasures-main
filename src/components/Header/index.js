import React from 'react';
import './styles.scss';

import Logo from './../../assets/TreasuresLogo.png';

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="clusterLeft">
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/products">Brands</a>
                </div>
                <div className="logo">
                    <a href="/"><img src={Logo} alt="TreasuresLogo"></img></a>
                </div>
                <div className="clusterRight">
                    <a href="/contact">Contact</a>
                    <a href="/about">About Us</a>
                    <a href="/cart"><i class="fas fa-shopping-cart"></i> Cart</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
