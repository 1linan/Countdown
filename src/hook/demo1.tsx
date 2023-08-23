import { useEffect } from "react";

let timerId: NodeJS.Timeout;
function useCountDown3(endTime: number): void {
  useEffect(() => {
    function startTimer() {
      // 清除现有的定时器
      clearInterval(timerId);

      // 开始新的定时器
      timerId = setInterval(function () {
        // 定时器逻辑

        console.log("Timer is running...");
      }, 1000);
    }

    // 页面加载时开始定时器
    startTimer();

    // 监听窗口失去焦点事件
    window.addEventListener("blur", function () {
      // 清除定时器
      clearInterval(timerId);
    });

    // 监听窗口获得焦点事件
    window.addEventListener("focus", function () {
      // 重新开始定时器
      startTimer();
    });
  }, []);
}
