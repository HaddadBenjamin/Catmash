"use client";

import MatchCard from "@/components/molecules/MatchCard";
import { shuffle } from "@/shared/utils/array";
import styles from "./page.module.css";
import useGetCats from "@/domains/cats/hooks/useGetCats";
import useLocalStorage from "@/shared/hooks/useLocalStorage";
import useCatRanks from "@/domains/cats/hooks/useCatRanks";
import Layout from "@/shared/components/Layout";
import { useState } from "react";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";

export default function Home() {
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
            {cats.slice(0, 2).map((cat, index) => (
              <MatchCard
                key={cat.id}
                state={
                  !animatedCardId
                    ? undefined
                    : animatedCardId === cat.id
                    ? "win"
                    : "loose"
                }
                name={`Chat ${index + 1}`}
                imagePath={cat.url}
                onLike={onLike}
                id={cat.id}
              />
            ))}
          </main>
        ) : (
          "Il faut un minimum de chats pour voter"
        )}

        <Footer
          redirectTitle="Voir le classement des chats"
          redirectPath="/classement"
          matchPlayedCount={matchPlayedCount}
        />
      </div>
    </Layout>
  );
}
