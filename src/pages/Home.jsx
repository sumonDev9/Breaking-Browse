import React from 'react';
import Header from '../component/Header';
import Navber from '../component/Navber';
import LatestNews from '../component/LatestNews';
import LeftsideBer from '../component/LeftsideBer';
import RightNavBar from '../component/RightNavBar';

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

    <main className='grid grid-cols-12 gap-5 mx-auto w-11/12'>
      <aside className='col-span-2'>
      <LeftsideBer></LeftsideBer>
      </aside>
      <section className='col-span-7'>
      <h1>hii</h1>
      </section>
      <aside className='col-span-3'>
      <RightNavBar></RightNavBar>
      </aside>
    </main>
      
     </div>

     

    
    );
};

export default Home;