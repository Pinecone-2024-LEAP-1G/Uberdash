"use client";
import { MenuItemLastCard, RestaurantHero, RestrauntMenu } from "@/components";
import { CircleX, Search } from "lucide-react";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import { ReviewRating } from "@/components/ReviewRating";
import { RestaurantLocation } from "@/components/RestaurantLocation";
import { DeliveryFee } from "@/components/DeliveryFee";

const Store = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const myArr = [
    {
      comment: `My friend ordered from here a few months ago and I fell in love. The
fries are seasoned perfectly and the chicken is nice and juicy. I'm not
a big fan of chicken, but I'll definitely have some Dave's Hot Chicken!
Thank you!`,
      rating: 4.6,
      userName: "Janet C",
      date: "09/19/24",
    },
    {
      comment: `My friend ordered from here a few months ago and I fell in love. The
fries are seasoned perfectly and the chicken is nice and juicy. I'm not
a big fan of chicken, but I'll definitely have some Dave's Hot Chicken!
Thank you!`,
      rating: 4.6,
      userName: "Janet C",
      date: "09/19/24",
    },
  ];
  return (
    <div className="container mx-auto max-w-[1200px]">
      <RestaurantHero name="Dave's Hot Chicken" />
      <div className="flex gap-4">
        <div className="w-2/3">
          <ReviewRating
            reviews={myArr}
            description={`Dave's Hot Chicken in Little Tokyo, Los Angeles, offers a fast
              food dining experience centered on spicy chicken dishes. Popular
              among customers are combinations like "2 Sliders w/ Fries" and "1
              Tender & 1 Slider w/ Fries." The menu features a variety of
              options such as the Hot Box selections with either sliders or
              tenders, and for those preferring plant-based choices, cauliflower
              versions of sliders and tenders are available. Additionally,
              Dave's Hot Chicken provides a range of shakes, including flavors
              like strawberry, vanilla, and chocolate, enhanced with toppings
              like Oreo and M&M. The restaurant is particularly favored during
              the evening hours and holds a customer rating of approximately
              4.2.`}
          />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <DeliveryFee />
          <RestaurantLocation />
        </div>
      </div>
      <h1 className="text-2xl font-semibold my-4">Featured Items</h1>
      <div className="grid grid-cols-5 my-4 gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[220px]"
          >
            <MenuItemLastCard
              image={
                "https://tb-static.uber.com/prod/image-proc/processed_images/566742da5288066d7c19bdaf14a3e9a8/5954bcb006b10dbfd0bc160f6370faf3.jpeg"
              }
              mostLiked="#1 most liked"
              name="2 Sliders w/ Fries"
              price="17.89"
              percentage="91"
              like="1064"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold my-4">Picked for you</h1>
        <div className="bg-[#f3f3f3] rounded-3xl w-[360px] flex items-center justify-center h-8">
          <div className="flex justify-center items-center w-8 h-8">
            <Search style={{ width: 14, height: 14 }} />
          </div>
          <Input
            style={{ fontSize: 14 }}
            type="text"
            placeholder={`Search in ${"Dave's Hot Chicken"}`}
            className="bg-[#F3F3F3] h-8 rounded-3xl w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={search}
            onChange={handleSearch}
          />
          <div
            className={` justify-center items-center w-8 h-8  ${
              !search ? "hidden" : "flex"
            }`}
          >
            <CircleX
              role="button"
              fill="black"
              color="white"
              style={{ width: 16, height: 16 }}
              onClick={() => setSearch("")}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 my-4 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="col-span-2">
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
          </div>
        ))}
      </div>
    </div>
  );
};
export default Store;
