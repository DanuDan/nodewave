"use client"

export default function ButtonSolid({title, click, className}: {title : string, click: any, className: any}) {


    return (
        <>
            <button onClick={click} className={`${className} bg-primary text-white text-lg md:text-xl rounded-full h-auto px-1 py-2 md:py-3 md:px-2 md:w-44 whitespace-nowrap`}>
                {title} 
            </button>
        </>
    )
}