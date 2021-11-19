import { useState } from "react";
export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  //isShow && word.kor ... isShow가 true일떄만 AND문으로 인해 보여진다.
  const [isDone, setIsDone] = useState(word.isDone);
  function handleShow() {
    setIsShow(!isShow); // isShow가 true면 false로, false면 true로
  }
  function handleDone() {
    console.log(word);
    // setIsDone(!isDone);
    // fetch PUT 으로 올라가있는 데이터 수정하기
    // checkbox를 누르면 외운 단어는 isDone이 될 뿐더러
    // 다른 페이지에 갔다가 와도 유지가 된다.
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //바꿀 내용 입력
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
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
