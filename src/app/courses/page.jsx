'use client'
import { useEffect, useState } from "react"
import supabase from "../../../utils/supabase"
import Singlecourse from "./Singlecourse"
//import { createClient } from '@/utils/supabase/server'
//import { cookies } from 'next/headers'

async function fetchClassData() {
    const {data, error} = await supabase.from("Classes").select('*')
    if(error) {
        console.error("error", error)
        return []
    }
    return data

}

export default function CoursesPage() {
    const [classData, setClassData] = useState([]);

    useEffect(() => {
        async function getClassData() {
            const data = await fetchClassData();
            console.log(data)
            setClassData(data);
        }
        getClassData();
    }, []);

    return (
        

        <div className="h-screen bg-slate-700 p-4 flex flex-col pm-6">
            {console.log(classData)}
            <h1 className="text-center text-3xl">Our Offered Courses</h1>
            
            <div className="outline-white outline-doted flex flex-wrap gap-5 p-2">
                
                {classData.length > 0 ? classData.map((classT) => {
                    if(classT.over_class_id == null){
                        return (
                            <Singlecourse key={classT.id} courseObj={classT}></Singlecourse>
                        )
                    }
                }) : <></>}
            </div>
        </div>
    )
}