type MenuCategoryProps = {
  title: string;
  image: string;
};

export const MenuCategory = (props: MenuCategoryProps) => {
  const { title, image } = props;
  return (
    <div className="flex flex-col items-center w-fit cursor-pointer">
      <img width={64} height={64} src={image} />
      <p className="text-xs">{title}</p>
    </div>
  );
};
