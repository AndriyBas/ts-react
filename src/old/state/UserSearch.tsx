import * as React from "react";
import styles from "./styles.module.css";

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  {
    name: "Sarah",
    age: 20,
  },
  {
    name: "Alex",
    age: 25,
  },
  {
    name: "Mike",
    age: 30,
  },
];

const UserSearch: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [name, setName] = React.useState("");
  const [user, setUser] = React.useState<User | undefined>(undefined);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onFindClick = () => {
    const foundUser = users.find((u) => u.name.includes(name));
    setUser(foundUser);
  };
  return (
    <div className={styles.box}>
      User search
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <button onClick={onFindClick}>Find user</button>
      <br />
      {user && (
        <div>
          <h3>User: {user.name}</h3>
          <p>Age: {user.age}</p>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
