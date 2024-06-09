export default function CoursesPage() {
    return (
        <div className="h-screen bg-slate-700 p-4 flex flex-col">
            <h1 className="text-center text-3xl">Our Offered Courses</h1>
            <div className="outline-white outline-doted flex flex-wrap p-2">
                <div className="w-64 gap-8 flex-0 flex flex-col justify-between items-center p-3 outline-white outline">
                    <h1 className="text-center text-4xl">Calc I</h1>
                    <div className="flex flex-col items-center gap-3">
                        <button className="p-2 rounded-lg outline outline-blue-400 w-32">Open</button>
                        <h3 className="text-gray-200 text-lg">0/12 Units</h3>
                    </div>
                </div> 
            </div>
        </div>
    )
}