export const OrderTotal = () => {
  return (
    <div className="mt-5 w-[400px]">
      <h1 className="text-lg font-bold">Үнийн мэдээлэл</h1>
      <div className=" border-b-[1px] h-[90px]">
        <div className="flex justify-between mt-4">
          <p>Захиалга</p>
          <p>$38.28</p>
        </div>
        <div className="flex justify-between">
          <p>Хүргэлт</p>
          <p>$3.49</p>
        </div>
        <div className="flex justify-between">
          <p>Бусад</p>
          <p>$7.14</p>
        </div>
      </div>
      <div className="flex justify-between font-bold text-lg mt-3">
        <p>Нийт төлбөр</p>
        <p>$48.91</p>
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
