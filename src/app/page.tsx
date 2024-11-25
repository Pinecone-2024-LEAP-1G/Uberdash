import FilterTags from "@/components/layout/FilterTags";
import { MenuItem } from "../components/MenuItem";
import { RestrauntMenu } from "../components/RestrauntMenu";
import { MenuItemLastCard } from "../components/MenuItemLastCard";
import { BasketDrawer } from "@/components/basket-drawer/BasketDrawer";
import { FoodCardModal } from "@/components/FoodCardModal";

const Home = () => {
  return (
    <div>
      <BasketDrawer />
      <FoodCardModal image={""} name={""} price={""} calorie={""} />
    </div>
  );
};

export default Home;
