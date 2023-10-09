"use client"

import Image from "next/image"
import { useState } from "react"


export default function SectionProduct() {

    function start() {
        document.getElementById("start")?.scrollIntoView({ behavior: 'smooth' });
    } 

    const content = [
        {
            id: 1,
            name: "Mobile Apps",
            icon: "mobile_apps_icons",
            desc: " Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.",
            image: "MobileAppsContent"
        },
        {
            id: 2,
            name: "Website",
            icon: "website_icons",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
            image: "MobileAppsContent",
        }
    ]


    const [pointer, setPointer] = useState(content[0])

    const testimony = [
        {
            desc: "Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.",
            name: "Ahmad Prasetyo"
        },
        {
            desc: "Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.",
            name: "Laras Ratnadewi"
        },
        {
            desc: "Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!",
            name: "Yusuf Uwais"
        }
    ]

    return (
        <div className="w-screen h-auto relative" id="product" >
            <div className="w-full space-y-8 md:space-y-0">
                <div className="w-full flex justify-center">
                    <div className="text-3xl absolute -top-14 font-semibold">
                        Our Product
                    </div>
                </div>
                <div className="w-full row md:flex p-0 md:p-20 justify-between h-auto space-y-5 md:space-y-0 space-x-0 md:space-x-5 ">
                    <div className="w-full md:w-[40%] flex flex-col items-center md:items-end justify-center ">
                        <div className=" flex md:flex-col justify-center items-center space-x-5 md:space-x-0 space-y-0 md:space-y-5" >
                            {content.map((item, i) => (
                                <div onClick={() => setPointer(item)} key={i} className={`${pointer.id == item.id ? "bg-white w-[10rem] h-[10rem] md:w-[428px] md:h-[217px] " : "bg-black border-white border  w-[9rem] h-[9rem] md:w-[388px] md:h-[174px]"} cursor-pointer flex flex-col items-center justify-center rounded-3xl`}>
                                    <div className="w-full flex md:items-center pl-4 pr-4 md:pl-8 md:pr-6 ">
                                        <div className="w-full md:w-[85%] flex-col md:flex-row flex justify-center items-center space-x-0 md:space-x-4">
                                            <Image src={require(`@/assetts/icons/${item.icon}.svg`)} alt="icons" className=" w-16 h-16 rounded-lg " />
                                            <div className={`${pointer.id == item.id ? " text-black " : "text-white"} w-full text-left`}>
                                                <div className=" text-base md:text-2xl font-semibold whitespace-nowrap">
                                                    {item.name}
                                                </div>
                                                <div className={`${pointer.id == item.id ? "text-xs md:text-base " : "text-xs md:text-sm line-clamp-2 "}`}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden w-full md:w-[15%] h-full md:flex justify-center items-end">
                                            <Image src={require("@/assetts/icons/arrow_right_orange_icons.svg")} alt="icons" className=" w-5 h-5 " />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-[60%] flex flex-col justify-center px-5 md:px-0">
                        <div className="flex flex-col items-center justify-center w-auto h-full py-5 md:py-0 md:w-[688px] md:h-[415px] bg-white rounded-3xl">
                            <div className="w-full flex flex-col items-center justify-center">
                                < Image src={require(`@/assetts/${pointer.image}.svg`)} alt="icons" className=" w-50 h-50 rounded-lg " />
                                <div className="w-full px-12 py-5 text-center space-y-5 text-black">
                                    <div className="text-3xl font-semibold">
                                        {pointer?.name}
                                    </div>
                                    <div className="text-sm">
                                        {pointer?.desc}
                                    </div>
                                </div>
                                <button onClick={start} className=" bg-primary py-3 px-6 rounded-xl ">
                                    Pelajari Selengkapnya
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="px-5 md:px-16 text-2xl ">
                        Testimony
                    </div>
                    <div className="w-full flex space-x-5 overflow-x-auto px-5 md:px-16">
                        {
                            testimony.map((item, i) => (
                                <div key={i} className="max-h-40 p-5 bg-white space-y-2 flex flex-col justify-between text-sm w-auto min-w-[422px] text-black rounded-lg">
                                    <div className="text-xs md:text-sm font-semibold max-h-40">
                                        {item.desc}
                                    </div>
                                    <div className="text-primary text-base md:text-lg">
                                        {item.name}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}