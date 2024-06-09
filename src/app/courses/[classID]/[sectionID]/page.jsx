'use client'

import supabase from "@/app/utils/supabase"
import { useEffect, useState } from "react"
import Sidebar from "./sidebar"


async function fetchClassData(classID2) {
    const {data, error} = await supabase.from("Classes").select('*').eq('over_class_id', classID2)
    if(error) {
        console.error("error", error)
        return []
    }
    return data

}

export default function page1({params: severalIDs}) {
    const [currentSection, setCurrentSection] = useState({})
    const [classData, setClassData] = useState([]);
    const classID = severalIDs.classID
    const sectionID = severalIDs.sectionID

    useEffect(() => {
        async function getClassData() {
            const data = await fetchClassData(classID);
           // console.log(data)
            setClassData(data);
        }
        getClassData();
    }, []);

    useEffect(() => {
        ////console.log('test')
        classData.map((item) => {
            console.log(item)
            if(item.id == sectionID && item.over_class_id == classID) setCurrentSection(item)
        })
    }, [classData])
    useEffect(() => {
        console.log(currentSection)
    }, [currentSection])

    //const id = searchParams.get('id');
    //const id = sectionID.sectionID
    return (
        <div className="h-screen bg-slate-700 flex">
           <Sidebar units_sections={classData} currentSection={sectionID} currentClass={classID}></Sidebar> 
            <div className="h-full flex flex-col items-center w-full">
                <div className="h-4/5 flex justify-center items-center w-full">
                {currentSection.links ? <iframe className=" w-2/3 h-2/3" src={currentSection.links} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> : <></>} 
                </div>
                <div className="flex justify-around w-2/3">
                    <button className="p-2 rounded-lg outline outline-blue-400 w-40 hover:bg-blue-400">Previous Section</button>
                    <button className="p-2 rounded-lg outline outline-red-400 w-40 hover:bg-red-400">Mark Completed</button>
                    <button className="p-2 rounded-lg outline outline-blue-400 w-40 hover:bg-blue-400">Next Section</button>
                </div>
            </div>
        </div>
    )
}