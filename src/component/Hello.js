import World from "./World";
import styles from "./Hello.module.css";
import { useState } from "react";
import UserName from "./UserName";

const Hello = function ({ age }) {
  console.log(age);
  const [name, setName] = useState("Seoyoon");
  const msg = age > 19 ? "성인" : "미성년자";

  return (
    <div>
      <h2 id="idname">
        {name}({age})세 : {msg}입니다 <br />
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === "Seoyoon" ? "Jiyoon" : "Seoyoon");
        }}
      >
        Change
      </button>
    </div>
  );
};

export default Hello;
