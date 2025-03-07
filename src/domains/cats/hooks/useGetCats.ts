import useFetch, { IUseFetchResponse } from "@/shared/hooks/useFetch";
import { ICat, ICatResponse } from "../index.model";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { shuffle } from "@/shared/utils/array";

const useGetCats = (): IUseFetchResponse<ICatResponse> & {
  cats: ICat[];
  setCats: Dispatch<SetStateAction<ICat[]>>;
} => {
  const [cats, setCats] = useState<ICat[]>([]);
  const { data, loading, error } = useFetch<ICatResponse>(
    "https://conseil.latelier.co/data/cats.json"
  );

  useEffect(() => {
    setCats(shuffle(data?.images ?? []));
  }, [data]);

  return { data, cats, setCats, loading, error };
};
export default useGetCats;
