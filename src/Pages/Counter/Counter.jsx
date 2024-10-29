import React from 'react'
import { useState, useEffect } from 'react';
const Counter = ({ from = 0, to, duration = 3000, keySuffix = "" }) => {
    const [count, setcount] = useState(from);
    useEffect(() => {
        let start = from;
        const end = to;
        const increment = (end - start) / (duration / 16)
        const step = () => {
            start += increment;
            if (start < end) {
                setcount(Math.floor(start))
                requestAnimationFrame(step)
            } else {
                setcount(end)
            }
        };
        step()
        console.log(count);
    }, [from, to, duration])


    return (
        <div className='col-lg-3'>
            <div className='counter-type-1'>
                <span className=''></span>
                <div className='offset-top-10'>
                    <div className='fw-bold counter d-flex
                    animated-first text-light  display-2 lead'>
                        {count} <span className='fw-bold counter d-flex
                    animated-first text-light  display-2 lead'> {keySuffix}</span>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Counter