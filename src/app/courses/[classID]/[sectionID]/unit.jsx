'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function UnitBar({unit, sections, curPage, curClass}) {
    const router = useRouter()
    const [sections3, setSections] = useState([])
    useEffect(() => {
        let sections2 = []
        sections.map((section) => {
            if (section.over_unit_id == unit.id) sections2.push(section)
        })
        sections2.sort((a, b) => a.value - b.value)
        setSections(sections2)
    }, [unit])
    return ( 
        <div className="gap-3">
            {unit.name}
            <div className="flex flex-col gap-3 pl-2 text-gray-200">
                {sections3 ? sections3.map((section) => {
                    if(section.id == curPage) return (<div className="text-green-500" key={section.id}>{section.name}</div>)
                    else return (
                        <div key={section.id} className="hover:text-green-300" onClick={() => {router.push(`${section.id}`)}}>{section.name}</div>
                    )
                }) : <></>}
            </div>
        </div>
    )
}