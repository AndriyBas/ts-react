import * as React from "react";
import style from "./styles.module.css";

export const GuestList: React.FC = () => {
  const [name, setName] = React.useState("");
  const [guests, setGuests] = React.useState<string[]>([]);

  const onClick = () => {
    setGuests([...guests, name]);
    setName("");
  };

  return (
    <div className={style.box}>
      <span>Guest List</span>
      <ul>
        {guests.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add guest</button>
    </div>
  );
};
