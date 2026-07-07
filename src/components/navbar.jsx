"use client"
import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";
import './navbar.css';
import LenguajesPage from "./lenguajes";


export default function Navbar() {


  const [isOpen, setIsOpen] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);
  

  const toggleDrop = () => {
      setIsOpen(!isOpen);
    };
  
    const toggleSelect = () => {
      setSelectOpen(!selectOpen);
    };
 


    return (<>
      <>
            <div className="flex lg:px-10 justify-between bg-yellow-100 pt-3 container-main-css">
              <LenguajesPage />
                <div className="col-span-3">
                    <div className="text-center">
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
                                className="h-10 swiper-css"
                                
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
                <div className="col-xl-3 col-lg-4">
                    <div className="container-login-css">
                        <ul>
                            <li><i className="fi-rs-key"></i><a href="login.html" className="login-css">Log In </a>  / <a href="register.html" className="login-css">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="flex justify-between pt-2 ">
        <div className="col-span-3 lg:col-span-4">
          <div className="pl-4">
            <Link href="/">
            <i className="bx bx-closet text-2xl"></i>
            </Link>
           
          </div>
        </div>
        <div className="col-span-3 lg:col-span-4">
          <form action="#">
            <i className="bx bx-search-alt-2"></i>
            <input
              type="text"
              placeholder="Search for items..."
              className="pl-2 rounded-md "
            />
          </form>
        </div>
        <div className="col-span-3 lg:col-span-4">
          <div className="pr-4">
            <Link href="/checkout">
            <i className="bx bxs-shopping-bags text-2xl"></i>
            </Link>
            
          </div>
        </div>
      </section>






      <section className="flex lg:pr-8 pt-5 navbar-sections-seconds-css">
        <div className="px-2">Home</div>

        <ul className="flex">
          <li className="relative flex items-center">
            <a
              className=""
              href="#"
              onMouseEnter={toggleDrop}
              onMouseLeave={toggleDrop}
            >
              Our collection <i className="bx bx-chevron-down"></i>
              <ul
                className={`absolute lg:top-full left-0 z-10 bg-white  shadow-md 
                                ${
                                  isOpen
                                    ? "visible opacity-100"
                                    : "invisible opacity-0"
                                } transition-all duration-250 ease-in-out`}
              >
                <div className="lg:grid lg:grid-cols-4 our-collection lg:gap-y-3 lg:gap-x-4 grid-content-css">
                  <div className="lg:grid-col-1 container-text-grid-css">
                    <h1 className="text-center  text-yellow-400 p-3">
                      Women's fashion
                    </h1>
                    <p className="pl-3">Dresses</p>
                    <p className="pl-3">Shirts</p>
                    <p className="pl-3">Hiddies</p>
                    <p className="pl-3">Shoes</p>
                  </div>
                  <div className="lg:grid-col-1 container-text-grid-css">
                    <h1 className="text-center  text-yellow-400 p-3">
                      Men's fashion
                    </h1>
                    <p className="pl-3">Dresses</p>
                    <p className="pl-3">Shirts</p>
                    <p className="pl-3">Hiddies</p>
                    <p className="pl-3">Shoes</p>
                  </div>
                  <div className="lg:grid-col-1 container-text-grid-css">
                    <h1 className="text-center  text-yellow-400 p-3">
                      Technology
                    </h1>
                    <p className="pl-3">Tablets</p>
                    <p className="pl-3">Laptop</p>
                    <p className="pl-3">Ultraslim</p>
                    <p className="pl-3">Headphones</p>
                  </div>
                  <div className="lg:grid-col-1 ">
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
              Sections <i className="bx bx-chevron-down"></i>
              <ul
                className={`absolute top-full left-0 z-10 bg-white  shadow-md  lg:w-32 lg:h-28 pt-5 selections-conteiner-navbar-css
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
    </>
      
    )
}
