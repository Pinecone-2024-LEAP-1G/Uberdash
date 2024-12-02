import { X, Plus } from "lucide-react";
import { useState } from "react";
import axios from "axios";

type DeleteType = {
  handleCreateCategory: () => void;
};

export const CreateCategoryComp: React.FC<DeleteType> = (props) => {
  const { handleCreateCategory } = props;

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const CreateCategory = () => {
    handleCreateCategory();
  };

  const Create = () => {
    const createCategory = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_URL}/api/category`,
          { name, image }
        );
        if (response.status == 200) {
          handleCreateCategory();
        }
      } catch (error) {
        console.log(error);
      }
    };
    createCategory();
  };

  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
      <div
        onClick={CreateCategory}
        className="relative left-[250px] top-[-130px] flex justify-center items-center rounded-full border border-gray-600"
      >
        <X className="m-3" />
      </div>

      <div className="rounded-xl border bg-gray-400 border-gray-300 px-5 py-4 w-fit flex flex-col gap-10 items-center">
        <div className="flex gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p> Name </p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Category Name"
                className="py-2 px-3 rounded-xl border border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p> Image (url) </p>
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image Url"
                className="py-2 px-3 rounded-xl border border-gray-200"
              />
            </div>
          </div>
        </div>
        <div
          onClick={() => Create()}
          className="flex gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:bg-slate-300 bg-white"
        >
          <Plus />
          <button>Create Product</button>
        </div>
      </div>
    </div>
  );
};
