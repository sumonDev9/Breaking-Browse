import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftsideBer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])
    return (
        <div>
            <h1 className='text-[#403F3F] text-xl font-semibold'>All Caterogy({categories.length})</h1>
            <div className='flex flex-col gap-3 w-full mt-6'>
                {
                    categories.map(category => <NavLink
                    to={`/category/${category.category_id}`}
                    key={category.category_id}
                    className='btn text-base'>
                        {category.category_name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftsideBer;