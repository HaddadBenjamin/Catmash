import useLocalStorage from "@/shared/hooks/useLocalStorage";
import { ICat, ICatRank } from "../index.model";
import { Dispatch, SetStateAction, useEffect } from "react";

const useCatRanks = (
  cats: ICat[]
): [ICatRank[], Dispatch<SetStateAction<ICatRank[]>>] => {
  const [catRanks, setCatRanks] = useLocalStorage<ICatRank[]>("catRanks", []);

  useEffect(() => {
    if (catRanks.length === 0)
      setCatRanks(cats.map((cat) => ({ ...cat, voteCount: 0 })));
  }, [cats.length]);

  return [catRanks, setCatRanks];
};

export default useCatRanks;
