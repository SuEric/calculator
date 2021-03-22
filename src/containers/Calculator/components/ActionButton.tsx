import React from "react";

import Button from "../../../components/Button";

type ActionButtonProps = {
  text: string;
};

export default function ActionButton({ text, ...rest }: ActionButtonProps) {
  return <Button {...rest}>{text}</Button>;
}
