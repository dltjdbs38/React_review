import { useState } from "react";
export default function Word({ word: w }) {
  const [word, setWord] = useState(w);
  //{word:w}로 받고 w쓰는 거랑 props 로 받고 props.word랑 같음.
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
  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }
  if (word.id === 0) {
    //삭제 버튼을 누르면 fetch DELETE가 일어나고 word의 id를 0으로 만들었었음. 그러므로 word.id===0이면 null을 리턴해서 아무것도 띄우지 않게 한다.
    return null;
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
        <button className="btn_del" onClick={del}>
          삭제
        </button>
      </td>
    </tr>
  );
}
