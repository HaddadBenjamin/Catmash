import React from "react";
import styles from "./index.module.css";

export function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  );
}
