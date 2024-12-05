import { useCart } from "@/Providers/CartProvider";

export const OrderTotal = () => {
  const { cartItemsTotalPrice, deliveryFee } = useCart();
  return (
    <div className="mt-5 w-[400px]">
      <h1 className="text-lg font-bold">Үнийн мэдээлэл</h1>
      <div className=" border-b-[1px] h-[90px]">
        <div className="flex justify-between mt-4">
          <p>Захиалга</p>
          <p>${cartItemsTotalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p>Хүргэлт</p>
          <p>${deliveryFee}</p>
        </div>
      </div>
      <div className="flex justify-between font-bold text-lg mt-3">
        <p>Нийт төлбөр</p>
        <p>${cartItemsTotalPrice + deliveryFee}</p>
      </div>
      <div className="text-gray-500 text-sm mt-3">
        <p>
          Хэрэв хүргэлтийн ажилтан ирэх үед та байхгүй бол тэд таны захиалгыг
          үүдэнд нь үлдээх болно. Захиалсан барааг буцаах боломжгүй тул та
          сонголтоо зөв хийнэ үү.
        </p>
      </div>
    </div>
  );
};
