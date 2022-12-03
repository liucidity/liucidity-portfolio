import React from 'react';
import { useEffect, useState } from 'react';

const UseOutsideClick = (ref) => {
  const [isClicked, setIsClicked] = useState();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(false)
      } else {
        setIsClicked(true)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  }, [ref]);
  // console.log(isClicked)
  return isClicked
}

export default UseOutsideClick;
