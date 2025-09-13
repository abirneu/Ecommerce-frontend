// import { title } from 'process';
import React from 'react';
import Img1 from '../../assets/women/women.png';
import Img2 from '../../assets/women/women2.jpg';
import Img3 from '../../assets/women/women3.jpg';
import Img4 from '../../assets/women/women4.jpg';
import {FaStar} from 'react-icons/fa';

const ProductsData =[
    {
        id:1,
        img:Img1,
        title:"Women Ethenic",
        rating:5.0,
        color:"White",
        aosDelay:"100",
    },
    {
        id:2,
        img:Img2,
        title:"Women western",
        rating:4.5,
        color:"Red",
        aosDelay:"200",
    },
    {
        id:3,
        img:Img3,
        title:"Goggles",
        rating:4.0,
        color:"Brown",
        aosDelay:"300",
    },
    {
        id:4,
        img:Img4,
        title:"Printed T-shirt",
        rating:4.8,
        color:"Red",
        aosDelay:"400",
    },
    {
        id:5,
        img:Img4,
        title:"Printed T-shirt",
        rating:4.8,
        color:"Red",
        aosDelay:"400",
    },

];

const Products = () => {
    return (
        <div className='mt-14 mb-12 ' id='products'>
            <div className='container mx-auto'>
                {/* Header Section 3 ta re ek sathe korar jonno ei div */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p className='text-sm text-primary'>Top Selling Products for you</p>
                    <h1 className='text-3xl font-bold dark:text-white'>Products</h1>
                    <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Non, facilis?</p>
                </div> 
                {/* Body section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3
                    md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 px-4'>
                        {/* card section */}
                        {ProductsData.map((data) =>(
                            <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id} 
                            className='space-y-3 text-center'>  
                                
                                
                                <img src={data.img} alt=""
                                className='h-[200px] w-[150px]
                                object-cover rounded-md mx-auto'
                                />
                                <div>
                                    <h3 className='font-semibold dark:text-white'>{data.title}</h3>
                                    <p className='text-sm text-gray-600 dark:text-gray-400'>{data.color}</p>
                                    <div className='flex items-center gap-1 justify-center'>
                                        <FaStar className='text-yellow-400'/>
                                        <span className='dark:text-gray-400'>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;