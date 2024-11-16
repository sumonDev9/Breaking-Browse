import React from 'react';
import LoginSocal from './LoginSocal';
import Findout from './Findout';
import Q_Zone from './Q_Zone';

const RightNavBar = () => {
    return (
        <div className='space-y-5'>
            <LoginSocal></LoginSocal>
            <Findout></Findout>
            <Q_Zone></Q_Zone>
        </div>
    );
};

export default RightNavBar;