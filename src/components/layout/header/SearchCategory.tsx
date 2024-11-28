import React from "react";

interface Category {
  name: string;
  icon: string;
}

interface CategoryMenuProps {
  searchQuery: string;
}

const categories: Category[] = [
  { name: "Pizza", icon: "🍕" },
  { name: "Thai", icon: "🍜" },
  { name: "Indian", icon: "🍛" },
  { name: "Sushi", icon: "🍣" },
  { name: "Chinese", icon: "🥡" },
  { name: "Mexican", icon: "🌮" },
  { name: "Ramen", icon: "🍜" },
  { name: "Burgers", icon: "🍔" },
  { name: "Fast Food", icon: "🍟" },
  { name: "Pasta", icon: "🍝" },
  { name: "Korean", icon: "🇰🇷" },
  { name: "Italian", icon: "🇮🇹" },
];

export const CategoryMenu: React.FC<CategoryMenuProps> = ({ searchQuery }) => {
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-h-64 overflow-y-auto p-4 rounded-xl">
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <span className="text-2xl">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No categories found</p>
      )}
    </div>
  );
};
