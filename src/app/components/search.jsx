"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { items1 } from '@/app/assets/shop-1'
import { items2 } from '@/app/assets/shop-1';
import { items3 } from '@/app/assets/shop-1';
import { items4 } from '@/app/assets/shop-1';
import { items5 } from '@/app/assets/shop-1';
import { useState } from 'react';



export default function Search() {

    const [activeTab, setActiveTab] = useState('tab1');
    const [hoveredImage, setHoveredImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);




    // Función para manejar el cambio de imagen cuando el cursor entra
    const handleMouseEnter = (index) => {
        setHoveredImage(index);
    };

    // Función para manejar el cambio de imagen cuando el cursor sale
    const handleMouseLeave = () => {
        setHoveredImage(null);
    };




    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const toggleDrop = () => {
        setIsOpen(!isOpen);
    };



    return (<>

        <section className="flex justify-between pt-2 ">
            <div className="col-span-3 lg:col-span-4">
                <div className="pl-4">
                    <i class='bx bx-closet text-2xl'></i>
                </div>
            </div>
            <div className="col-span-3 lg:col-span-4">
                <form action="#">
                    <i class='bx bx-search-alt-2'></i>
                    <input type="text" placeholder="Search for items..." className="pl-2 rounded-md " />
                </form>
            </div>
            <div className="col-span-3 lg:col-span-4">
                <div className="pr-4">
                    <i class='bx bxs-shopping-bags text-2xl'></i>
                </div>
            </div>
        </section>


        <section className="flex pr-8 pt-5">
            <div className="px-2">Home</div>

            <ul className="flex">
                <li className="relative flex items-center">
                    <a className="language-dropdown-active" href="#" onMouseEnter={toggleDrop} onMouseLeave={toggleDrop}>
                        Our collection <i class='bx bx-chevron-down'></i>
                    </a>
                    <ul className={`absolute top-full left-0 z-10 bg-white  shadow-md 
                                ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-250 ease-in-out`}>
                        <div className="grid grid-cols-4 our-collection gap-y-3 gap-x-4 ">
                            <div className="grid-col-1">
                                <h1 className="text-center  text-yellow-400 p-3">Women's fashion</h1>
                                <p className="pl-3">Dresses</p>
                                <p className="pl-3">Shirts</p>
                                <p className="pl-3">Hiddies</p>
                                <p className="pl-3">Shoes</p>
                            </div>
                            <div className="grid-col-1">
                                <h1 className="text-center  text-yellow-400 p-3">Men's fashion</h1>
                                <p>Dresses</p>
                                <p>Shirts</p>
                                <p>Hiddies</p>
                                <p>Shoes</p>
                            </div>
                            <div className="grid-col-1">
                                <h1 className="text-center  text-yellow-400 p-3">Technology</h1>
                                <p>Tablets</p>
                                <p>Laptop</p>
                                <p>Ultraslim</p>
                                <p>Headphones</p>
                            </div>
                            <div className="grid-col-1">
                                <img src="clothes-3.jpg" className="" />
                            </div>
                        </div>

                    </ul>
                </li>
            </ul>
            <div className="px-2">About</div>
            <div className="px-2">Shop</div>
            <select className="px-3">Our Collections
                <option>Womens</option>
                <option>Man</option>
                <option>Children</option>
            </select>
            <div className="px-2">Blog</div>
            <div className="px-2">Contact</div>
            <div className="px-2">My account</div>
        </section>


        <section className='grid grid-cols-3 pt-10'>
            <div className='grid-col-1 gap-y-20'>
                <Swiper
                    loop
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    <SwiperSlide >
                        <img src='./clothes-1.jpg' className='object-cover' />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src='./clothes-2.jpg' className='object-cover' />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src='./clothes-3.jpg' className='object-cover' />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='flex flex-col col-span-2 items-center justify-center'>
                <h1 className='text-5xl'>Clothes</h1>
                <p>Colorful Pattern Shirts </p>
                <p>Hot sale  -30%</p>
                <button>Buy now</button>

            </div>
        </section>
        <section className='grid grid-cols-6 pl-12 pt-9 pb-10'>
            <div>
                <img src='feature-1.png' className='object-cover w-28 h-28 rounded rounded-md cursor-pointer' />
                <button className='text-center rounded rounded-md bg-pink-100 hover:bg-pink-300 py-1 px-1 mt-2 '>Free shipping</button>
            </div>
            <div>
                <img src='feature-2.png' className='object-cover w-28 h-28 rounded rounded-md cursor-pointer ' />
                <button className='text-center rounded rounded-md bg-cyan-100 hover:bg-cyan-300 py-1 px-1 mt-2 '>Free shipping</button>
            </div>
            <div>
                <img src='feature-3.png' className='object-cover w-28 h-28 rounded rounded-md cursor-pointer' />
                <button className='text-center rounded rounded-md bg-green-100 hover:bg-green-300 py-1 px-1 mt-2 '>Free shipping</button>
            </div>
            <div>
                <img src='feature-4.png' className='object-cover w-28 h-28 rounded rounded-md cursor-pointer' />
                <button className='text-center rounded rounded-md bg-sky-100 hover:bg-sky-300 py-1 px-1 mt-2 '>Free shipping</button>
            </div>
            <div>
                <img src='feature-5.png' className='object-cover w-28 h-28 rounded rounded-md cursor-pointer' />
                <button className='text-center rounded rounded-md bg-gray-100 hover:bg-gray-300 py-1 px-1 mt-2 '>Free shipping</button>
            </div>
            <div>
                <img src='feature-6.png' className='object-cover w-28 h-28 rounded rounded-md cursor-pointer' />
                <button className='text-center rounded rounded-md bg-amber-100 hover:bg-amber-300 py-1 px-1 mt-2 '>Free shipping</button>
            </div>
        </section>




        <section className="flex pl-5 pl-5 pb-5">
            <button onClick={() => handleTabClick('tab1')}
                className={`text-center rounded rounded-md bg-pink-100 hover:bg-pink-300 py-1 px-1 mt-2 
                 {activeTab === 'tab1' ? 'active' : ''}`}
            >Featured</button>
            <button onClick={() => handleTabClick('tab2')}
                className={`text-center rounded rounded-md bg-pink-100 hover:bg-pink-300 py-1 px-1 mt-2 ml-2 mr-2
                 {activeTab === 'tab2' ? 'active' : ''}`}
            >Popular</button>
            <button onClick={() => handleTabClick('tab3')}
                className={`text-center rounded rounded-md bg-pink-100 hover:bg-pink-300 py-1 px-1 mt-2
                 {activeTab === 'tab3' ? 'active' : ''}`}
            >New Added</button>
        </section>

        <section className="tab-content">
            {activeTab === 'tab1' &&
                <div className=''>
                    <div className='grid grid-cols-4 items-center justify-center'>
                        {items1.map((item, index) => (
                            <div key={index}>
                                <div className='flex items-center justify-center'>
                                    <img
                                        src={index === hoveredImage ? item.imgHover : item.img}
                                        className='w-36'
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                </div>

                                <h1 className='text-center py-4'>{item.name}</h1>
                            </div>

                        ))}
                    </div>


                </div>
            }
            {activeTab === 'tab2' &&
                <div className=''>
                    <div className='grid grid-cols-4 items-center justify-center'>
                        {items2.map((item, index) => (
                            <div key={index}>
                                <div className='flex items-center justify-center'>
                                    <img
                                        src={index === hoveredImage ? item.imgHover : item.img}
                                        className='w-36'
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                </div>

                                <h1 className='text-center py-4'>{item.name}</h1>
                            </div>

                        ))}
                    </div>


                </div>
            }
            {activeTab === 'tab3' &&
                <div className=''>
                    <div className='grid grid-cols-4 items-center justify-center'>
                        {items3.map((item, index) => (
                            <div key={index}>
                                <div className='flex items-center justify-center'>
                                    <img
                                        src={index === hoveredImage ? item.imgHover : item.img}
                                        className='w-36'
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                </div>

                                <h1 className='text-center py-4'>{item.name}</h1>
                            </div>

                        ))}
                    </div>
                </div>
            }
        </section>

        <section className="relative flex items-center justify-center">
            <div className="">
                <img src="banner/banner-4.png" alt="" />
                <div className="absolute top-9">
                    <h4 className="text-center text-3xl pl-9">Repair Services</h4>
                    <h1 className="text-center pl-5 mt-9">We're an Apple </h1>
                    <h2 className="text-center pl-8 mb-9">Authorised Service Provider</h2>
                    <div className='pl-32 '>
                        <a href="" className="border py-1 px-2 bg-orange-400 hover:bg-orange-500">Learn More <i class='bx bx-right-arrow-alt'></i></a>
                    </div>
                </div>

            </div>
        </section>
        <section className='flex flex-col pt-10 pb-20'>
            <div className='flex'>
                <h1 className='text-orange-500 text-2xl pl-5 font-semibold'>Popular </h1>
                <p className='text-2xl pl-5 font-semibold'>Categories</p>

            </div>

            <div className='pt-10 flex '>

                <Swiper
                    loop
                    slidesPerView={6}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {items4.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='border rounded-md flex flex-col items-center justify-center'>
                                <img src={item.img} className='w-24 h-28 border rounded-md' />
                                <p>{item.title}</p>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
        <section class="flex px-9">


                <div class="grid grid-cols-3 gap-x-4">
                    {items5.map((item, index)=>(
                        <div class="grid-col-1">
                        <div class="relative">
                            <img src={item.img} alt={item.alt} />
                            <div class="absolute top-5">
                                <span className='text-xl pl-5'>{item.name}</span>
                                <h4 className='pl-3 pb-9'>{item.text}</h4>
                                <a href="shop.html"  className='text-center'>{item.buttom}</a>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                 </div>          
        </section>
    </>
    )

}