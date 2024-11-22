import PlusSign from "./ui/PlusSignSvg";
import { LikeSvg } from "./ui/Like-svg";

type food = {
  image: string;
  mostLiked: string;
  name: string;
  price: string;
  percentage: string;
  like: string;
};

export const MenuItemLastCard = ({
  image,
  mostLiked,
  name,
  price,
  percentage,
  like,
}: food) => {
  return (
    <div className="w-[220px] h-[252px] mt-4 ml-4   ">
      <div
        className="w-[220px] h-[188px] relative cursor-pointer rounded-xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[98px] h-[24px] bg-[#0e8345] text-[12px] font-medium px-3 py-1 absolute top-2  rounded-br-[12px] rounded-tr-[12px]">
          <p className="text-white">{mostLiked}</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center  absolute bottom-2 right-2 hover:bg-slate-200">
          <PlusSign />
        </div>
      </div>
      <div>
        <p>{name}</p>
        <div className="flex items-center gap-1 text-[14px] font-normal ">
          <p>{price}$</p>
          <div className="w-[3px] h-[3px] bg-[black] rounded-full"></div>
          <LikeSvg />
          <p>{percentage}%</p>
          <p>{`(${like})`}</p>
        </div>
      </div>
    </div>
  );
};
