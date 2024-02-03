import { Shelf } from "../interfaces/GameShelf";

//Delete this file later when database works.
export const useGetTemporaryShelf = () => {
  return [
    {
      id: "1",
      name: "Owned",
      categories: [
        {
          id: "1",
          name: "Strategy",
          numberOfItems: 8,
        },
        {
          id: "2",
          name: "Card",
          numberOfItems: 21,
        },
        {
          id: "3",
          name: "Puzzles",
          numberOfItems: 5,
        },
      ],
      numberOfItems: 3,
    },
    {
      id: "2",
      name: "Interests",
      categories: [],
      numberOfItems: 0,
    },
    {
      id: "3",
      name: "Reject Pile",
      categories: [],
      numberOfItems: 0,
    },
  ] as Shelf[];
};
