import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../component/Header';
import RightNavBar from '../component/RightNavBar';
import { GoArrowLeft } from "react-icons/go";
const PageDetails = () => {
    const data = useLoaderData();
    const news = data.data[0]
    console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid md:grid-cols-12 gap-5'>
            <section className='col-span-6 md:col-span-9'>
                <h1 className='text-xl text-[#403F3F] font-semibold'>Breaking News</h1>
                <div className='mt-5 card shadow p-5 rounded-md'>
                    <div>
                        <img src={news.image_url} className='object-cover w-full' alt="" />
                    </div>
                    <div className='py-5'>
                        <h2 className='text-2xl text-[#403F3F] font-bold'>{news.title}</h2>
                        <p className='text-[#706F6F] mt-5'>{news.details}</p>
                        <div className='card-actions'>
                        <Link to={`/category/${news?.category_id}`} className='bg-orange-400 rounded-md px-3 py-2 flex gap-2 items-center text-white font-semibold text-lg mt-5'><GoArrowLeft /> All news in this category</Link>
                     </div>
                    </div>
                </div>
            </section>
            <aside className='col-span-6 md:col-span-3'>
                <RightNavBar></RightNavBar>
            </aside>
            </main>
        </div>
    );
};

export default PageDetails;