import FilterTags from "@/components/layout/FilterTags";
import { Footer } from "@/components/Footer";
import { Drawers } from "@/components/Drawer";
import { MenuItem } from "../components/MenuItem";
import { RestrauntMenu } from "../components/RestrauntMenu";
import { MenuItemLastCard } from "../components/FoodCardPlus";
import { PopOverTags } from "@/components/layout/PopOverTags";

const Home = () => {
  return (
    <div>
      <FilterTags />
      <PopOverTags />
      {/* <Drawers />

      <MenuItemLastCard
        image="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvODExZDNlMzBjZDgxM2FjMzQ1ODZlMDUyMDA3ZDA0ODUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw=="
        mostLiked="#1 most liked"
        name="Plate"
        price="$12.30"
        percentage="70%"
        like="(500)"
      /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
