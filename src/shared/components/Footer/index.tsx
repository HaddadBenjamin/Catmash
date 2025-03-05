"use client";

import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import ArrowTop from "../../../designSystem/Icons/ArrowTop";

interface Props {
  redirectTitle: string;
  redirectPath: string;
  matchPlayedCount: number;
}

const Footer = ({ redirectPath, matchPlayedCount, redirectTitle }: Props) => {
  const router = useRouter();

  return (
    <footer className={styles.container}>
      <button
        className={styles.button}
        onClick={() => router.push(redirectPath)}
      >
        <ArrowTop fill="##00102e" width={24} height={24} className={styles.arrowTopIcon} />

        <div>{redirectTitle}</div>
        <div className={styles.description}>
          {matchPlayedCount}{" "}
          <span className={styles.unbold}>
            {` matchs joué${matchPlayedCount > 0 ? "s" : ""}`}
          </span>
        </div>
      </button>
    </footer>
  );
};

export default Footer;
