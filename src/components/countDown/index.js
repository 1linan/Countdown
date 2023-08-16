
import React, { useEffect, useState } from 'react';



const oneDay = 1000 * 60 * 60 * 24;
const oneHour = 1000 * 60 * 60;
const oneMinute = 1000 * 60;
const oneSecond = 1000;

export function Countdown(props) {
    const { endDate, now } = props;

    const [day, setDay] = useState('00');
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');

    useEffect(() => {
        const setLeftTime = () => {
            const diff = endDate - now;

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
        };
         setLeftTime();
    }, [now, endDate]);


    return (
        <div>
            <div>{day}-{hour}-{minute}-{second}</div>
        </div>
    );
}