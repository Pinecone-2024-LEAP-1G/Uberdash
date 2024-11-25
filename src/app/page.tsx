import FilterTags from "@/components/layout/FilterTags";
import { MenuItem } from "@/components/MenuItem";
import { MenuItemSlider } from "@/components/MenuItemSlider";
import { RatingInfo } from "@/components/Rating";
import { RestrauntMenu } from "@/components/RestrauntMenu";


const Home = () => {
  return (
    <div className="px-11">
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
      <MenuItemSlider title={""} />
      <RatingInfo name="Himadri S."
        rating={4}
        date='2013-04-07T10:20:30Z'
        comment="He is the nicest and most accommodating person ever!!" />
    </div>
  )
};

export default Home;
