import { Plus } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "@/lib/types";
import { X } from "lucide-react";

type CreateProductProps = {
  handleCreateProduct: () => void;
};

const restaurantOwnerId: string = "673e90415a6e8e222657bbb4";

export const CreateProduct: React.FC<CreateProductProps> = ({
  handleCreateProduct,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [restaurantId, setRestaurantId] = useState<string>("");

  const CreateProduct = async () => {
    try {
      await axios.post(`/api/menu-item`, {
        name,
        description,
        size,
        price,
        available: true,
        categoryId,
        restaurantId,
        image,
      });

      handleCreateProduct();
    } catch (error) {
      console.log(error);
    }
  };
  const uploadImageToCloudinary = async (imageFile: File) => {
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          file: imageFile,
          upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
        }
      );

      setImage(response?.data?.secure_url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.post(`/api/restaurant/getByOwnerId`, {
          ownerId: restaurantOwnerId,
        });
        setRestaurantId(response.data.restaurant._id);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `${
            process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
          }/api/category`
        );
        setCategories(response.data.category);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
    fetchRestaurant();
  }, []);

  const handleToggle = () => {
    handleCreateProduct();
  };

  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
      <div
        onClick={handleToggle}
        className="relative left-[580px] top-[-250px] flex justify-center items-center rounded-full border border-gray-600"
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
                placeholder="Product Name"
                className="py-2 px-3 rounded-xl border border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p> Price($) </p>
              <input
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                type="number"
                placeholder="Price"
                className="py-2 px-3 rounded-xl border border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p> Image </p>
              <input
                type="file"
                value={image}
                onChange={(event) => {
                  setImage(event.target.value);
                  const file = event?.target?.files?.[0];
                  if (!file) return;
                  uploadImageToCloudinary(file);
                }}
                placeholder="Image URL"
                className="py-2 px-3 rounded-xl border border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p> Size </p>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="py-2 px-3 rounded-xl border border-gray-200"
              >
                <option disabled>Choose Size</option>
                <option> 2XL </option>
                <option> XL </option>
                <option> L </option>
                <option> M </option>
                <option> S </option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <p> Category </p>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="py-2 px-3 rounded-xl border border-gray-200"
              >
                <option selected disabled>
                  Choose Category
                </option>
                {categories.map((category, index) => {
                  return (
                    <option value={category._id} key={index}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p> Description </p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border w-64 h-48 border-gray-200 py-1 px-2.5 rounded-xl"
            ></textarea>
          </div>
        </div>
        <div
          onClick={() => CreateProduct()}
          className="flex gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:bg-slate-300 bg-white"
        >
          <Plus />
          <button> Create Product </button>
        </div>
      </div>
    </div>
  );
};
