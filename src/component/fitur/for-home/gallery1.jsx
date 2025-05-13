import Arrow from "../content/arrow.png"
import { useHandleArrow } from "./hooks/arrow"


const Gallery = (props) => {

    

    const {handleLeft, handleRight, ref} = useHandleArrow(null);

    return (
            <>
            <div className="relative">
            <h1 className="font-bold text-white text-[20px] mt-8 leading-[24px] sm:text-[32px] sm:leading-[35.2px]">
                {props.head}
            </h1>
            <img className={`hidden lg:block w-11 h-11 absolute z-[7] top-[120px] left-[-20px] cursor-pointer `} src={Arrow} onClick={handleLeft} alt="" />
            <img className={`hidden lg:block w-11 h-11 absolute z-[7] top-[120px] right-[-20px] cursor-pointer rotate-[180deg] `} src={Arrow} onClick={handleRight} alt="" />
            <div className="flex flex-row overflow-x-scroll overflow-y-hidden scroll-bar max-h-[200px] mt-[20px] sm:mt-[32px]" ref={ref}>
               {props.children}
            </div>
            </div>
           
            </>
      
    )
}



export default Gallery