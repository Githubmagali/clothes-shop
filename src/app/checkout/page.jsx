export default function CheckOut() {

    return (
        <>
            <div className="flex flex-col p-20">
                <h1 className="text-gray-800">Checkout</h1>
                <div className="grid grid-cols-2 p-10">
                    <div className="grid-col-1">
                        <h2 className="font-bold">Billing Details</h2>
                        <form className=" flex flex-col gap-y-10 p-10">
                            <input type="text" name="name" placeholder="Fullname" className="border" />
                            <input type="text" name="address" placeholder="Address" className="border" />
                            <input type="text" name="phone" placeholder="Phone number" className="border" />
                            <input type="email" name="email" placeholder="Email" className="border" />
                            <input type="text" name="cp" placeholder="Post code/ZIP" className="border" />
                            <div className="flex gap-x-4">
                                <p className="text-gray-600">Rememberme</p>
                                <input className="border" type="checkbox" name="checkbox" id="remember" />
                            </div>
                            <textarea rows="5" placeholder="Order notes....." className="textarea border"></textarea>

                        </form>
                    </div>
                    <div className="grid-col-1 border p-10">
                        <h2 className="font-bold pb-10">Your orders</h2>
                        <div className="grid grid-cols-2 border p-4 ">
                            <h3 className=" text-center font-bold">Products</h3>
                            <h3 className=" text-center font-bold">Total</h3>
                        </div>
                        <div className="grid grid-cols-2 border p-4 ">

                        </div>
                        <div className="flex flex-col gap-y-3 justify-center">
                            <p className="border">Subtotal</p>
                            <p className="border">Shipping</p>
                            <p className="border">Total</p>
                        </div>
                        <div className="flex flex-col p-10">
                            <h1 className="font-bold pb-10">Payment</h1>
                            <div className="grid grid-cols-2">
                               
                                <input name="payment" className="w-4 float-right" type="radio" />
                                <p >Card Payment</p>
                                <input name="payment" className="w-4 float-right" type="radio" />
                                <p>Paypal</p>
                                <input name="payment" className="w-4 float-right" type="radio" />
                                <p>Cash On Delivery</p>
                               
                            </div>
            
                        </div>
                        <button className="py-4 px-6 border font-bold rounded-md bg-orange-600 hover:bg-orange-800 text-white">Place order</button>
                    </div>


                </div>
            </div>
        </>
    )
}