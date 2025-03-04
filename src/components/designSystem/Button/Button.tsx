import React from "react";
import styles from "./Button.module.css";

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
