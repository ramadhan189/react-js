
import Star from "../content/Star.png"
const Movie = (props) =>{
   

        return (
        <>
            <div className="min-w-max w-[100%] overflow-hidden h-full relative mr-[16px] sm:mr-[24px] hover:scale-[1.05] hover:duration-300" >
        <img className="rounded-[4.37px] sm:rounded-[8px] w-[300px] h-[162px] block " src={props.img} alt="" />
        <div className="flex flex-row w-[300px] items-center justify-between absolute bottom-0 left-0  px-1" style={{backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, 1), transparent)"}}>
            <h1 className="font-[Lato] text-[#ffff] font-semibold text-[18px] ">{props.title}</h1>
            <span className="text-white flex flex-row" >
                {props.rate}
                <img className="w-[15px] h-auto object-contain" src={Star} alt="" />
            </span>
        </div>
    </div>
         
        </>
    )
} 

export default Movie