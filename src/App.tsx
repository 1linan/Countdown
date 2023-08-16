import React from "react";
import "./App.css";
import { useCountDown } from "./hook/countDown";
import { useLeftTime } from "./components/countDown/useLeftTime";
import { Countdown } from "./components/countDown/index";

function App() {
  const { day, hour, minute, second } = useCountDown(
    new Date("2023-08-20T09:52:00.000Z").getTime()
  );

  // const { endTime, nowTime } = useLeftTime(
  //   new Date("2023-08-20T09:52:00.000Z").getTime()
  // );

  return (
    <div className="App">
      <p>{day}</p>
      <p>{hour}</p>
      <p>{minute}</p>
      <p>{second}</p>
      {/* <Countdown endDate={endTime} now={nowTime} /> */}
    </div>
  );
}

export default App;
