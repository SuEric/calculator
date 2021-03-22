import React from "react";

import styles from "./ResultViewer.module.css";

type ResultViewerProps = {
  result: number;
};

export default function ResultViewer({ result }: ResultViewerProps) {
  return <div className={styles.ResultViewer}>{result}</div>;
}
