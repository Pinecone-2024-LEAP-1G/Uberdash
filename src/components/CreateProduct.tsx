import { Plus } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "@/lib/types";
import { X } from "lucide-react";

type CreateProductProps = {
  handleCreateProduct: () => void;
};

export const CreateProduct: React.FC<CreateProductProps> = ({
  handleCreateProduct,
}) => {
  const restaurantId: string | null = localStorage.getItem("restaurantId");
  const [categories, setCategories] = useState<Category[]>([]);

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [uploading, setUploading] = useState(false);

  const CreateProduct = async () => {
    try {
      const response = await axios.post(`/api/menu-item`, {
        name,
        description,
        size,
        price,
        available: true,
        categoryId,
        restaurantId,
        image,
      });
      //amjilttai food uuslee gdg toast
      handleCreateProduct();
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImageToCloudinary = async (imageFile: File) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
      );
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );

      setImage(response?.data?.secure_url);
      alert("Зураг амжилттай байршлаа.");
    } catch (error) {
      console.error("Зураг байршуулахад алдаа гарлаа.", error);
      alert("Зураг байршуулахад алдаа гарлаа.");
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`/api/category`);
        setCategories(response.data.category);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
      <div
        onClick={handleCreateProduct}
        className="absolute top-10 right-10 flex justify-center items-center rounded-full border border-gray-600 cursor-pointer"
      >
        <X className="m-3" />
      </div>

      <div className="rounded-xl bg-white p-6 w-full max-w-4xl flex flex-col gap-8 shadow-lg">
        <div className="flex gap-10">
          <div className="flex flex-col gap-6 w-full sm:w-1/2">
            <div className="flex flex-col gap-2">
              <p className="text-gray-800">Нэр</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Бүтээгдэхүүний нэр"
                className="py-2 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-800">Үнэ (₮)</p>
              <input
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                type="number"
                placeholder="Үнэ"
                className="py-2 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-800">Зураг</p>
              <input
                type="file"
                onChange={(event) => {
                  const file = event?.target?.files?.[0];
                  if (file) uploadImageToCloudinary(file);
                }}
                className="py-2 px-4 rounded-xl border border-gray-300 focus:outline-none"
              />
              {uploading && (
                <p className="text-sm text-indigo-500">
                  Зураг байршиж байна...
                </p>
              )}
              {image && (
                <img
                  src={image}
                  alt="Uploaded"
                  className="mt-2 h-32 w-32 object-cover rounded-lg border"
                />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-800">Хэмжээ</p>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="py-2 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Хэмжээг сонгоно уу</option>
                <option value="2XL">2XL</option>
                <option value="XL">XL</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-800">Төрөл</p>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="py-2 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Төрлийг сонгоно уу</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full sm:w-1/2">
            <p className="text-gray-800">Тайлбар</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border w-full h-48 border-gray-300 py-2 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Бүтээгдэхүүний тайлбарыг оруулна уу"
            ></textarea>
          </div>
        </div>

        <div
          onClick={CreateProduct}
          className="flex gap-3 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold cursor-pointer"
        >
          <Plus />
          <button>Хоолны цэс үүсгэх</button>
        </div>
      </div>
    </div>
  );
};
