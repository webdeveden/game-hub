import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}
// hidding the endpoint in the use hook file not in our components
const useGenres = () => useData<Genres>("/genres");

//     useData()
//   // Hook logic here
// //   const [genres, setGenres] = useState<Genres[]>([]);
// //   const [error, setError] = useState("");
// //   const [isLoading, setLoading] = useState(false);

// //   useEffect(() => {
// //     // handling cancellation with abort controller
// //     const controller = new AbortController();
// //     const signal = controller.signal;
// //     // Fetch games from the API
// //     setLoading(true);
// //     apiClient
// //       .get<FetchGenresResponse>("/genres", { signal })
// //       .then((res) => {
// //         setGenres(res.data.results);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         if (err instanceof CanceledError) return;
// //         setError(err.message);
// //         setLoading(false);
// //       });
// //     return () => controller.abort();
// //   }, []);
//   return { genres, error, isLoading };
// };
export default useGenres;
