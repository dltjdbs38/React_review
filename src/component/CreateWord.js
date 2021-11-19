import useFetch from "../hooks/useFetch";
import { useRef } from "react";
export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  function onSubmit(e) {
    e.preventDefault(); //form태그의 기본 기능인 새로고침 방지.
    console.log(engRef.current.value);
    console.log(korRef.current.value);
    console.log(dayRef.current.value);
    //current를 이용하면 해당 요소에 접근할 수 있고, value는 input에 입력된 값을 얻을 수 있다.
    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //넣을 내용 입력
        day: dayRef.current.value,
        eng: korRef.current.value,
        kor: engRef.current.value,
        isDone: false, //로 고정
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다!");
      }
    });
  }
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  //useRef는 DOM에 접근할 수 있게 해준다.
  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef}></input>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef}></input>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => {
            return (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ); // day를 여기서 선택해서 해당 day에 단어를 create한다.
          })}
        </select>
      </div>
      <button>저장</button>
    </form>
  ); // label 태그는
}
