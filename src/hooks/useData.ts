// creating a generic hook

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  // Hook logic here
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      // handling cancellation with abort controller
      const controller = new AbortController();
      const signal = controller.signal;
      // Fetch games from the API
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal, ...requestConfig })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    dependencies ? [...dependencies] : [] //spreading array of dependencies.
  );
  return { data, error, isLoading };
};
export default useData;
