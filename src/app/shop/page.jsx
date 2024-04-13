"use client"
import { useState } from "react"
import { CartItems } from "@/assets/cart"
import { useCart } from "@/context/page"

export default function Shop() {

    const { cart, addToCart, removeFromCart, getItemQuantity } = useCart()



    return (
        <>
            <div className="flex flex-col p-20">
                <h1 className="p-10 text-xl">Women's</h1>
                <div className="grid grid-cols-3  justify-center">
                    {CartItems.map((item, index) => (
                       <div key={index} className={`flex grid grid-cols-1 ${item.soldOut ? "filter grayscale opacity-80 text-center" : ""}`}
                       > <div className="" key={index}>
                                <img src={item.img} className="w-72 object-cover" />
                            </div>
                            <p className="font-bold pl-5">{item.name}</p>
                            <p className="pl-6">{item.description}</p>
                            <p className="text-center">${item.price}</p>
                            {getItemQuantity(item.id) > 0 ? (
                            <div className="flex p-10 gap-x-9">
                                <div>
                            <button onClick={()=>addToCart(item)} className="bg-gray-400 py-1 px-2 rounded-md hover:bg-gray-600">+</button>
                            </div>
                            <p>{getItemQuantity(item.id)}</p>
                            <button onClick={()=>removeFromCart(item.id)}className="bg-gray-200 py-1 px-2 rounded-md hover:bg-gray-400">-</button>
                            </div>
                            ) :(
                                <div className="p-5 flex justify-center">
                            <button disabled={item.soldOut}
                            onClick={()=>addToCart(item)}
                            
                            className="bg-gray-200 py-1 px-2 rounded-md hover:bg-gray-400"> {item.soldOut ? 'Sold Out' : 'Add to cart'}</button>
                            </div>
                            )}

                        </div>
                    ))}

                </div>


            </div>


        </>
    )
}