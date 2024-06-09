export default function page1() {
    return (
        <div className="h-screen bg-slate-700 flex">
            <div className="flex-0 w-72 rounded-r-3l flex flex-col gap-3 p-4 bg-slate-500">
                <h1 className="text-center text-2xl">Calc I</h1>
                <div className="flex flex-col gap-3 pl-2">
                    <div className="gap-3">
                        Unit 1: Limits and Continuity
                        <div className="flex flex-col gap-3 pl-2 text-gray-200">
                            <div>
                                1.1: Introducing Calculus: Can Change Occur at an Instant?
                            </div>
                            <div>
                                1.2:
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full flex flex-col items-center w-full">
                <div className="h-4/5 flex justify-center items-center w-full">
                <iframe className=" w-2/3 h-2/3" src="https://www.youtube.com/embed/antLFMkVfXI?si=ciJ55ef4UuZOxRZh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="flex justify-around w-2/3">
                    <button className="p-2 rounded-lg outline outline-blue-400 w-40">Previous Section</button>
                    <button className="p-2 rounded-lg outline outline-red-400 w-40">Mark Completed</button>
                    <button className="p-2 rounded-lg outline outline-blue-400 w-40">Next Section</button>
                </div>
            </div>
        </div>
    )
}