import "./App.css";
// import { useCountDown } from "./hook/countDown";
import { useCountDown2 } from "./hook/countDown2";

function App() {
  // const { day, hour, minute, second } = useCountDown(
  //   new Date("2023-08-22T09:52:00.000Z").getTime()
  // );
  const { days, hours, minutes, seconds } = useCountDown2(
    new Date("2023-08-22T03:35:00.000Z").getTime()
  );

  return (
    <div className="App">
      {/* <p>
        {day}-{hour}-{minute}-{second}
      </p> */}
      <div>---------------------------------------------</div>
      <p>
        {days}-{hours}-{minutes}-{seconds}
      </p>
      {/* <Countdown endDate={endTime} now={nowTime} /> */}
    </div>
  );
}

export default App;
