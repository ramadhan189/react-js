import { useState, useRef } from "react";

const useOverlay = () => {

    const cardRef = useRef(null);
    const timeoutref = useRef(null);
    const [show, setShow] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
    clearTimeout(timeoutref.current);
    const rect = cardRef.current.getBoundingClientRect();
    setPos({ x: rect.left, y: rect.top });
    setShow(true);
  };

  const handleMouseLeave = () => {
    timeoutref.current = setTimeout(() => {
      setShow(false);
    }, 100);
  };

  const cencelHide = () => {
    clearTimeout(timeoutref.current);
  };
return{

    cardRef,
    timeoutref,
    show,
    pos,
    handleMouseEnter,
    handleMouseLeave,
    cencelHide
}
}

export default useOverlay