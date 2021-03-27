import React, { useState } from "react";

import {
  EntryButton,
  OperationButton,
  ActionButton,
  ResultViewer,
} from "./components";

import styles from "./Calculator.module.css";

const OPERATIONS = {
  "/": (left: number, right: number): number => left / right,
  x: (left: number, right: number): number => left * right,
  "-": (left: number, right: number): number => left - right,
  "+": (left: number, right: number): number => left + right,
};

type Operator = keyof typeof OPERATIONS;

export default function Calculator() {
  const [leftNumber, setLeftNumber] = useState<number | null>();
  const [rightNumber, setRightNumber] = useState<number | null>();
  const [operator, setOperator] = useState<Operator | null>();
  const [viewerText, setViewerText] = useState("0");

  function processOperation() {
    if (operator) {
      const operationMethod = OPERATIONS[operator];
      const newResult: number = operationMethod(
        Number(leftNumber),
        Number(rightNumber)
      );
      setViewerText(newResult.toString());
      setLeftNumber(newResult);
      setRightNumber(null);
    }
  }

  return (
    <div className={styles.Calculator}>
      <ResultViewer text={viewerText} />
      <div className={styles.Buttons}>
        <div className={styles.Left}>
          <ActionButton
            text="AC"
            onClick={() => {
              setLeftNumber(null);
              setRightNumber(null);
              setOperator(null);
              setViewerText("0");
              // leftNumber.current = null;
            }}
          />
          <ActionButton text="+/-" onClick={() => {}} />
          <ActionButton text="%" onClick={() => {}} />
          {Array.from(Array(10)).map((_, index) => (
            <EntryButton
              key={`entry-${index}`}
              text={index.toString()}
              onClick={() => {
                let newNumber;
                if (operator) {
                  newNumber = Number(`${rightNumber ?? 0}${index}`);
                  setRightNumber(newNumber);
                } else {
                  newNumber = Number(`${leftNumber ?? 0}${index}`);
                  setLeftNumber(newNumber);
                }
                setViewerText(newNumber.toString());
              }}
            />
          ))}
        </div>
        <div className={styles.Right}>
          {Object.keys(OPERATIONS).map((symbol) => (
            <OperationButton
              key={`symbol-${symbol}`}
              onClick={() => {
                if (leftNumber != null && rightNumber != null) {
                  processOperation();
                }
                setOperator(symbol as Operator);
              }}
              text={symbol}
            />
          ))}
          <OperationButton
            onClick={() => {
              processOperation();
            }}
            text="="
          />
        </div>
      </div>
    </div>
  );
}
