import React from "react";
import Contact from "./Contact";

export default function List({ contacts, onSelect }) {
  return (
    <div>
      {contacts.map((name) => (
        <Contact key={name} name={name} onClick={onSelect} />
      ))}
    </div>
  );
}
