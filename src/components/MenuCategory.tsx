type MenuCategoryProps = {
  title: string;
  image: string;
};

export const MenuCategory = (props: MenuCategoryProps) => {
  const { title, image } = props;
  return (
    <div className="flex flex-col items-center w-fit">
      <img width={64} height={64} src={image} />
      <p className="text-xs">{title}</p>
    </div>
  );
};

{/* <MenuCategory title={"Pizza"} image={"https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery_v2.png"} /> */}







