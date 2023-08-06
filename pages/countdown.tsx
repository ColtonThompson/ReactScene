import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import style from '../styles/countdown.module.css';

const default_countdown = 5;
export default function Countdown() {
    const searchParams = useSearchParams();
    const timeParam = searchParams.get('time');

    const duration = default_countdown * 60 * 1000;

    const [time, setTime] = useState(duration);
    const [bgtime, setBGTime] = useState(duration)

    let milliseconds: number = time;
    let total_seconds = Math.floor(milliseconds / 1000);
    let total_minutes = Math.floor(total_seconds / 60);

    let seconds = total_seconds % 60;
    let minutes = total_minutes % 60;

    let message = `${minutes}:${seconds}`;
    if (minutes == 0 && seconds == 0) {
        message = "IT'S TIME!";
    } else if (seconds < 10) {
        message = `${minutes}:0${seconds}`;
    }

    useEffect(() => {

        if (time > 0) {
            setTimeout(() => {
                setTime(time - 1000);
            }, 1000);
        }
        setTimeout(() => {
            setBGTime(bgtime - 1000);
        }, 1000);
    }, [bgtime]);

    return (
        <>
        <div className={style.countdown}>
            {message}
        </div>
        </>
    );
}