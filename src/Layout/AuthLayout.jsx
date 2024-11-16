import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../component/Navber';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
