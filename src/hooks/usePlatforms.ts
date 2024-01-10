import { useQuery } from "@tanstack/react-query";

import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./useGames";
// import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: async () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: {count: platforms.length, results: platforms}
  });

export default usePlatforms;
