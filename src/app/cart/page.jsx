export default function CartPage() {

    return (
        <>

            <h1 className="flex text-center p-20 text-xl ">Cart</h1>
            <div className="grid grid-cols-6 items-center justify-center ">
                <div className="grid-col-1">
                    <img />
                </div>
                <div className="grid-col-1 items-center justify-center">
                    <h1 className="font-bold">Name</h1>
                </div>
                <div className="grid-col-1 items-center justify-center">
                    <h1 className="font-bold">Price</h1>
                </div>
                <div className="grid-col-1 items-center justify-center">
                    <h1 className="font-bold">Quantity</h1>
                </div>
                <div className="grid-col-1 items-center justify-center">
                    <h1 className="font-bold">Subtotal</h1>
                </div>
                <div className="grid-col-1 items-center justify-center ">
                    <h1 className="font-bold">Remove</h1>
                </div>
            </div>
            <div className="pl-12 pr-12">
                <div class="border bg-gray-100 w-full"></div>
            </div>

            <div className="grid grid-cols-6 items-center justify-center pt-20 pb-20">
                <div className="grid-col-1">
                    <img />
                </div>
                <div className="grid-col-1 items-center justify-center">
                    <h1 className="font-bold">Name</h1>
                </div>
                <div className="grid-col-1 items-center justify-center">
                    <h1 className="font-bold">Price</h1>
                </div>
                <div className="grid-col-1 items-center justify-center">
                    <h1 className="font-bold">Quantity</h1>
                </div>
                <div className="grid-col-1 items-center justify-center">
                    <h1 className="font-bold">Subtotal</h1>
                </div>
                <div className="grid-col-1 items-center justify-center ">
                    <h1 className="font-bold">Remove</h1>
                </div>
            </div>

            <div class="border  bg-gray-100 w-full "></div>
            <div className="grid grid-cols-2 pt-20 pl-20">
                <div className="flex flex-col pb-20">
                    <h1 className="pl-16 font-bold text-2xl">Calculate shipping</h1>
                    <p className="pt-10 pl-10 text-xl">Flat rate: 5%</p>
                    <div className="pt-20 pb-10 ">
                        <select>
                            <option>Choose option</option>
                            <option>Loma Hermosa</option>
                            <option>Punta Alta</option>
                            <option>Adrogue</option>
                            <option>Loma Hermosa</option>
                        </select>
                    </div>
                    <div className="flex">
                        <div className=" pr-5">
                            <input placeholder="State" className="border" />
                        </div>
                        <input placeholder="Codigo postal " className="border" />
                    </div>
                    <div className="pt-10">
                        <button className="py-3 px-5 bg-orange-500 text-white hover:bg-orange-700 rounded  rounded-lg">
                    Update</button>
                    </div>
                    <div className="pt-16">
                    <h1 className=" font-bold text-xl">Apply Coupon</h1>

                    <div className="flex pt-10">
                        <input placeholder="Enter your cupon..." className="border py-3 px-4"/>
                        <div className="pl-3">
                        <button className="py-3 px-5 bg-orange-500 text-white hover:bg-orange-700 rounded  rounded-lg">Apply</button>
                        </div>
                       
                    </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="border pt-6 pl-6 pb-6 ">
                <h1 className="pl-16 font-bold text-2xl ">Cart Totals</h1>
                <div className="grid grid-cols-2 pt-16  pr-10">
                    <p className="border p-5">Cart subtotal</p>
                    <p className="border p-5">$344</p>
                    <p className="border p-5">Shipping</p>
                    <p className="border p-5">Free Shipping</p>
                    <p className="border p-5">Total</p>
                    <p className="border p-5">$34234</p>
                    <div className="pt-6">
                        <button className="py-3 px-5 bg-orange-500 text-white hover:bg-orange-700 rounded  rounded-lg">
                            Proceded to checkout
                        </button>
                    </div>
                </div>
                </div>

                </div>

            </div>

        </>
    )
}