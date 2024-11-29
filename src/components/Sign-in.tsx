import { Input } from "@/components/ui/input";

export const Singin = () => {
  return (
    <div className="w-[332px] h-[536px]  justify-center flex  ">
      <div className="p-7">
        <div className="text-2xl">
          <p>What's your phone number or email?</p>
        </div>
        <div className="py-8">
          <div className="py-4">
            <Input
              className="w-full h-[48px] bg-slate-200   "
              type="email"
              placeholder="Enter phone number or email"
            />
          </div>
          <button className="w-full h-[48px] bg-black flex justify-center text-center py-3 text-white rounded-xl ">
            Continue
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="border-[1px] w-[149px] border-[#D6D8DB] "></div>
          <p>or</p>
          <div className="border-[1px] w-[149px] border-[#D6D8DB] "></div>
        </div>
        <div>
          <button className="w-full h-[48px] bg-slate-200 flex justify-center text-center py-3 text-black rounded-xl mt-6 ">
            <img src="./google.svg" className="mr-2 py-1" />
            Continue with Google
          </button>
        </div>
        <div className="flex items-center gap-3 py-8">
          <div className="border-[1px] w-[149px] border-[#D6D8DB] "></div>
          <p>or</p>
          <div className="border-[1px] w-[149px] border-[#D6D8DB] "></div>
        </div>

        <div className="mt-8 pb-10">
          <p>
            By proceeding, you consent to get calls, WhatsApp or SMS/RCS
            messages, including by automated means, from Uber and its affiliates
            to the number provided.
          </p>
        </div>
      </div>
    </div>
  );
};
