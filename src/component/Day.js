import dummy from "../db/data.json";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";
export default function Day() {
  const day = useParams().day; //useParams = url값을 받음. useParams 값은 객체가 됨. {day : '2' } string으로 2를 받음.
  //const {day} = useParams();
  const [words, setWords] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`) //그냥 words만 하면 전체 객체를 다 받아오지만 ?day={}를 하면 day키가 {}인 애들만 가져온다.
      .then((res) => {
        console.log(res);
        //res는 http응답이고 실제 json은 아니다 그래서 .json()
        return res.json();
      }) //다음 then은 이전 then의 return 값을 res로 받아온다..?
      .then((data) => {
        console.log(data);
        setWords(data);
      });
  }, [day]); //의존성 배열에 day를 안 넣으면 day가 바뀌어도 새로운 정보를 받을 수 없다.

  //useEffect는 페이지에서 무언가 랜더링이 되면 실행됨. 따라서 특정 변수가 변경됐을 떄만 실행하고 싶다면, 다음 인자를 []안에 넣어주면 딘다.(의존성 배열)
  //의존성 배열과 상관없이 만약 새로고침 최초에 한번만 실행하고 싶다면 ,뒤에 빈 배열 []을 넣어주면 된다.

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((myword) => {
            return <Word word={myword} key={myword.id} />;
          })}
        </tbody>
      </table>
    </>
  );
}
