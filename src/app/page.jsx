"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { items1, items2, items3, items4, items5, items6 } from "@/assets/shop-1";
import { useState } from "react";
import './pageMain.css';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [hoveredImage, setHoveredImage] = useState(null);


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

 

  return (
    <>
 
      <section className="grid grid-cols-3 pt-10">
        <div className="grid-col-1 gap-y-20">
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
            <SwiperSlide>
              <img src="./clothes-1.jpg" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./clothes-2.jpg" className="object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./clothes-3.jpg" className="object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col col-span-2 items-center justify-center">
          <h1 className="text-5xl">Clothes</h1>
          <p>Colorful Pattern Shirts </p>
          <p>Hot sale -30%</p>
          <button>Buy now</button>
        </div>
      </section>
      <section className="grid grid-cols-6 pl-12 pt-9 pb-10 shop-free-css">
        <div className="container-img-free">
          <img
            src="feature-1.png"
            className="object-cover w-28 h-28 rounded rounded-md cursor-pointer img-free-css"
          />
          <button className="text-center rounded rounded-md bg-pink-100 hover:bg-pink-300 py-1 px-1 mt-2 btn-free-css ">
            Free shipping
          </button>
        </div>
        <div className="container-img-free">
          <img
            src="feature-2.png"
            className="object-cover w-28 h-28 rounded rounded-md cursor-pointer img-free-css"
          />
          <button className="text-center rounded rounded-md bg-cyan-100 hover:bg-cyan-300 py-1 px-1 mt-2 btn-free-css">
            Free shipping
          </button>
        </div>
        <div className="container-img-free">
          <img
            src="feature-3.png"
            className="object-cover w-28 h-28 rounded rounded-md cursor-pointer img-free-css"
          />
          <button className="text-center rounded rounded-md bg-green-100 hover:bg-green-300 py-1 px-1 mt-2 btn-free-css">
            Free shipping
          </button>
        </div>
        <div className="container-img-free">
          <img
            src="feature-4.png"
            className="object-cover w-28 h-28 rounded rounded-md cursor-pointer img-free-css"
          />
          <button className="text-center rounded rounded-md bg-sky-100 hover:bg-sky-300 py-1 px-1 mt-2 btn-free-css">
            Free shipping
          </button>
        </div>
        <div className="container-img-free">
          <img
            src="feature-5.png"
            className="object-cover w-28 h-28 rounded rounded-md cursor-pointer img-free-css"
          />
          <button className="text-center rounded rounded-md bg-gray-100 hover:bg-gray-300 py-1 px-1 mt-2 btn-free-css ">
            Free shipping
          </button>
        </div>
        <div className="container-img-free">
          <img
            src="feature-6.png"
            className="object-cover w-28 h-28 rounded rounded-md cursor-pointer img-free-css"
          />
          <button className="text-center rounded rounded-md bg-amber-100 hover:bg-amber-300 py-1 px-1 mt-2 btn-free-css">
            Free shipping
          </button>
        </div>
      </section>

      <section className="flex pl-5 pl-5 pb-5">
        <button
          onClick={() => handleTabClick("tab1")}
          className={`text-center rounded rounded-md bg-pink-100 hover:bg-pink-300 py-1 px-1 mt-2 
                 {activeTab === 'tab1' ? 'active' : ''}`}
        >
          Featured
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          className={`text-center rounded rounded-md bg-pink-100 hover:bg-pink-300 py-1 px-1 mt-2 ml-2 mr-2
                 {activeTab === 'tab2' ? 'active' : ''}`}
        >
          Popular
        </button>
        <button
          onClick={() => handleTabClick("tab3")}
          className={`text-center rounded rounded-md bg-pink-100 hover:bg-pink-300 py-1 px-1 mt-2
                 {activeTab === 'tab3' ? 'active' : ''}`}
        >
          New Added
        </button>
      </section>

      <section className="tab-content">
        {activeTab === "tab1" && (
          <div className="">
            <div className="grid grid-cols-4 items-center justify-center">
              {items1.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-center">
                    <img
                      src={index === hoveredImage ? item.imgHover : item.img}
                      className="w-36"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>

                  <h1 className="text-center py-4">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="">
            <div className="grid grid-cols-4 items-center justify-center">
              {items2.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-center">
                    <img
                      src={index === hoveredImage ? item.imgHover : item.img}
                      className="w-36"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>

                  <h1 className="text-center py-4">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="">
            <div className="grid grid-cols-4 items-center justify-center">
              {items3.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-center">
                    <img
                      src={index === hoveredImage ? item.imgHover : item.img}
                      className="w-36"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>

                  <h1 className="text-center py-4">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="relative flex items-center justify-center">
        <div className="">
          <img src="banner/banner-4.png" alt="" />
          <div className="absolute lg:top-9 banner-text-css ">
            <h4 className="text-center lg:text-3xl lg:pl-9   title-repair-css">Repair Services</h4>
            <h1 className="text-center pl-5 lg:mt-9 title-repair-css">We're an Apple </h1>
            <h2 className="text-center lg:pl-8 lg:mb-9 title-repair-css ">
              Authorised Service Provider
            </h2>
            <div className="pl-32 learn-more-btn-css">
              <a
                href=""
                className="border py-1 px-2 bg-orange-400 hover:bg-orange-500"
              >
                Learn More <i class="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col pt-10 pb-20">
        <div className="flex">
          <h1 className="text-orange-500 text-2xl pl-5 font-semibold">
            Popular{" "}
          </h1>
          <p className="text-2xl pl-5 font-semibold">Categories</p>
        </div>

        <div className="pt-10 flex ">
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
                <div className="border rounded-md flex flex-col items-center justify-center">
                  <img src={item.img} className="lg:w-24 lg:h-28 border rounded-md" />
                  <p className="title-swiper-css">{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section class="flex px-9">
        <div class="grid grid-cols-3 gap-x-4">
          {items5.map((item, index) => (
            <div  key={index} class="grid-col-1">
              <div class="relative">
                <img src={item.img} alt={item.alt} className="img-map-5-css" />
                <div class="absolute lg:top-1 container-color-css">
                  <span className="text-xl pl-5 text-container-map-css">{item.name}</span>
                  <h4 className="pl-3 pb-9 text-container-map-css">{item.text}</h4>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col pt-10 pb-20">
        <div className="flex">
          <h1 className="text-orange-500 text-2xl pl-5 font-semibold">
            Featured{" "}
          </h1>
          <p className="text-2xl pl-5 font-semibold">Brands</p>
        </div>

        <div className="pt-10 flex ">
          <Swiper
            loop
            slidesPerView={4}
            spaceBetween={20}
            centeredSlides={true}
            speed={800} 
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {items6.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.img} className="border rounded-md" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      
    </>
  );
}
