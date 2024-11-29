import { HeartSvg } from "../components/ui/Heart-svg";

type MenuTypes = {
  image: string;
  name: string;
  duration: string;
  points: number;
  bonus: string;
};

export const MenuItem = ({ image, name, duration, points }: MenuTypes) => {
  return (
    <div className="w-[288px] rounded-xl shadow-md overflow-hidden ">
      <div
        className="w-full h-[130px] rounded-xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-between items-center pt-2 px-3 ">
          <p className="text-[#ffffff] bg-[#0e8345] text-ellipsis p-1 whitespace-nowrap rounded-sm text-[14px] "></p>
          <HeartSvg />
        </div>
      </div>

      <div className="mt-3 gap-1 flex w-full justify-between px-3">
        <div>
          <p className="text-[18px] font-medium text-ellipsis">{name}</p>
          <p className="text-[14px] text-[#706f6f] font-thin ">{duration}</p>
        </div>
        <div className="rounded-[50%] w-[28px] flex items-center justify-center text-[12px] bg-slate-200 h-[28px]">
          {points}
        </div>
      </div>
    </div>
  );
};
