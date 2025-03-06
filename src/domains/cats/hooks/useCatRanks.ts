import useLocalStorage from "@/shared/hooks/useLocalStorage";
import { ICat, ICatRank } from "../index.model";
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useCatRanks = (cats: ICat[]): [ICatRank[], any] => {
  const [catRanks, setCatRanks] = useLocalStorage<ICatRank[]>("catRanks", []);

  useEffect(() => {
    if (catRanks.length === 0)
      setCatRanks(cats.map((cat) => ({ ...cat, voteCount: 0 })));
  }, [cats.length]);

  return [catRanks, setCatRanks];
};

export default useCatRanks;
