'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"


const buttonPress = (id) => {
    const router = useRouter()
    router.push(`/${id}/`)
}

export default function Singlecourse({courseObj}) {
    const router = useRouter()
    return (
        <div className="w-64 gap-8 flex-0 flex flex-col justify-between items-center p-3 outline-white outline">
            <h1 className="text-center text-4xl">{courseObj.name}</h1>
            <div className="flex flex-col items-center gap-3">
                <button onClick={() => router.push(`/courses/${courseObj.id}/0`)} className="p-2 rounded-lg outline outline-blue-400 w-32 hover:bg-blue-400">Open</button>
                <h3 className="text-gray-200 text-lg">0/12 Units</h3>
            </div>
        </div> 
    )
    
}