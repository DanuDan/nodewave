"use client"

import Image from "next/image"
import bg from "@/assetts/ourWorkBG.svg"
import bgSec from "@/assetts/ourWorkSecBG.svg"


export default function SectionOurWork() {

    const content = [
        {
            name: "Rayu Motor",
            desc: "AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales",
            image: "RayuMotor",
            background: `${bg.src}`,
        },
        {
            name: "Jasabung",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            image: "Jasabung",
            background: `${bgSec.src}`
        }
    ]
    return (
        <div className="w-screen h-auto py-20 " id="porto" >
            <div className="w-full space-y-20 ">
                <div className="w-full flex justify-center">
                    <div className="text-3xl font-semibold ">
                        Our Works
                    </div>
                </div>
                <div className="w-full flex items-center px-2 md:px-20 space-x-10 overflow-auto ">
                    {
                        content.map((item, i) => (
                            <div key={i} className="w-auto h-auto ">
                                <div style={{ backgroundImage: `url(${item.background})` }} className="bg-cover w-[436.5px] h-[260px] md:w-[873px] md:h-[520px] space-x-2 md:space-x-4 rounded-3xl flex items-center pl-5 ">
                                    <Image src={require(`@/assetts/${item.image}.svg`)} alt="bg our work" className=" w-[288.5px] h-[10.25rem] md:w-[557px] md:h-[20.5rem] rounded-lg " />
                                    <div className="flex-col w-full h-[10.25rem] md:h-[20.5rem] space-y-4 flex py-0 md:py-5 text-center">
                                        <div className="text-base md:text-3xl font-semibold">
                                            {item.name}
                                        </div>
                                        <div className="text-left text-xs w-[7.75rem] md:w-[15.5rem] md:text-lg font-light ">
                                            {item.desc}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}