import React from "react";
import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

describe("ArtPieces", () => {
  const pieces = [
    {
      slug: "orange-red-and-green",
      artist: "Steve Johnson",
      name: "Orange Red and Green Abstract Painting",
      imageSource:
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
      year: "2018",
      genre: "Abstract Painting",
      colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
      dimensions: { height: 2432, width: 1920, type: "jpg" },
    },
    {
      slug: "blue-and-red",
      artist: "Jung-Hua Lui",
      name: "Blue and Red",
      imageSource:
        "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
      year: "2019",
      genre: "Abstract Painting",
      colors: ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"],
      dimensions: { height: 2560, width: 1920, type: "jpg" },
    },
  ];

  test("renders the ArtPiecePreview components", () => {
    render(<ArtPieces pieces={pieces} />);
    pieces.forEach((piece) => {
      const titleElement = screen.getByText(piece.name);
      expect(titleElement).toBeInTheDocument();
    });
  });
});
