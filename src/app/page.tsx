import FilterTags from "@/components/layout/FilterTags";
import { Footer } from "@/components/Footer";
import { MenuItem } from "../components/MenuItem";
import { RestrauntMenu } from "../components/RestrauntMenu";
import { MenuItemLastCard } from "../components/FoodCardPlus";

const Home = () => {
  return (
    <div>
      <MenuItem
        name=" Pappa Johns Burger"
        image="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvM2MzOTliMTJkYTliZDIzMjUyZmVhZjAyODk2MTBjYmMvNzgzNTQyOGIyODZhY2I1NzY0NmEyNTZjODk3YzBlOWUuanBlZw=="
        duration=" 25-40 min"
        points="4.3"
        bonus="Buy 1,Get 1 Free"
      />

      <RestrauntMenu
        name="Burrito Bowl"
        price="$12.50"
        percentage="80%"
        like="(1100)"
        discription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.Nulla consequat massa quis
            enim."
        image="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMzllMTJjODlhNzE2ZWEyYmYwNzE1MTM0MTBjYWE0Y2UvNTE0M2YxZTIxOGM2N2MyMGZlNWE0Y2QzM2Q5MGIwN2IuanBlZw=="
      />
      <FilterTags />

      <MenuItemLastCard
        image="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvODExZDNlMzBjZDgxM2FjMzQ1ODZlMDUyMDA3ZDA0ODUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw=="
        mostLiked="#1 most liked"
        name="Plate"
        price="$12.30"
        percentage="70%"
        like="(500)"
      />
      <Footer />
    </div>
  );
};

export default Home;
