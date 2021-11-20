import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/days")
      .then((res) => {
        //res는 http응답이고 실제 json은 아니다 그래서 .json()
        return res.json();
      }) //다음 then은 이전 then의 return 값을 res로 받아온다..?
      .then((data) => {
        setDays(data);
      });
  }, []); //useEffect는 페이지에서 무언가 랜더링이 되면 실행됨. 따라서 특정 변수가 변경됐을 떄만 실행하고 싶다면 ,다음 인자를 []안에 넣어주면 딘다.(의존성 배열)
  //의존성 배열과 상관없이 만약 새로고침 최초에 한번만 실행하고 싶다면 ,뒤에 빈 배열 []을 넣어주면 된다.
  return (
    <ul className="list_day">
      {days.map((myday) => {
        return (
          <li key={myday.id}>
            <Link to={`/day/${myday.day}`}>Day {myday.day}</Link>
          </li>
        );
      })}
    </ul>
  );
}
