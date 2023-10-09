"use client"

import Image from "next/image"

export default function SectionCanBeMade() {

    const mainContent = [
        {
            icon: "burger_icon",
            name: "Online Attendance",
            desc: "With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team's work hours with your own company's special online attendance feature with features such as:",
            subDesc: [
                {
                    list: "Clock in and Clock Out attendance"
                },
                {
                    list: "Face Photo"
                },
                {
                    list: "Face Recognition"
                },
                {
                    list: " Accurate time stamp down to seconds"
                },
                {
                    list: "GPS location of employees"
                }
            ]
        },
        {
            icon: "basket_icon",
            name: "Sport Center",
            desc: " Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to",
            subDesc: [
                {
                    list: "Choose a booking schedule"
                },
                {
                    list: "Online payments"
                },
                {
                    list: "Automatic scheduling system"
                },
                {
                    list: "Search for Friends feature"
                },
                {
                    list: "Split Payment with team members"
                },
                {
                    list: "Information and announcements from you"
                }
            ]
        },
        {
            icon: "booking_icon",
            name: "Booking",
            desc: "Offer your services in your own application to place orders to delivery directly to the client's house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:",
            subDesc: [
                {
                    list: "Memilih jenis dan kategori jasa yang dikehendaki"
                },
                {
                    list: "Melakukan reservasi online dan pembayaran dengan metode pembayaran digital"
                },
                {
                    list: "Penjadwalan dengan tim lapangan"
                },
                {
                    list: "Aplikasi khusus untuk tim"
                },
                {
                    list: "Promosi dan Kode voucher khusus"
                }
            ]
        },
    ]

    const otherContent = [
        {
            icon: "shop_icon",
            name: "E-commerce",
        },
        {
            icon: "office_icon",
            name: "Company",
        },
        {
            icon: "cashier_icon",
            name: "Cashier",
        },
        {
            icon: "chat_icon",
            name: "Chat",
        },
        {
            icon: "mechanic_icon",
            name: "Workshop",
        },
        {
            icon: "hammer_icon",
            name: "Construction",
        },
    ]

    return (
        <div className="w-screen h-auto relative " >
            <div className="w-full p-3 md:p-10 ">
                <div className="w-full space-y-14 ">
                    <div className="text-4xl font-semibold text-center ">
                        Applications that can be made
                    </div>
                    <div className="grid px-0 md:px-14 space-x-2 md:space-x-5 grid-cols-3 justify-center">
                        {
                            mainContent.map((item, i) => (
                                <div className=" space-y-0 md:space-y-4" key={i}>
                                    <div className="flex space-x-2 md:space-x-4 items-center">
                                        <Image src={require(`@/assetts/icons/${item.icon}.svg`)} alt="icon" className="w-4 h-4 md:w-10 md:h-10" />
                                        <div className=" text-base md:text-xl text-left font-normal">
                                            {item.name}
                                        </div>
                                    </div>
                                    <div className="text-left text-xs md:text-base font-normal space-y-4">
                                        <div>
                                            {item.desc}
                                        </div>
                                        <ul className="list-disc pl-5">
                                            {item.subDesc.map((item, i) => (
                                                <li key={i}>
                                                    {item.list}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="grid grid-cols-2 md:flex px-0 md:px-14 space-y-2 md:space-y-0 space-x-0 md:space-x-10 justify-center">
                        {otherContent.map((item, i) => (
                            <div key={i} className="flex space-x-1 md:space-x-3 items-center">
                                <Image src={require(`@/assetts/icons/${item.icon}.svg`)} alt="icon" className="w-5 h-5 md:w-10 md:h-10" />
                                <div className="text-base md:text-xl text-left whitespace-nowrap font-normal">
                                    {item.name}
                                </div>
                            </div>
                        ))}
                        <div className="flex space-x-1 md:space-x-3 items-center">
                            <div className="text-base md:text-xl text-left font-normal">
                                and many others
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}