import React from 'react';
import { Outlet } from 'react-router-dom';
//import Footer from '../pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Root;