import React from "react";
import classNames from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button className={classNames(styles.Button, className)} {...rest}>
      {children}
    </button>
  );
}
