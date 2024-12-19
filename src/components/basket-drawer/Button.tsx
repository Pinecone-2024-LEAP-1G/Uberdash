export const Button = ({ title }: { title: string }) => {
  return (
    <button
      type="button"
      className="w-[452px] h-[56px] px-2 text-sm rounded-lg bg-green-400 text-[19.5px] text-white mt-2 hover:bg-green-700] "
    >
      {title}
    </button>
  );
};
