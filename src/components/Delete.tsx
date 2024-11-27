import { X } from "lucide-react";

type DeleteProduct = {
  handleDelete: () => void;
};

export const Delete: React.FC<DeleteProduct> = ({ handleDelete }) => {
  const handleToggle = () => {
    handleDelete();
  };
  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
      <div
        onClick={handleToggle}
        className="relative left-[580px] top-[-250px] flex justify-center items-center rounded-full border border-gray-600"
      >
        <X className="m-3" />
      </div>

      <div className="rounded-xl border bg-gray-400 border-gray-300 px-5 py-4 w-fit flex flex-col gap-10 items-center"></div>
    </div>
  );
};
