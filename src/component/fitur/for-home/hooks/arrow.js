import { useRef } from "react";

export const useHandleArrow = () => {

    const ref = useRef()

    const handleRight = () => {ref.current.scrollBy({ left: 450, behavior: "smooth"})} 
    const handleLeft = () =>{ref.current.scrollBy({ left: -450, behavior: "smooth"})}
    return{
        ref,
        handleLeft,
        handleRight
    }
}