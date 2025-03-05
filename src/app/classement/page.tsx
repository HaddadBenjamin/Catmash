"use client";

import useCatRanks from "@/domains/cats/hooks/useCatRanks";
import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import useLocalStorage from "@/shared/hooks/useLocalStorage";

export default function Home() {
  const [catRanks] = useCatRanks([]);
  const [matchPlayedCount] = useLocalStorage("matchPlayed", 0);

  return (
    <>
      <Header />
      <div>
        {catRanks
          .sort((a, b) => b.voteCount - a.voteCount)
          .map(({ id, voteCount }) => (
            <div key={id}>{`${id}: ${voteCount}`}</div>
          ))}
        <Footer
          redirectTitle="Revenir au vote"
          redirectPath="/"
          matchPlayedCount={matchPlayedCount}
        />
      </div>
    </>
  );
}
