import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
const LatestNews = () => {
    return (
        <div className='flex items-center gap-2'>
            <p className='text-white bg-orange-400 px-2 py-1 text-lg rounded-sm font-bold'>Latest</p>
            <Marquee pauseOnHover={true}  speed={100} className=''>
            <Link className='ml-5 text-[#111111] font-semibold'>Major Shift in the Economy: Finance Minister Analyzes Budget 2024-25</Link>
            <Link className='ml-5 text-[#111111] font-semibold'>New Milestone in Science and Technology: Country's First AI Lab Launched</Link>
            <Link className='ml-5 text-[#111111] font-semibold'>Cricket World Cup 2024: Bangladesh Secures Thrilling Win to Reach Semis</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;