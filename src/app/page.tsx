"use client";

import MatchCard from "@/components/molecules/MatchCard";
import { shuffle } from "@/shared/utils/array";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import useGetCats from "@/domains/cats/hooks/useGetCats";
import { ICat } from "@/domains/cats/index.model";

export default function Home() {
  const router = useRouter();
  const { data: initialCats, loading, error } = useGetCats();
  const [cats, setCats] = useState<ICat[]>([]);
  useEffect(() => {
    setCats(initialCats?.images ?? []);
  }, [initialCats]);

  console.log(cats);
  const onLike = (catPath: string) => {
    setCats(shuffle(cats));
    // mettre à jour les votes pour le chat catPath ++
  };

  return (
    <>
      <div className={styles.container}>
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
            />
            <MatchCard
              name="Chat 2"
              imagePath={cats.at(-1)?.url ?? "/logo.png"}
              onLike={onLike}
            />
          </main>
        )}

        <footer className={styles.footer}>
          <button
            className={styles.rankingButton}
            onClick={() => router.push("/classement")}
          >
            Voir le classement des chats
            {/* Utiliser les données du local storage, par défault 0 */}
            <span>X matchs joués</span>
          </button>
        </footer>
      </div>
    </>
  );
}
