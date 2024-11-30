import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
                <div className="mt-[72px] w-[492px] h-[160px] bg-slate-200">
                  <p className="text-[32px] font-bold leading-10">Fried rice</p>
                  <p className="text-[20px] leading-5 whitespace-pre-wrap text-[#0E8345] font-bold mb-2">
                    $12.00
                  </p>
                  <p className="text-[14px] overflow-hidden font-normal text-[#767575] pt-2 mb-[10px]">
                    Choice of chicken , beef ,BBQ pork, mushroom, or mixed
                    vegetables
                  </p>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
