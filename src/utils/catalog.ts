interface Catalog {
  name: string;
  image: string;
  price:number;
}

export const Catalog: Catalog[] = [
  {
    name: "strapping manilla (9mm & 15mm)",
    image: "/manilla.jpg",
    price:3000
  },
  {
    name: "Top & bottom Capping HD (50kg per roll)",
    image: "/topcapping.jpg",
    price:2000
  },
  {
    name: "stretch film",
    image: "/stretch_film.jpg",
    price:4500
  },
];
