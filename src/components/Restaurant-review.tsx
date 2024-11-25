import Starss from "./ui/star";
import { Stars } from "./ui/starRating";

type RestrauntReview = {
  name: string;
  discription: string;
  date: string;
  rating: number;
  userRating: string;
};

export const RestrauntReview = ({
  name,
  discription,
  date,
  rating,
  userRating,
}: RestrauntReview) => {
  return (
    <div className="w-[800px] m-auto ">
      <div className="text-xl mb-3"> {name}</div>
      <div className="  font-semibold m-auto border border-gray-300 rounded-2xl">
        <div className=" flex ">
          <div className="flex  flex-col text-4xl	 font-bold justify-center m-auto">
            {rating}
            <Stars />
          </div>
          <div className="w-[500px] m-auto my-4">
            <div>
              <p className="text-sm font-medium	 ">{discription}</p>
              <div className="text-gray-500 font-thin	 text-sm ">
                <Starss />•{userRating}
                {date}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium"> {discription}</p>
              <div className="text-gray-500 font-thin text-sm	 flex ">
                <Starss />•{userRating}
                {date}
              </div>
            </div>
          </div>
        </div>
        <button className="bg-gray-300 rounded-full	text-sm	 text-black font-medium  p-3  mb-1 m-auto flex">
          Show more
        </button>
      </div>
    </div>
  );
};
