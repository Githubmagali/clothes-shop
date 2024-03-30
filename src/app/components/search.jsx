"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Search() {

    return (<>

        <div className="flex justify-between pt-4 ">
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
        </div>
        <div className='grid grid-cols-3 pt-10'>
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
            <div className='col-span-2'>

            </div>
        </div>
        <div className='grid grid-cols-6 pl-12 pt-9 pb-10'>
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
        </div>


    </>
    )
}