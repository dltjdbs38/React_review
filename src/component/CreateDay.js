import React from "react";
import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router-dom";
function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();
  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //넣을 내용 입력
        day: days.length + 1, //현재 날짜에 +1해주면 Day추가가 됨.
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다!");
        history.push(`/`); //Day추가 하고나면 첫번쨰 페이지로 이동하자.
        //useHistory.push를 하면 해당 히스토리로 이동한다.
        //a나 Link를 사용하지 않고 페이지 이동할 떄 사용.
      }
    });
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}

export default CreateDay;
