"use client";

import { Button } from "@/shared/components/designSystem/Button";
import Image from "next/image";
import styles from "./index.module.css";

interface MatchCardProps {
  name: string;
  imagePath: string;
  onLike: (imagePath: string) => void;
}

export default function MatchCard({ name, imagePath, onLike }: MatchCardProps) {
  return (
    <div className={styles.matchCard}>
      <Image
        className={styles.matchImage}
        src={imagePath}
        alt={name}
        width={200}
        height={200}
        style={{ minHeight: "200px", width: "auto", objectFit: "cover" }}
      />
      <p className={styles.matchName}>{name}</p>
      <Button onClick={() => onLike(imagePath)}>J’aime</Button>
    </div>
  );
}
