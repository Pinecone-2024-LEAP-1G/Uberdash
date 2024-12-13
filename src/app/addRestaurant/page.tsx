"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

interface RestaurantFormData {
  name: string;
  image: string;
  banner: string;
  info: string;
  ownerId: string;
}

const AddRestaurant = () => {
  const { data: session } = useSession();
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [banner, setBanner] = useState<string>("");
  const [info, setInfo] = useState<string>("");
  const [ownerId, setOwnerId] = useState<string>("");

  useEffect(() => {
    if (session?.user?.id) {
      setOwnerId(session.user.id);
    }
  }, [session]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const restaurantData: RestaurantFormData = {
      name,
      image,
      banner,
      info,
      ownerId,
    };

    try {
      const response = await fetch("/api/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurantData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Рестораныг амжилттай үүсгэсэн", data.newRestaurant);
      } else {
        console.error("Рестораныг үүсгэхэд алдаа гарлаа", data.error);
      }
    } catch (error) {
      console.error("Сүлжээний алдаа", error);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzMwfHxjcmVhdGlvbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md opacity-90">
        <h1 className="text-2xl font-bold text-center mb-6">
          Шинэ Ресторан Үүсгэх
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Рестораны Нэр
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Рестораны Зураг URL
            </label>
            <Input
              id="image"
              value={image}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setImage(e.target.value)
              }
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="banner"
              className="block text-sm font-medium text-gray-700"
            >
              Баннер Зураг URL
            </label>
            <Input
              id="banner"
              value={banner}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBanner(e.target.value)
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="info"
              className="block text-sm font-medium text-gray-700"
            >
              Рестораны Тайлбар
            </label>
            <Input
              id="info"
              value={info}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInfo(e.target.value)
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <input type="hidden" value={ownerId} />

          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Ресторан Үүсгэх
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
