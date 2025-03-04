import { Button } from "@/components/designSystem/Button";
import Image from "next/image";
import styles from "./index.module.css";

interface MatchCardProps {
  name: string;
  imagePath: string;
}

export default function MatchCard({ name, imagePath }: MatchCardProps) {
  return (
    <div className={styles.matchCard}>
      <Image
        className={styles.matchImage}
        src={imagePath}
        alt={name}
        width={100}
        height={100}
      />
      <p className={styles.matchName}>{name}</p>
      <Button>J’aime</Button>
    </div>
  );
}
