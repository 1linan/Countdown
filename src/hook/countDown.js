import React, { useState, useEffect } from "react";

let timer = null;

const oneDay = 1000 * 60 * 60 * 24;
const oneHour = 1000 * 60 * 60;
const oneMinute = 1000 * 60;
const oneSecond = 1000;


export function useCountDown(endDate) {

    const [day, setDay] = useState('00');
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');


    
    const [endTime]=useState(endDate);
    const [nowTime, setNowTime] = useState(Math.ceil(new Date().getTime()));;


  
  useEffect(() => {
    
    const setLeftTime = () => {
        const diff = endTime - nowTime;
        let msec = diff;
        const d = Math.floor(msec / oneDay);
        msec -= d * oneDay;
        const hh = Math.floor(msec / oneHour);
        msec -= hh * oneHour;
        const mm = Math.floor(msec / oneMinute);
        msec -= mm * oneMinute;
        const ss = Math.floor(msec / oneSecond);
        msec -= ss * oneSecond;
        setDay(`${d}`.replace(/^\d$/, '0$&'));
        setHour(`${hh}`.replace(/^\d$/, '0$&'));
        setMinute(`${mm}`.replace(/^\d$/, '0$&'));
        setSecond(`${ss}`.replace(/^\d$/, '0$&'));

        console.log(`${mm}`.replace(/^\d$/, '0$&'))
    };
    
     setLeftTime();
}, [nowTime, endTime]);



  useEffect(() => {
    if (endTime) {

      timer = requestAnimationFrame(() => {
        setNowTime(Math.ceil(new Date().getTime()));
      });
       // 监听窗口获得焦点事件
        window.addEventListener('focus', function() {
          console.log('重新开始定时器')
          // 重新开始定时器
          timer = requestAnimationFrame(() => {
            setNowTime(Math.ceil(new Date().getTime()));
          });
        });
      // timer=setInterval(()=>{
      //   setNowTime(Math.ceil(new Date().getTime()));
      // },1000)
      if (endTime < nowTime) {
        console.log("timed out")
        window.cancelAnimationFrame(timer);
      }
    }
 
  // 监听窗口失去焦点事件
  window.addEventListener('blur', function() {
    // 清除定时器
    window.cancelAnimationFrame(timer);
    console.log("销毁")
  });



  }, [nowTime, endTime]);



  return {
   day,hour,minute,second,
  };
}
