import React from "react";

type ResultViewerProps = {
  result: number;
};

export default function ResultViewer({ result }: ResultViewerProps) {
  return <div>{result}</div>;
}
