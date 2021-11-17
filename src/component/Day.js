import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
export default function Day() {
  const day = useParams().day; //useParams = url값을 받음. useParams 값은 객체가 됨. {day : '2' } string으로 2를 받음.
  console.log(day);
  const wordList = dummy.words.filter((word) => {
    return word.day === Number(day); //url 의 /뒤에서 받아온 값이랑 db안의 값이랑 같은 애를 가져오기
  });
  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => {
            return (
              <tr key={word.id}>
                <td>{word.eng}</td>
                <td>{word.kor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
