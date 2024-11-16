import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryCard = () => {
    const {data: news} = useLoaderData();
    console.log(news)
    return (
        <div>
          <h1 className='text-[#403F3F] text-xl font-semibold'>Dragon News Home{news.length}</h1>
          <div>
            {
                news.map(news => <NewsCard key={news._id
                } news={news}></NewsCard>)
            }
          </div>
        </div>
    );
};

export default CategoryCard;