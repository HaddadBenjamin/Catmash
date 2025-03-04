"use client";

import MatchCard from "@/components/molecules/MatchCard";
// import { shuffle } from "@/utils/array";
import { listCatPaths } from "@/utils/listCatPaths";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const cats = listCatPaths();

  // Après le vote : update + mettre à jour
  // const updateCatFiles = () => (cats = shuffle(cats));

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
          <h1>CATMASH</h1>
        </header>

        <main className={styles.matchContainer}>
          <MatchCard name="Chat 1" imagePath={cats.at(0)!} />
          <MatchCard name="Chat 2" imagePath={cats.at(-1)!} />
        </main>

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
