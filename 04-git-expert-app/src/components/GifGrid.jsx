import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}
      {/* <LoadingMessage isLoading={isLoading} /> */}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} /> // esparcir properties
        ))}
      </div>
    </>
  );
};
