import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(5);
    useEffect(() => {

        let id = setInterval(() => {

            setTime(prev => {

                if (prev <= 1) {
                    clearInterval(id);
                    return 0;        // ① new state
                }

                return prev - 1;     // ② new state
            });

        }, 1000);

        return () => {               // ③ cleanup function
            clearInterval(id);
        };  

    }, []);

    return (
        // <div>Timer:{String{time}.padstart(2,'0')}</div>
        <div>
   <div>
    Countdown: {Math.floor(time / 60)
        .toString()
        .padStart(2, "0")}
    :
    {(time % 60)
        .toString()
        .padStart(2, "0")}  
</div>
</div>
    )

}

export default Timer