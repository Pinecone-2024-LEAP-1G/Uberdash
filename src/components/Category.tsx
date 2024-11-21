import axios from "axios";
import { useEffect } from "react";

type CategoryProps = {
  categoryId: String;
};
export const Category = ({ categoryId }: CategoryProps) => {
  useEffect(() => {
    axios
      .post(`http://localhost:3000/api/category/categoryId`, {
        categoryId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return <div></div>;
};
