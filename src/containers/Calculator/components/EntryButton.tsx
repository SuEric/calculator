import React from "react";

import Button from "../../../components/Button";

type EntryButtonProps = {
  text: string;
};

export default function EntryButton({ text, ...rest }: EntryButtonProps) {
  return <Button {...rest}>{text}</Button>;
}
