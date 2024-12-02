import { X } from "lucide-react";
import axios from "axios";

type DeleteType = {
  itemId: string;
  handleDelete: () => void;
};

export const Delete: React.FC<DeleteType> = (props: DeleteType) => {
  const { itemId, handleDelete } = props;
  const handleToggle = () => {
    handleDelete();
  };

  const deleteItem = () => {
    const deleteOne = async () => {
      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_URL}/api/menu-item/delete/${itemId}`
        );
        if (response.status == 200) {
          handleDelete();
        }
      } catch (error) {}
    };
    deleteOne();
  };
  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
      <div className="rounded-xl border bg-gray-400 border-gray-300 px-5 py-4 w-fit flex flex-col gap-10 items-center">
        <p> Are You Sure To Delete </p>
        <div className="flex gap-4 ">
          <button
            onClick={deleteItem}
            className="px-3 py-2 rounded-2xl border border-white hover:bg-white"
          >
            YES
          </button>
          <button
            onClick={handleToggle}
            className="px-3 py-2 rounded-2xl border border-white hover:bg-white"
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
};
