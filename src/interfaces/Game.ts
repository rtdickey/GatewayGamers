export interface GameInfo {
  id: string;
  boxArt: string;
  title: string;
  ratings: string;
  borrowedStatus: string;
  dateAdded: string;
  shelf: string;
}

export interface GameInfoBGG {
  thumbnail: string;
}

export interface GameDetails {
  details: GameInfo;
  className: string;
}
