export const Drawer = () => {
    return (
        <div className="w-[252px] h-[1100px] border">
            <div className="pt-6 ">
                <button className="w-[252px] h-[56px] bg-black rounded-2xl flex text-center justify-center text-white py-4 ">Sign up</button>
                <button className="w-[252px] h-[56px] bg-slate-300 rounded-2xl flex text-center justify-center text-black py-4 mt-2 ">Log in</button>
            </div>


            <div className=" pt-6">
                <button className="flex pt-3">Create a business account</button>
                <button className="flex pt-4">Add your restaurant</button>
                <button className="flex pt-4">Sign up to deliver</button>
            </div>
        </div>
    )
}