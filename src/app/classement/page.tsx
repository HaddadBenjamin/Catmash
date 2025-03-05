"use client";

import useCatRanks from "@/domains/cats/hooks/useCatRanks";
import Footer from "@/shared/components/Footer";
import useLocalStorage from "@/shared/hooks/useLocalStorage";
import pageStyles from "../../styles/page.module.css";
import Layout from "@/shared/components/Layout";
import Header from "@/shared/components/Header";
import cn from "classnames";
import styles from "./page.module.css";
import RankCard from "@/domains/cats/components/RankCard";

const Classement = () => {
  const [catRanks] = useCatRanks([]);
  const [matchPlayedCount] = useLocalStorage("matchPlayed", 0);

  return (
    <Layout title="Cat Mash: vote pour ton chat préféré">
      <div className={cn(pageStyles.pageContainer, styles.container)}>
        <Header />
        <div className={styles.rankContainer}>
          {catRanks
            .sort((a, b) => b.voteCount - a.voteCount)
            .map((rank, index) => (
              <RankCard key={rank.id} {...rank} index={index} />
            ))}
        </div>
        <Footer
          redirectTitle="Revenir au vote"
          redirectPath="/"
          matchPlayedCount={matchPlayedCount}
        />
      </div>
    </Layout>
  );
};

export default Classement;
