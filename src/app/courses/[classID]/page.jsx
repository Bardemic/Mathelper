'use client'

import supabase from "@/app/utils/supabase"
import { useEffect, useState } from "react"


async function fetchClassData() {
    const {data, error} = await supabase.from("Classes").select('*').eq('parent_id', 1)
    if(error) {
        console.error("error", error)
        return []
    }
    return data

}

export default function ClassHome() {
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
        <div className="h-screen bg-slate-700 flex">
            Home
        </div>
    )
}