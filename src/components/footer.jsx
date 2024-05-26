import './footer.css'

export default function Footer() {

    return (
        <>
            <selection className="grid lg:grid-cols-3 pt-4 bg-yellow-100 w-full pb-20 selection-footer-css">
                <div className="pl-9 flex"><i class='bx bxs-envelope  lg:text-3xl icon-card-css'></i>
                    <h1 className="text-center text-xl pl-4 footer-title-css">Sign up to Newsletter</h1>
                    </div>
                <div>
                    <p className='footer-title-css'>...and receive $25 coupon for first shopping.</p>
                </div>
                <div className="grid-col-1 gap-x-4 ">
                    <input type="email" placeholder="Enter your name" className="w-64 h-8 " />
                    <button className="pl-2 bg-black text-white px-2 h-8 hover:bg-orange-400">Send</button>
                </div>
            </selection>

            <selection className="grid grid-cols-4 pt-9 pb-5 selection-footer-second-css">
                <div className="grid-col-1 pl-4">
                    <i class="bx bx-closet text-4xl"></i>
                    <h1 className="font-bold text-gray-400">Contact</h1>
                    <div className="text-gray-400">
                        <p>562 Wellington Road</p>
                        <p>+54 11 233 43424</p>
                        <p>contact@mail.com</p>
                    </div>
                </div>
                <div className="grid-col-1">
                    <h1 className="text-xl font-bold">About</h1>
                    <div className="text-gray-400">
                        <p>About us</p>
                        <p>Delivery Information</p>
                        <p>Privacy Policy</p>
                        <p>Terms &amp; Conditions</p>
                        <p>Contact Us</p>
                    </div>
                </div>

                <div className="grid-col-1">
                    <h1 className="text-xl font-bold">My Acount</h1>
                    <div className="text-gray-400">
                        <p>My account</p>
                        <p>View cart</p>
                        <p>My wishlist</p>
                        <p>Track my order</p>
                        <p>Order</p>
                    </div>
                </div>
                <div className="grid-col-1">
                    <h1 className="text-xl font-bold">Install App</h1>
                    <p>From app Store or Google play</p>
                    <div className="pt-9">
                        <img src="/payment-method.png" />
                    </div>
                </div>

            </selection>
            <div class=" flex justify-center border border-gray-200 w-full"></div>

            <selection className="">
                <div className="flex justify-between pl-9  pt-9 pb-9" >
                    <div className="flex">
                        <p className=" text-orange-400">Privacity policy </p>
                        <p className="pl-5">|</p>
                        <p className=" text-orange-400 pl-5">Terms and condicion</p>

                    </div>
                    <div className="flex pr-9 ">
                        <p>&copy;All right reserved</p>
                    </div>

                </div>
            </selection>

        </>
    )
}