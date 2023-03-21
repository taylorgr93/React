import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, "One Piece"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
