export const Drawer = () => {
    return (
        <div>
            <div className="w-[252px] h-[56px] bg-black rounded-2xl flex text-center justify-center text-white ">
                <button>Sign up</button>
            </div>

            <div className="w-[252px] h-[56px] bg-slate-300 rounded-2xl flex text-center justify-center text-black  ">
                <button>Log in</button>
            </div>
            <div className="">
                <button className="flex">Create a business account</button>
                <button className="flex">Add your restaurant</button>
                <button className="flex">Sign up to deliver</button>
            </div>
        </div>
    )
}