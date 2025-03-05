"use client";

import MatchCard from "@/components/molecules/MatchCard";
import { shuffle } from "@/shared/utils/array";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import useGetCats from "@/domains/cats/hooks/useGetCats";
import useLocalStorage from "@/shared/hooks/useLocalStorage";
import useCatRanks from "@/domains/cats/hooks/useCatRanks";
import Layout from "@/shared/components/Layout";
import { useState } from "react";
import Header from "@/shared/components/Header";

export default function Home() {
  const router = useRouter();
  const { cats, setCats, loading, error } = useGetCats();
  const [catRanks, setCatRanks] = useCatRanks(cats ?? []);
  const [matchPlayedCount, setMatchPlayedCount] = useLocalStorage(
    "matchPlayed",
    0
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatedCardId, setAnimatedCardId] = useState<string>();

  const onLike = (catId: string) => {
    if (isAnimating) return;

    setAnimatedCardId(catId);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setAnimatedCardId(undefined);

      setCats(shuffle(cats));
      setMatchPlayedCount(matchPlayedCount + 1);
      setCatRanks(
        catRanks.map((rank) =>
          rank.id === catId ? { ...rank, voteCount: rank.voteCount + 1 } : rank
        )
      );
    }, 1000);
  };

  return (
    <Layout title="Cat Mash: vote pour ton chat préféré">
      <div className={styles.dashedLine} />
      <div className={styles.container}>
        <Header />

        {loading ? (
          "... chargement"
        ) : error ? (
          `error: ${error}`
        ) : cats.length >= 2 ? (
          <main className={styles.matchContainer}>
            <MatchCard
              state={
                !animatedCardId
                  ? undefined
                  : animatedCardId === cats.at(0)!.id
                  ? "win"
                  : "loose"
              }
              name="Chat 1"
              imagePath={cats.at(0)!.url}
              onLike={onLike}
              id={cats.at(0)!.id}
            />
            <MatchCard
              state={
                !animatedCardId
                  ? undefined
                  : animatedCardId === cats.at(1)!.id
                  ? "win"
                  : "loose"
              }
              name="Chat 2"
              imagePath={cats.at(1)!.url}
              onLike={onLike}
              id={cats.at(1)!.id}
            />
          </main>
        ) : (
          "Il faut un minimum de chats pour voter"
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
    </Layout>
  );
}
