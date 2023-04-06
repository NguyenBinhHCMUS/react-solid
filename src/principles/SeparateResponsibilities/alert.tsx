import React from "react";

interface AlertProps {
  text: string;
}

export const showAlert = (props: AlertProps) => {
  alert(props.text);
};

export default function Alert(prop: AlertProps) {
  return <div>Alert</div>;
}
