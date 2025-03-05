"use client";

import { Button } from "@/designSystem/components/Button";
import styles from "./index.module.css";
import cn from "classnames";
import cardStyles from "@/styles/card.module.css";
import CardImage from "@/shared/components/CardImage";

interface MatchCardProps {
  name: string;
  imagePath: string;
  id: string;
  onLike: (imagePath: string) => void;
  state?: "win" | "loose";
}

export default function MatchCard({
  name,
  imagePath,
  onLike,
  id,
  state,
}: MatchCardProps) {
  return (
    <div
      className={cn(
        cardStyles.card,
        state === "win" && styles.win,
        state === "loose" && styles.lose
      )}
    >
      <CardImage imagePath={imagePath} name={name} />
      <p className={cardStyles.cardName}>{name}</p>
      <Button onClick={() => onLike(id)}>J’aime</Button>
    </div>
  );
}
