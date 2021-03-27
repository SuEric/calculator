import React from "react";

import styles from "./ResultViewer.module.css";

type ResultViewerProps = {
  text: string;
};

export default function ResultViewer({ text }: ResultViewerProps) {
  return <div className={styles.ResultViewer}>{text}</div>;
}
