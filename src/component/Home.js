import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function Home() {
  console.log(dummy);
  return (
    <ul className="list_day">
      {dummy.days.map((myday) => {
        return (
          <li key={myday.id}>
            <Link to={`/day/${myday.day}`}>Day {myday.day}</Link>
          </li>
        );
      })}
    </ul>
  );
}
