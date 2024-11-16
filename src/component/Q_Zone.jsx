import React from 'react';
import swing from '../../src/assets/swimming.png';
import clas from '../../src/assets/class.png';
import play from '../../src/assets/playground.png';
const Q_Zone = () => {
    return (
        <div className='bg-[#F3F3F3] rounded-lg space-y-5 py-6'>
            <h1 className='text-[#403F3F] text-xl pl-6 font-semibold'>Q-Zone</h1>
            <img src={swing} className='mx-auto border-dashed border-2' alt="" />
            <img src={clas} className='mx-auto border-dashed border-2' alt="" />
            <img src={play} className='mx-auto border-dashed border-2' alt="" />
        </div>
    );
};

export default Q_Zone;