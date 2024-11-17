import React from 'react';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const NewsCard = ({ news }) => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className='card border-2 border-orange-200 my-5 rounded-md'>
            {/* Header */}
            <div className='flex bg-orange-100  p-5 justify-between items-center'>
                <div className='flex gap-5'>
                    <div>
                        <img className='w-10 h-10 rounded-full' src={news.author.img} alt="" />
                    </div>
                    <div>
                        <h2 className='text-[#111111] font-semibold text-lg'>{news.author.name}</h2>
                        <p className='text-[#706F6F]'>{news.author.published_date}</p>
                    </div>
                </div>

                <div className='flex items-center text-2xl text-black font-medium gap-3'>
                    <p><CiBookmark /></p>
                    <p><CiShare2 /></p>
                </div>
            </div>
            {/* title */}
            <div className='px-5 py-3 space-y-5'>
                <h1 className='text-[#403F3F] text-xl font-bold'>{news.title}</h1>
                {/* img */}
                <img src={news.image_url} alt="" className='object-cover' />
                {/* Details */}
                <p className='text-[#706F6F] font-semibold text-lg'>
                    {news.details.slice(0, 180)}...{" "}
                    <Link to={`/news/${news._id}`} className='text-orange-500 cursor-pointer'>Read More</Link>
                </p>
                {/* bar */}
                <hr />
                {/* footer */}
                <div className='flex p-2 justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                            classNames='text-xl'
                        />,

                        <div>
                            <p className='text-[#706F6F] text-xl'>{news.rating.number}</p>
                        </div>
                    </div>

                    <div className='flex items-center text-xl text-black font-medium gap-3'>
                        <p><FaRegEye /></p>
                        <p>{news.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;