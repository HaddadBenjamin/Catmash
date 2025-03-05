"use client";

import useCatRanks from "@/domains/cats/hooks/useCatRanks";
import { Button } from "@/shared/components/designSystem/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [catRanks] = useCatRanks([]);

  return (
    <div>
      {catRanks
        .sort((a, b) => b.voteCount - a.voteCount)
        .map(({ id, voteCount }) => (
          <div key={id}>{`${id}: ${voteCount}`}</div>
        ))}
      <Button onClick={() => router.push("/")}>Button accueuil</Button>
    </div>
  );
}
