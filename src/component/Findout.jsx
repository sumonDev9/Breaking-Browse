import React from 'react';
import fb from '../assets/fb.png';
import tw from '../assets/twitter.png';
import inst from '../assets/instagram.png';
const Findout = () => {
    return (
        <div>
        <h2 className='my-6 text-[#403F3F] text-xl font-semibold'>Find Us On</h2>
        <div className="join flex join-vertical *:bg-base-100">
            <button className="btn join-item justify-start text-[#706F6F] font-medium"><img src={fb} /> Facebook</button>
            <button className="btn join-item justify-start text-[#706F6F] font-medium"><img src={tw} /> Twitter</button>
            <button className="btn join-item justify-start text-[#706F6F] font-medium"><img src={inst} />  instagram</button>
        </div>
    </div>
    );
};

export default Findout;