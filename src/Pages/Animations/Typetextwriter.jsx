import React, { useState } from 'react'
import { useEffect } from 'react'

const Typetextwriter = ({ text, speed = 100 }) => {
    const [displayedText, setdisplayedText] = useState("")

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setdisplayedText((prev) => prev + text.charAt(index));
            index++
            if (index === text.length) clearInterval(interval);
        }, speed)
        return () => clearInterval (interval);

    }, [text, speed])

    return (
        <div>
            <p>{displayedText}</p>
        </div>
    )
}

export default Typetextwriter