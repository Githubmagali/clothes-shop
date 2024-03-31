"use client"
import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export default function Navbar() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
   


    return (
        <>
            <div className="flex px-10 justify-between bg-yellow-100 pt-3">
                <div className="col-span-3 lg:col-span-4">
                    <ul className="flex">
                        <li className="relative flex items-center">
                            <a className="language-dropdown-active" href="#" onClick={toggleDropdown}>
                                English <i class='bx bx-chevron-down'></i>
                            </a>
                            <ul className={`absolute top-full left-0 z-10 min-w-24 bg-white rounded-b-lg border border-gray-200 shadow-md 
                                ${isDropdownOpen ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-250 ease-in-out`}>
                                <li><a href="#"><img src="flag-fr.png" alt="" className="inline-block max-w-5 mr-1" /> Français</a></li>
                                <li><a href="#"><img src="flag-dt.png" alt="" className="inline-block max-w-5 mr-1" /> Deutsch</a></li>
                                <li><a href="#"><img src="flag-ru.png" alt="" className="inline-block max-w-5 mr-1" /> Pусский</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="col-span-3">
                    <div class="text-center">
                        <div>
                            <Swiper
                                loop
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                direction={'vertical'}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Navigation]}
                                className="h-10"
                            >
                                <ul>
                                    <SwiperSlide className="bg-yellow-100">Get great devices up to 50% off <a href="shop.html">View details</a></SwiperSlide>
                                    <SwiperSlide className="bg-yellow-100">Supper Value Deals - Save more with coupons</SwiperSlide>
                                    <SwiperSlide className="bg-yellow-100">Trendy 25silver jewelry, save up 35% off today <a href="shop.html">Shop now</a></SwiperSlide>
                                </ul>
                            </Swiper>

                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4">
                    <div class="">
                        <ul>
                            <li><i class="fi-rs-key"></i><a href="login.html">Log In </a>  / <a href="register.html">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex pt-9 ">
                <div className="flex">

                </div>
              

            </div>
        </>
    )
}
