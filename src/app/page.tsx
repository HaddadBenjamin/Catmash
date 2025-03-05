"use client";

import MatchCard from "@/components/molecules/MatchCard";
import { shuffle } from "@/shared/utils/array";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import useGetCats from "@/domains/cats/hooks/useGetCats";
import useLocalStorage from "@/shared/hooks/useLocalStorage";
import useCatRanks from "@/domains/cats/hooks/useCatRanks";

export default function Home() {
  const router = useRouter();
  const { cats, setCats, loading, error } = useGetCats();
  const [catRanks, setCatRanks] = useCatRanks(cats ?? []);
  const [matchPlayedCount, setMatchPlayedCount] = useLocalStorage(
    "matchPlayed",
    0
  );
  
  const onLike = (catId: string) => {
    setCats(shuffle(cats));
    setMatchPlayedCount(matchPlayedCount + 1);
    setCatRanks(
      catRanks.map((rank) =>
        rank.id === catId ? { ...rank, voteCount: rank.voteCount + 1 } : rank
      )
    );
  };

  return (
    <>
      <div className={styles.container}>
        {JSON.stringify(catRanks)}
        <header className={styles.header}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
          <h1>CATMASH</h1>
        </header>

        {loading ? (
          "... chargement"
        ) : error ? (
          `error: ${error}`
        ) : (
          <main className={styles.matchContainer}>
            <MatchCard
              name="Chat 1"
              imagePath={cats.at(0)?.url ?? "/logo.png"}
              onLike={onLike}
              id={cats.at(0)?.id ?? ""}
            />
            <MatchCard
              name="Chat 2"
              imagePath={cats.at(1)?.url ?? "/logo.png"}
              onLike={onLike}
              id={cats.at(1)?.id ?? ""}
            />
          </main>
        )}

        <footer className={styles.footer}>
          <button
            className={styles.rankingButton}
            onClick={() => router.push("/classement")}
          >
            Voir le classement des chats
            <span>
              {` ${matchPlayedCount} matchs joué${
                matchPlayedCount > 0 ? "s" : ""
              }`}
            </span>
          </button>
        </footer>
      </div>
    </>
  );
}
