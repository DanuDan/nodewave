"use client"

import Image from "next/image"
import ButtonSolid from "../Button/Solid"

export default function SectionStart() {

    function redirectWa() {
        window.open("https://wa.me/62811258280?text=Halo, Saya tertarik untuk membuat Website atau Mobile Apps", "_blank")
    }

    const rupiah = (number: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number).slice(0, -3);
    }

    const content = [
        {
            name: "Website",
            price: 1000,
            image: "WebsiteContentImg",
            discount: true,
        },
        {
            name: "Mobile Apps",
            price: 999,
            image: "AppsContentImg",
            discount: false,
        }
    ]

    return (
        <div className="w-screen h-auto relative" id="start">
            <div className="w-full p-2 md:p-10">
                <div className="w-full space-y-14 justify-center" >
                    <div className="text-4xl font-semibold text-center ">
                        Start Creating Websites or Mobile Apps For You Now
                    </div>
                    <div className="w-full flex-col md:flex-row flex space-x-0 md:space-x-20 space-y-10 md:space-y-0 items-center justify-center">
                        {content.map((item, i) => (
                            <div key={i} className="flex justify-between w-[262.5px] h-[165px] md:w-[525px] md:h-[330px] bg-white rounded-2xl">
                                <div className="w-[55%] h-full flex-col py-2 md:py-10 items-center">
                                    <div className="h-full flex flex-col space-y-2 md:space-y-5 items-center justify-between text-black">
                                        <div className={(item.discount === true ? " h-[60%] " : " h-[50%] ") + " flex flex-col items-center justify-between"}>
                                            <div className="text-lg md:text-3xl font-bold">
                                                {item.name}
                                            </div>
                                            <div className="space-y-1 flex-col text-center ">
                                                <div className="text-sm md:text-xl font-bold">
                                                    Start from
                                                </div>
                                                {item.discount === true ? (
                                                    <>
                                                        <div className="text-[#717171] flex line-through text-sm md:text-base decoration-[#FF3939] relative">
                                                            {rupiah(item.price * 1000)}
                                                            <Image src={require("@/assetts/icons/discount_icon.svg")} alt="discount" className="w-6 h-6 -right-2.5 -top-1 absolute " />
                                                        </div>
                                                        <div className="text-xs md:text-sm font-semibold">
                                                            {rupiah((item.price / 2) * 1000)}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="text-xs md:text-sm font-semibold">
                                                            {rupiah(item.price * 1000)}
                                                        </div>
                                                    </>
                                                )
                                                }
                                            </div>
                                        </div>
                                        <div className={(item.discount === true ? "items-center  h-[40%] " : "items-center md:items-end h-[50%] ") + " flex "}>
                                            <ButtonSolid className="w-32 " click={redirectWa} title="Order Now" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[45%] h-full">
                                    <Image src={require(`@/assetts/${item.image}.svg`)} alt="content" className="w-full h-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}