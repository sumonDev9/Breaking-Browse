import moment from 'moment';
import React, { useEffect, useState } from 'react';

const Header = () => {
  //  console.log(import.meta.env.VITE_a)
    const [time, setTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);
        return () => clearInterval(intervalId);
    },[]);

    const formatTimeWithColor = (timeString) => {
        const [month, ...rest] = timeString.split(' ');
        const restOfTime = rest.join(' ');
        return (
          <span className='text-xl font-medium'>
            <span className='text-[#403F3F]'>{month}</span>{' '}
            <span className='text-[#706F6F]'>{restOfTime}</span>
          </span>
        );
      };

    return (
        <div className='text-center py-6 space-y-2'>
            <h1 className='font-UnifrakturMaguntia text-6xl'>Breaking Browse</h1>
            <p className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p>{formatTimeWithColor(time)}</p>
        </div>
    );
};

export default Header;


