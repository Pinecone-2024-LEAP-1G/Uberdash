import { Button } from "@/components/ui/button";
import Link from "next/link";

const OrderCreated = () => {
  return (
    <div className="mx-auto container flex flex-col justify-center items-center gap-10 my-10 h-[600px]">
      <h1>Захиалга амжилттай хийгдлээ</h1>
      <Link href={"/"}>
        <Button>Нүүр хуудас руу буцах</Button>
      </Link>
    </div>
  );
};

export default OrderCreated;
