import React from 'react';
import Header from '../component/Header';
import Navber from '../component/Navber';
import LatestNews from '../component/LatestNews';

const Home = () => {
    return (
     <div>
      <Header></Header>
      <section className='w-11/12 mx-auto bg-slate-200 p-2 rounded-sm'>
        <LatestNews></LatestNews>
      </section>
      <nav className='w-11/12 mx-auto py-5'>
        <Navber></Navber>
      </nav>

      
     </div>

     

    
    );
};

export default Home;