import React from "react";

export const LoadingQuote = ({ name, species }) => {
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{name}</p>
      <footer className="blockquote-footer">{species}</footer>
    </blockquote>
  );
};
