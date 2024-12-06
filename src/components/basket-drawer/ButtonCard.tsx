import Link from "next/link";

export const Buttons = () => {
  return (
    <Link href="/checkout">
      <button
        type="button"
        className="w-[452px] h-[56px] px-2 text-sm rounded-lg bg-[#000000] text-[19.5px] text-white mt-2 hover:bg-[#202020] "
      >
        Захиалах
      </button>
    </Link>
  );
};
