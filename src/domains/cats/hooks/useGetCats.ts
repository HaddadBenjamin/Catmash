import useFetch, { IUseFetchResponse } from "@/shared/hooks/useFetch";
import { ICatResponse } from "../index.model";

const useGetCats = (): IUseFetchResponse<ICatResponse> =>
  useFetch<ICatResponse>("https://conseil.latelier.co/data/cats.json");

export default useGetCats;
