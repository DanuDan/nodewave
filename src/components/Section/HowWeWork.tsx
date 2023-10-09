"use client"

import Image from "next/image"

import bg from "@/assetts/HowWeWorkBG.svg"
import bgSec from "@/assetts/howWeWorkContentBG.svg"


export default function SectionHowWeWork() {
    return (
        <div className="w-screen h-auto py-10 bg-cover " style={{ backgroundImage: `url(${bg.src})` }}>
            <div className="w-full text-center space-y-20">
                <div className="text-3xl  font-semibold ">
                    How We Work
                </div>
                <div className="w-full flex justify-center">
                    <div style={{ backgroundImage: `url(${bgSec.src})` }} className="bg-cover w-[386.5px] md:w-[773px] h-[251px] md:h-[502px] space-x-5 md:space-x-10 rounded-3xl flex items-center p-4 md:p-8 ">
                        <Image src={require("@/assetts/ChatHowWeWork.svg")} alt="bg our work" className=" w-[144.5px] md:w-[289px] h-[222px] md:h-[444px] rounded-lg " />
                        <div className="flex-col w-full h-full space-y-2 md:space-y-4 flex py-5 text-left">
                            <div className="text-xl md:text-2xl font-semibold tracking-wider ">
                                Estimate
                            </div>
                            <div className="text-sm text-left w-[10.75rem] md:w-[21.5rem] md:text-xl font-thin">
                                Estimate the cost of creating your application with us. Pricing is transparent at the start with a gradual payment method.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}