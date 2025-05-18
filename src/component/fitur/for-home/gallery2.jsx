import Arrow from "../content/arrow.png";
import {useHandleArrow} from "./hooks/arrow"

const CoverGallery1 = (props) => {

    return(
        <>
        <main className="flex flex-col justify-center text-Lato text-[#ffff] mt-[20px] sm:my-[20px]">
            {props.children}
        </main>
        </>
    )
}
const Gallery1 = (props) => {

    const {handleLeft, handleRight, ref} = useHandleArrow(null);

    return (
        <>
         <h1 className="mt-[20px] sm:mt-10 font-bold text-[20px] sm:text-[32px] leading-[20px] sm:leading-[35.2px] ">{props.head}</h1>
         <section className="relative">
         <img className="hidden lg:block w-[44px] h-[44px] absolute z-[3] top-[160px] left-[-20px] cursor-pointer" src={Arrow} onClick={handleLeft} alt="" />
         <img className="hidden lg:block w-[44px] h-[44px] absolute z-[3] top-[160px] right-[-20px] rotate-[180deg]       cursor-pointer" src={Arrow} onClick={handleRight} alt="" />
             <div className="flex flex-row overflow-x-scroll scroll-bar mt-5 sm:mt-8 relative" ref={ref}>
                {props.children}
            </div>
         </section>
        </>
    )
}

const Movie1 = (props) => {
    
    return (
        <>
        <div className="relative min-w-max w-full h-full mr-4 transition-transform duration-300">
            <img className="mr-[16px] sm:mr-[28px] block w-[90px] sm:w-[230px] h-[140px] sm:h-[340px] rounded-[4px] sm:rounded-[8px] hover:scale-[1.105] hover:duration-300 " src={props.img} alt="" />
            <span className={`${!props.title ? "hidden" : "block absolute font-[Lato] font-[400px] text-[5px] sm:text-[14px] leading-[9px] sm:leading-[19px] text-center w-[14px] sm:w-[31px] h-[18px] sm:h-[48px] bg-[#B71F1D] top-[0] right-10 rounded-tr-sm rounded-bl-sm"}`}>{props.title}
            </span>
            <span className={`${!props.premium ? "hidden" : " "}`}>{props.premium} </span>
        </div>
        
        </>
    )
}



export {CoverGallery1, Gallery1, Movie1}