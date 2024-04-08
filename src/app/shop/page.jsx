import { CartItems } from "@/assets/cart"

export default function Shop() {

    return (
        <>
            <div className="flex flex-col p-20">
                <h1 className="p-10 text-xl">Women's</h1>
                <div className="grid grid-cols-3  justify-center">
                    {CartItems.map((item, index) => (
                        <div className="grid-col-1">
                            <div className="" key={index}>
                                <img src={item.img} className="w-72 object-cover" />
                            </div>
                            <p className="font-bold">{item.name}</p>
                            <p>{item.description}</p>
                            <p>${item.price}</p>

                        </div>
                    ))}
            

                </div>
                <h1 className="p-10 text-xl">Titulo</h1>
                <div className="grid grid-cols-3  justify-center">
                    
                    {CartItems.map((item, index) => (
                        <div className="grid-col-1">
                            <div className="" key={index}>
                                <img src={item.img} className="w-72 object-cover" />
                            </div>
                            <p className="font-bold">{item.name}</p>
                            <p>{item.description}</p>
                            <p>${item.price}</p>

                        </div>
                    ))}
            

                </div>

            </div>


        </>
    )
}