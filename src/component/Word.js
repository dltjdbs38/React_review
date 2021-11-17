import { useState } from "react";
export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  //isShow && word.kor ... isShow가 true일떄만 AND문으로 인해 보여진다.
  function handleShow() {
    setIsShow(!isShow); // isShow가 true면 false로, false면 true로
  }
  return (
    <tr>
      <td>
        <input type="checkbox"></input>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={handleShow}>뜻 보기</button>
        <button class="btn_del">삭제</button>
      </td>
    </tr>
  );
}
