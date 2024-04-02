"use client"
import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export default function Navbar() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectOpen, setSelectOpen] = useState(false);
    

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDrop = () => {
        setIsOpen(!isOpen);
      };
    
      const toggleSelect = () => {
        setSelectOpen(!selectOpen);
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
            <section className="flex justify-between pt-2 ">
        <div className="col-span-3 lg:col-span-4">
          <div className="pl-4">
            <i class="bx bx-closet text-2xl"></i>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-4">
          <form action="#">
            <i class="bx bx-search-alt-2"></i>
            <input
              type="text"
              placeholder="Search for items..."
              className="pl-2 rounded-md "
            />
          </form>
        </div>
        <div className="col-span-3 lg:col-span-4">
          <div className="pr-4">
            <i class="bx bxs-shopping-bags text-2xl"></i>
          </div>
        </div>
      </section>






      <section className="flex pr-8 pt-5">
        <div className="px-2">Home</div>

        <ul className="flex">
          <li className="relative flex items-center">
            <a
              className=""
              href="#"
              onMouseEnter={toggleDrop}
              onMouseLeave={toggleDrop}
            >
              Our collection <i class="bx bx-chevron-down"></i>
              <ul
                className={`absolute top-full left-0 z-10 bg-white  shadow-md 
                                ${
                                  isOpen
                                    ? "visible opacity-100"
                                    : "invisible opacity-0"
                                } transition-all duration-250 ease-in-out`}
              >
                <div className="grid grid-cols-4 our-collection gap-y-3 gap-x-4 ">
                  <div className="grid-col-1">
                    <h1 className="text-center  text-yellow-400 p-3">
                      Women's fashion
                    </h1>
                    <p className="pl-3">Dresses</p>
                    <p className="pl-3">Shirts</p>
                    <p className="pl-3">Hiddies</p>
                    <p className="pl-3">Shoes</p>
                  </div>
                  <div className="grid-col-1">
                    <h1 className="text-center  text-yellow-400 p-3">
                      Men's fashion
                    </h1>
                    <p>Dresses</p>
                    <p>Shirts</p>
                    <p>Hiddies</p>
                    <p>Shoes</p>
                  </div>
                  <div className="grid-col-1">
                    <h1 className="text-center  text-yellow-400 p-3">
                      Technology
                    </h1>
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
            </a>
          </li>
        </ul>
        <div className="px-2">About</div>
        <div className="px-2">Shop</div>
        <ul className="relative flex">
          <li className="relative">
            <a
              className="px-3"
              onMouseEnter={toggleSelect}
              onMouseLeave={toggleSelect}
            >
              Sections <i class="bx bx-chevron-down"></i>
              <ul
                className={`absolute top-full left-0 z-10 bg-white  shadow-md  w-32 h-28 pt-5
                    ${
                      selectOpen ? "visible opacity-100" : "invisible opacity-0"
                    } transition-all duration-250 ease-in-out`}
              >
                <p>Womens</p>
                <p>Man</p>
                <p>Children</p>
              </ul>
            </a>
          </li>
        </ul>
        <div className="px-2">Blog</div>
        <div className="px-2">Contact</div>
        <div className="px-2">My account</div>
      </section>

        </>
    )
}
