// Example of JSON from Search Query to BGG
// {
//     "name": { "type": "primary", "value": "The Kevin Bloody Wilson Bar Krawl" },
//     "yearpublished": { "value": "1994" },
//     "type": "boardgame",
//     "id": "291540"
// }
export interface GameSearchResponse {
  name: {
    type: string;
    value: string;
  };
  yearPublished: {
    value: string;
  };
  type: string;
  id: string;
}
