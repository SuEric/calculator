import React from "react";

import Button from "../../../components/Button";

import styles from "./OperationButton.module.css";

type OperationButtonProps = {
  text: string;
  onClick: Function;
};

export default function OperationButton({
  text,
  ...rest
}: OperationButtonProps) {
  return (
    <Button className={styles.OperationButton} {...rest}>
      {text}
    </Button>
  );
}
