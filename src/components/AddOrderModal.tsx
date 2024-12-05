import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SelectQuantity } from "@/components/basket-drawer/SelectQuantity";

export const AddOrderModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className=" h-[700px]">
          <DialogHeader>
            <DialogTitle>
              <div className=" flex gap-6 ">
                <div className="w-[492px]">
                  <div className="w-[492px] h-[492px] absolute inset-0  overflow-hidden top-[72px] left-4">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://tb-static.uber.com/prod/image-proc/processed_images/98b8ba2dde94440f4cb7537f94f127b9/5143f1e218c67c20fe5a4cd33d90b07b.jpeg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                </div>
                <div className="mt-[72px] w-[492px] h-[160px] ">
                  <p className="text-[32px] font-bold leading-10">Fried rice</p>
                  <p className="text-[20px] leading-5 whitespace-pre-wrap text-[#0E8345] font-bold mb-2">
                    $12.00
                  </p>
                  <p className="text-[14px] overflow-hidden font-normal text-[#767575] pt-2 mb-[10px]">
                    Choice of chicken , beef ,BBQ pork, mushroom, or mixed
                    vegetables
                  </p>
                  <p className="w-fit bg-[#dfdddd] text-[#5E5E5E] px-2 py-1 rounded gap-1 text-[16px] font-medium leading-4 mt-7">
                    #1 most liked
                  </p>
                  <div className="border-[0.5px] w-[492px] border-[#D6D8DB] mt-[22px] "></div>
                  <div className="mt-[200px]">
                    <div className="mt-7">
                      <SelectQuantity />
                    </div>
                    <div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="w-[492px] h-[56px] px-2 rounded-lg bg-[#000000] text-[18px] text-white mt-2 hover:bg-[#202020] "
                        >
                          Add 1 to order $20.00
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
