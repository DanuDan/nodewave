"use client"
import bg from "@/assetts/CodingBG.svg"
import ButtonSolid from "../Button/Solid"
import Image from "next/image"

export default function SectionHero() {

    function start() {
        document.getElementById("start")?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="w-screen h-screen " id="landing" >
            <div className="w-full h-full relative">
                <div className="w-full h-full flex items-center ">
                    <div className="container absolute z-10  max-w-5xl space-y-6 pl-3 md:pl-20 text-white">
                        <div className="text-xl md:text-5xl flex flex-col tracking-wider space-y-2 md:space-y-5 font-semibold text-left">
                            <div className="flex-col">
                                <Image src={require(`@/assetts/icons/code_icon.svg`)} alt="code_icon" className="w-8 h-8 md:w-10 md:h-10" />
                                Make Your Own
                            </div>
                            <div>Website and Mobile Application</div>
                            <div className="flex ">
                                With Nodewave
                                <Image src={require(`@/assetts/icons/idea_icon.svg`)} alt="code_idea" className="w-10 h-10 md:w-14 md:h-14 " />
                            </div>
                        </div>
                        <div>
                            <ButtonSolid className="w-auto" click={start} title="Get Started Now" />
                        </div>
                        <div className="text-md md:text-2xl max-w-[20rem] md:max-w-[58rem]">
                            Create Mobile Applications and Websites for Companies or Your Business
                            Have a transparent pricing, easy and straightforward development process
                        </div>
                    </div>
                    <div className="w-full h-full bg-right-top md:bg-no-repeat md:bg-cover relative flex items-end" style={{ backgroundImage: `url(${bg.src})` }}>
                        <div className=" h-80 w-full absolute bg-gradient-to-b from-transparent via-black to-black" />
                    </div>
                </div>
            </div>
        </div>
    )
}