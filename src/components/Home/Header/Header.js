import React from 'react';
import Businessinfo from '../Businessinfo/Businessinfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div class="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Businessinfo></Businessinfo>
        </div>
    );
};

export default Header;