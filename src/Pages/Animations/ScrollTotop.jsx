import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
const ScrollTotop = () => {
    const location = useLocation();
    useEffect(() => {
    window.scrollTo(0, 0);
    }, [location]);

    return null;
    
  return (
    <div>

    </div>
  )
}

export default ScrollTotop