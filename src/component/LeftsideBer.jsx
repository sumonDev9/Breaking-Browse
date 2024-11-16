import React, { useEffect, useState } from 'react';

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
                    categories.map(category => <button
                    key={category.category_id}
                    className='btn'>
                        {category.category_name}
                    </button>)
                }
            </div>
        </div>
    );
};

export default LeftsideBer;