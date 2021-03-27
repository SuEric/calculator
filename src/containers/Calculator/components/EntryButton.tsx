import React from "react";

import Button from "../../../components/Button";

import styles from "./EntryButton.module.css";

type EntryButtonProps = {
  text: string;
  onClick: Function;
};

export default function EntryButton({ text, ...rest }: EntryButtonProps) {
  return (
    <Button className={styles.EntryButton} {...rest}>
      {text}
    </Button>
  );
}
