import { MenuCategory } from "./MenuCategory";

const menuCategories = [
  {
    title: "Burger",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Burgers.png",
  },
  {
    title: "Pizza",
    image:
      "https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/Grocery_v2.png",
  },
];

export const MenuCategories = () => {
  return (
    <div className="flex gap-2">
      {menuCategories.map((menuCategory, index) => {
        return (
          <MenuCategory
            key={index}
            title={menuCategory.title}
            image={menuCategory.image}
          />
        );
      })}
    </div>
  );
};
