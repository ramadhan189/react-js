import Arrow from "../content/arrow.png"
import Star from "../content/star.png"
const Gallery = (props) => {

    return (
            <>
             <h1 className="font-bold text-white text-[20px] leading-[24px] sm:text-[32px] sm:leading-[35.2px]">
                {props.head}
            </h1>
            <img className="hidden lg:block w-11 h-11 absolute z-[7] top-[120px] left-[60px]" src={Arrow} alt="" />
            <img className="hidden lg:block w-11 h-11 absolute z-[7] top-[120px] right-[75px] rotate-[180deg]" src={Arrow} alt="" />
            <div className="flex flex-row overflow-x-scroll overflow-y-hidden scroll-bar max-h-[151px] mt-[20px] sm:mt-[32px]">
               {props.children}
            </div>
            </>
      
    )
}

const Movie = (props) =>{

    return (
        <>
         <div className="min-w-[309px] w-[100%] overflow-hidden h-full relative mr-[16px] sm:mr-[24px] hover:scale-[1.05] hover:duration-300" >
                    <img className="rounded-[4.37px] sm:rounded-[8px] w-[100%] block " src={props.img} alt="" />
                    <div className="flex flex-row items-center justify-start absolute bottom-[0] left-[0] w-[100%] m-auto h-[50%]" style={{backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, 1), transparent)"}}>
                        <h1 className="text-Lato text-[#ffff] font-semibold text-[18px] ml-[16px]">{props.title}</h1>
                        <img className="w-[15px] h-[15px] ml-[110px]" src={Star} alt="" />
                        <span className="text-white" >{props.rate}</span>
                    </div>
                </div>
        </>
    )
} 

export {Gallery, Movie }