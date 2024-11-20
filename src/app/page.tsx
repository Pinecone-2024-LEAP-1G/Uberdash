// import { Sidebar } from "lucide-react";
import { MenuItem } from "../components/MenuItem";
import { RestrauntMenu } from "../components/RestrauntMenu";

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

      <RestrauntMenu />
    </div>
  );

  //  <Sidebar />;
};
export default Home;
