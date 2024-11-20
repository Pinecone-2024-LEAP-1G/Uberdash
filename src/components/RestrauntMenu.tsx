import { LikeSvg } from "../components/ui/Like-svg";
import PlusSign from "../components/ui/PlusSignSvg";

export const RestrauntMenu = () => {
  return (
    <div className="max-w-xl h-[147px] rounded-xl flex cursor-pointer justify-between border">
      <div className="w-[408px] flex py-4 pl-4 flex-col ">
        <p className="text-[16px] font-medium">Burrito Bowl</p>
        <div className="flex items-center gap-1 text-[14px] font-normal mt-[4px]">
          <p>$12.50 </p>
          <div className="w-[3px] h-[3px] bg-[black] rounded-full"></div>
          <LikeSvg />
          <p>80%</p>
          <p>(1100)</p>
        </div>
        <div className="mt-1">
          <p className=" text-ellipsis whitespace-nowrap  overflow-auto w-[408px] text-[#757575] text-[14px] font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.Nulla consequat massa quis
            enim.
          </p>
        </div>
      </div>
      <div
        className="h-[145px] w-[145px] rounded-2xl relative "
        style={{
          backgroundImage:
            "url('https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMzllMTJjODlhNzE2ZWEyYmYwNzE1MTM0MTBjYWE0Y2UvNTE0M2YxZTIxOGM2N2MyMGZlNWE0Y2QzM2Q5MGIwN2IuanBlZw==')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center  absolute bottom-2 right-2 hover:bg-slate-200">
          <PlusSign />
        </div>
      </div>
    </div>
  );
};
