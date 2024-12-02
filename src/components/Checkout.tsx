import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"

const Checkout = () => {
  return (
    <div className="container w-fit mx-auto">
      <div className="w-[400px] flex justify-between items-center">
        <div className="rounded-2xl flex px-3 py-4">
          <div className="flex gap-4">
            <img
              src="https://tb-static.uber.com/prod/image-proc/processed_images/81b3dd140eae38fdc0de0188c0d9d5b9/f6deb0afc24fee6f4bd31a35e6bcbd47.jpeg"
              className="w-[48px] h-[48px] rounded-full"/>
            <div>
              <p className="text-base">The Green Turtle</p>
              <p className="text-sm text-[#4b4b4b]">391 N Dupont Hwy</p>
            </div>
          </div>
        </div>
        <ChevronRight />
      </div>
      <Button className="w-full">Захиалга хийх</Button>
    </div>
  );
};
export default Checkout;
