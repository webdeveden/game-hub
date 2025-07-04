// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
import type { GameQuery } from "../App";
import useData from "./useData";
// import type { Genres } from "./useGenres";
// import type { Platform } from "./usePlatforms";

export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  // comes from the results data from the api in developer tools
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
  metacritic: number;
  rating_top: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
// the second argument in useGames selects paramas base on id.

// const useGames = () => {
//   // Hook logic here
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     // handling cancellation with abort controller
//     const controller = new AbortController();
//     const signal = controller.signal;
//     // Fetch games from the API
//     setLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games", { signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });
//     return () => controller.abort();
// //   }, []);
//   return { games, error, isLoading };
// };
export default useGames;
