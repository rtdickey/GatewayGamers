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

export interface DetailedGameSearchResponse {
  id: string;
  name: {
    type: string;
    value: string;
  };
  yearPublished: {
    value: string;
  };
  type: string;
  thumbnail: string;
  image: string;
  description: string;
  minplayers: string;
  maxplayers: string;
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
