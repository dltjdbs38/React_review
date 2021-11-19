import useFetch from "../hooks/useFetch";
export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  return (
    <form>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer"></input>
      </div>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer"></input>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select>
          {days.map((day) => {
            <option key={day.id} value={day.day}></option>; // day를 여기서 선택해서 해당 day에 단어를 create한다.
          })}
        </select>
      </div>
      <button>저장</button>
    </form>
  ); // label 태그는
}
