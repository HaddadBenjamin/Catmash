"use client";

import { Button } from "@/designSystem/components/Button";
import Image from "next/image";
import styles from "./index.module.css";
import cn from "classnames";

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
        styles.matchCardContainer,
        state === "win" && styles.win,
        state === "loose" && styles.lose
      )}
    >
      <Image
        className={styles.matchImage}
        src={imagePath}
        alt={name}
        width={200}
        height={200}
        style={{ minHeight: "200px", width: "auto", objectFit: "cover" }}
      />
      <p className={styles.matchName}>{name}</p>
      <Button onClick={() => onLike(id)}>J’aime</Button>
    </div>
  );
}
