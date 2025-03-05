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

  const sortedCatRanks = catRanks.sort((a, b) => b.voteCount - a.voteCount);

  return (
    <Layout title="Cat Mash: vote pour ton chat préféré">
      <div className={cn(pageStyles.pageContainer, styles.container)}>
        <Header />
        <div className={styles.rankContainer}>
          <div className={styles.topThreeContainer}>
            <div className={cn(styles.item, styles.second)}>
              <RankCard
                key={sortedCatRanks[1].id}
                {...sortedCatRanks[1]}
                index={1}
              />
            </div>
            <div className={cn(styles.item, styles.first)}>
              <RankCard
                key={sortedCatRanks[0].id}
                {...sortedCatRanks[0]}
                index={0}
              />
            </div>
            <div className={cn(styles.item, styles.third)}>
              <RankCard
                key={sortedCatRanks[2].id}
                {...sortedCatRanks[2]}
                index={2}
              />
            </div>
          </div>

          <div className={styles.grid}>
            {sortedCatRanks.slice(3).map((rank, index) => (
              <div className={styles.item} key={rank.id}>
                <RankCard {...rank} index={index + 3} />
              </div>
            ))}
          </div>
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
