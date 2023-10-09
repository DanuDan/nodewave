'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import ButtonSolid from "../Button/Solid"

export default function BaseNavbar() {


    const [toggle, setToggle] = useState(false)
    const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

    function landing() {
        document.getElementById("landing")?.scrollIntoView({ behavior: 'smooth' });
    }

    function product() {
        document.getElementById("product")?.scrollIntoView({ behavior: 'smooth' });
    }

    function porto() {
        document.getElementById("porto")?.scrollIntoView({ behavior: 'smooth' });
    }

    function start() {
        document.getElementById("start")?.scrollIntoView({ behavior: 'smooth' });
    }



    useEffect(() => {
        function updatePosition() {
            setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
        }

        window.addEventListener('scroll', updatePosition)
        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])


    return (
        <>
            <nav className={`${scrollPosition.scrollY > 0 ? "bg-black " : "bg-transparent "} w-full fixed z-20`}>
                <div className="max-w-screen flex items-center justify-between py-3 px-6 md:px-16">
                    <Image onClick={landing} src={require(`@/assetts/Logo.svg`)} alt="social" className=" w-32 h-11 md:w-56 md:h-11 cursor-pointer" />
                    <button onClick={() => setToggle(!toggle)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden justify-center md:flex  w-auto px-4">
                        <ul className="flex justify-center items-center space-x-5 font-medium">
                            <li onClick={product} className="text-white text-lg hover:font-semibold cursor-pointer">
                                Website
                            </li>
                            <li onClick={product} className="text-white text-lg hover:font-semibold cursor-pointer whitespace-nowrap">
                                Mobile Apps
                            </li>
                            <li onClick={porto} className="text-white text-lg hover:font-semibold cursor-pointer">
                                Portofolio
                            </li>
                            <li className="flex justify-center w-full">
                                <ButtonSolid className="w-full" click={start} title="Make an App" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                {toggle && (
                    <div className="w-full text-white">
                        <div className="fixed top-14 z-30 overflow-hidden h-auto w-full  bg-gray-500">
                            <div className="flex flex-col overflow-y-auto relative space-y-8 text-secondary-landing-dark h-full w-full text-lg justify-start pt-8 pb-12 px-8">
                                <div className={`font-semibold hover:opacity-80 cursor-pointer`} onClick={() => (product(), setToggle(false))}>
                                    Website
                                </div>
                                <div className={`font-semibold hover:opacity-80 cursor-pointer`} onClick={() => (product(), setToggle(false))}>
                                    Mobile Apps
                                </div>
                                <div className={`font-semibold hover:opacity-80 cursor-pointer`} onClick={() => (porto(), setToggle(false))}>
                                    Portofolio
                                </div>
                                <div className="">
                                    <ButtonSolid className="w-full" click={start} title="Make an App" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </>

    )
}