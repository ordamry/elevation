import React from "react";

export default function Contact({ name, onClick }) {
  return <div onClick={() => onClick(name)}>{name}</div>;
}
