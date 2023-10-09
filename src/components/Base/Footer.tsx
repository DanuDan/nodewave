'use client'
import Image from "next/image"

export default function BaseFooter() {

    const sosmed = [
        {
            icon: "facebook_icons",
            link: "https://www.nodewave.id/en"
        },
        {
            icon: "twitter_icons",
            link: "https://www.nodewave.id/en"
        },
        {
            icon: "youtube_icons",
            link: "https://www.nodewave.id/en"
        },
        {
            icon: "linkedin_icons",
            link: "https://www.linkedin.com/company/nodewaveindonesia/"
        },
        {
            icon: "instagram_icons",
            link: "https://www.instagram.com/nodewave.id/"
        },
    ]

    return (
        <div className="w-full flex flex-col items-center space-y-6 py-8 justify-center bg-black border-none">
            <Image src={require(`@/assetts/Logo.svg`)} alt="social" className="w-56 h-11" />
            <div className="text-center space-y-6">
                <div>
                    PT. NODEWAVE SOLUSI TEKNOLOGI
                </div>
                <div className="flex flex-col">
                    <span>Graha Pena Surabaya</span>
                    <span>Jl. Ahmad Yani no. 88 Surabaya</span>
                    <span>Phone: +62811258280</span>
                    <span>Email : support@nodewave.id</span>
                </div>
                <div className="flex space-x-5 items-center justify-center">
                    {sosmed.map((item, i) => (
                        <a key={i} href={item.link} target="_blank">
                            <Image src={require(`@/assetts/icons/${item.icon}.svg`)} alt="social" className="w-7 h-7 cursor-pointer" />
                        </a>
                    ))}
                </div>

            </div>
        </div>
    )
}