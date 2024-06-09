'use client'
import { useEffect, useState } from "react";
import UnitBar from "./unit";

export default function Sidebar({units_sections, currentSection, currentClass}) {
    
    const [units, setUnits] = useState([])
    const [sections, setSections] = useState([])
    function sort(data) {
        const units2 = []
        const sections2 = []
        units_sections.map(sec => {
            console.log('test')
            if(sec.over_unit_id == null) units2.push(sec)
            else sections2.push(sec)
        });
        units.sort((a, b) => a.value - b.value)
        sections.sort((a, b) => a.value - b.value)
        setUnits(units2)
        setSections(sections2)
    }

    useEffect(() => {
        sort()
    }, [units_sections])

    

    return (
        <div className="flex-0 w-72 rounded-r-3l flex flex-col gap-3 p-4 bg-slate-500">
                <h1 className="text-center text-2xl">Calc AB</h1>
                <div className="flex flex-col gap-3 pl-2">
                    {console.log(units)}
                    {units.length ? units.map((unit) => {
                        return (
                        <UnitBar key={unit.id} unit={unit} sections={sections} curPage={currentSection} curClass={currentClass}></UnitBar>
                        )
                    }) : <></>}
                </div>
            </div>
    )
}