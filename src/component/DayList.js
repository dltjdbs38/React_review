import dummy from "../db/data.json";

export default function DayList() {
  console.log(dummy);
  return (
    <ul className="list_day">
      {dummy.days.map((myday) => {
        return <li key={myday.id}>Day {myday.day}</li>;
      })}
    </ul>
  );
}
