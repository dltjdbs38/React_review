import { useState } from "react";
export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  //isShow && word.kor ... isShow가 true일떄만 AND문으로 인해 보여진다.
  const [isDone, setIsDone] = useState(word.isDone);
  function handleShow() {
    setIsShow(!isShow); // isShow가 true면 false로, false면 true로
  }
  function handleDone() {
    setIsDone(!isDone);
  }
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={handleDone}></input>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={handleShow}>{isShow ? "뜻 숨기기" : "뜻 보기"}</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}
