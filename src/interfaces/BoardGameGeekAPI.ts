// Example of JSON from Search Query to BGG
// {
//     "name": { "type": "primary", "value": "The Kevin Bloody Wilson Bar Krawl" },
//     "yearpublished": { "value": "1994" },
//     "type": "boardgame",
//     "id": "291540"
// }
export interface GameSearchResponse {
  id: string;
  name: {
    type: string;
    value: string;
  };
  yearPublished: {
    value: string;
  };
  type: string;
}

export interface DetailedGameName {
  type: string;
  value: string;
}

export interface DetailedGameLink {
  type: string;
  id: string;
  value: string;
}

export interface DetailedGameSearchResponse {
  id: string;
  name: DetailedGameName[];
  yearPublished: {
    value: string;
  };
  type: string;
  thumbnail: string;
  image: string;
  description: string;
  minplayers: {
    value: string;
  };
  maxplayers: {
    value: string;
  };
  playingtime: {
    value: string;
  };
  minplaytime: {
    value: string;
  };
  maxplaytime: {
    value: string;
  };
  minage: {
    value: string;
  };
  link: DetailedGameLink[];
  publisher;
}

export interface HotResponse {
  thumbnail: {
    value: string;
  };
  name: {
    value: string;
  };
  yearpublished: {
    value: string;
  };
  id: string;
  rank: string;
}
