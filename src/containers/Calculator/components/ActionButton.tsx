import React from "react";

import Button from "../../../components/Button";

import styles from "./ActionButton.module.css";

type ActionButtonProps = {
  text: string;
  onClick: Function;
};

export default function ActionButton({ text, ...rest }: ActionButtonProps) {
  return (
    <Button className={styles.ActionButton} {...rest}>
      {text}
    </Button>
  );
}
