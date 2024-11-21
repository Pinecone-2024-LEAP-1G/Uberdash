import { LikeSvg } from "../components/ui/Like-svg";
import PlusSign from "../components/ui/PlusSignSvg";

type Restraunt = {
  name: string;
  price: string;
  percentage: string;
  like: string;
  discription: string;
  image: string;
};

export const RestrauntMenu = ({
  name,
  price,
  percentage,
  like,
  discription,
  image,
}: Restraunt) => {
  return (
    <div className="max-w-xl h-[147px] rounded-xl flex cursor-pointer justify-between border">
      <div className="w-[408px] flex py-4 pl-4 flex-col ">
        <p className="text-[16px] font-medium">{name}</p>
        <div className="flex items-center gap-1 text-[14px] font-normal mt-[4px]">
          <p>{price} </p>
          <div className="w-[3px] h-[3px] bg-[black] rounded-full"></div>
          <LikeSvg />
          <p>{percentage}</p>
          <p>{like}</p>
        </div>
        <div className="mt-1">
          <p className=" text-ellipsis whitespace-nowrap  overflow-auto w-[408px] text-[#757575] text-[14px] font-normal">
            {discription}
          </p>
        </div>
      </div>
      <div
        className="h-[145px] w-[145px] rounded-2xl relative "
        style={{
          backgroundImage: `url(${image})`,
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
