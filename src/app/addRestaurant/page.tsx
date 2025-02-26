"use client"; 

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, Suspense } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface RestaurantFormData {
  name: string;
  image: string;
  banner: string;
  info: string;
  ownerId: string;
}

const AddRestaurant = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [banner, setBanner] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  if (!session) {
    return <div>Not authenticated</div>;
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const restaurantData: RestaurantFormData = {
      name,
      image,
      banner,
      info,
      ownerId: session.user.id,
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
        toast.success("Рестораныг амжилттай үүсгэсэн");
        router.push("/");
      } else {
        toast.error(`Рестораныг үүсгэхэд алдаа гарлаа: ${data.error}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Сүлжээний алдаа");
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
      <Suspense fallback={<>Loading...</>}>
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setImage(e.target.value)}
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
                onChange={(e) => setBanner(e.target.value)}
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
                onChange={(e) => setInfo(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <input type="hidden" value={session.user.id} />

            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Ресторан Үүсгэх
            </Button>

            <Button
              type="button"
              onClick={() => router.push("/")}
              className="w-full bg-gray-300 text-white py-2 px-4 rounded-md mt-4 hover:bg-gray-500"
            >
              Буцах
            </Button>
          </form>
        </div>
      </Suspense>
    </div>
  );
};

export default AddRestaurant;
