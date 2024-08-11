"use client"
import React, { useState } from 'react';
  

function LenguajesPage() {

   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
  
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
  


    return (
        <>
            <div className="col-span-3 lg:col-span-4">
                <ul className="flex">
                    <li className="relative flex items-center title-css ">
                        <a className="language-dropdown-active  " href="#" onClick={toggleDropdown}>
                            Select lenguage<i class='bx bx-chevron-down'></i>
                        </a>
                        <ul className={`absolute top-full left-0 z-10 min-w-24 bg-white rounded-b-lg border border-gray-200 shadow-md 
                                ${isDropdownOpen ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-250 ease-in-out`}>
                            <li><a href="#" >
                                <img src="flag-fr.png" alt="" className="inline-block max-w-5 mr-1" /> Portugues</a></li>
                            <li><a href="#" >
                                <img src="flag-dt.png" alt="" className="inline-block max-w-5 mr-1" /> Deutsch</a></li>
                            <li><a href="#" >
                                <img src="flag-ru.png" alt="" className="inline-block max-w-5 mr-1" /> English</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default LenguajesPage