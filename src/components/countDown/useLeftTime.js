import React, { useState, useEffect } from "react";

let timer = null;
export function useLeftTime(end) {
  const [nowTime, setNowTime] = useState(new Date().getTime());

  useEffect(() => {
    if (end) {
      timer = setTimeout(() => {
        setNowTime(new Date().getTime());
      }, 1000);
      if (end < nowTime) {
        clearTimeout(timer);
      }
    }
  }, [nowTime, end]);
  return {
    nowTime,
    endTime: end,
    leftTime: nowTime - end, //>0活动已经结速 <0 活动正在进行中
  };
}
