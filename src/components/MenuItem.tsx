import { HeartSvg } from "../components/ui/Heart-svg";

export const MenuItem = () => {
  return (
    <div>
      <div
        className="w-[288px] h-[130px] rounded-xl "
        style={{
          backgroundImage:
            "url(https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvM2MzOTliMTJkYTliZDIzMjUyZmVhZjAyODk2MTBjYmMvNzgzNTQyOGIyODZhY2I1NzY0NmEyNTZjODk3YzBlOWUuanBlZw==)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-between items-center pt-2 px-3 ">
          <p className="text-[#ffffff] bg-[#0e8345] text-ellipsis p-1 whitespace-nowrap rounded-sm text-[14px] ">
            2 Offers Available
          </p>
          <HeartSvg />
        </div>
      </div>
      <div className="mt-3 gap-1 flex w-[288px] justify-between ">
        <div>
          <p className="text-[18px] font-medium text-ellipsis">
            Pappa Johns Burger
          </p>
          <p className="text-[14px] text-[#706f6f] font-thin ">25-40 min</p>
        </div>
        <div className="rounded-[50%] w-[28px] flex items-center justify-center text-[12px] bg-slate-200 h-[28px]">
          4.3
        </div>
      </div>
    </div>
  );
};
