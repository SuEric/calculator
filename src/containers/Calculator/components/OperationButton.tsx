import React from "react";

import Button from "../../../components/Button";

type OperationButtonProps = {
  text: string;
};

export default function OperationButton({
  text,
  ...rest
}: OperationButtonProps) {
  return <Button {...rest}>{text}</Button>;
}
