import { GameInfo } from "../interfaces/Game";

//Delete this file later when database works.
const useGetGameCloset = () => {
  const games = [
    {
      boxArt: "Image 1",
      title: "Title 1",
      ratings: "Ratings 1",
      borrowedStatus: "Borrowed Status 1",
      dateAdded: "Date Added 1",
      shelf: "1-3",
    },
    {
      boxArt: "Image 2",
      title: "Title 2",
      ratings: "Ratings 2",
      borrowedStatus: "Borrowed Status 2",
      dateAdded: "Date Added 2",
      shelf: "3",
    },
    {
      boxArt: "Image 3",
      title: "Title 3",
      ratings: "Ratings 3",
      borrowedStatus: "Borrowed Status 3",
      dateAdded: "Date Added 3",
      shelf: "1-3",
    },
    {
      boxArt: "Image 4",
      title: "Title 4",
      ratings: "Ratings 4",
      borrowedStatus: "Borrowed Status 4",
      dateAdded: "Date Added 4",
      shelf: "1-2",
    },
    {
      boxArt: "Image 5",
      title: "Title 5",
      ratings: "Ratings 5",
      borrowedStatus: "Borrowed Status 5",
      dateAdded: "Date Added 5",
      shelf: "2",
    },
    {
      boxArt: "Image 6",
      title: "Title 6",
      ratings: "Ratings 6",
      borrowedStatus: "Borrowed Status 6",
      dateAdded: "Date Added 6",
      shelf: "1-1",
    },
    {
      boxArt: "Image 3",
      title: "Title 3",
      ratings: "Ratings 3",
      borrowedStatus: "Borrowed Status 3",
      dateAdded: "Date Added 3",
      shelf: "1-3",
    },
  ] as Array<GameInfo>;

  return games;
};

export default useGetGameCloset;
