
import google from "../content/google.png"
function Div (props){
    return (
        <>
        <div className="flex flex-col justify-center mt-5 sm:mt-9">{props.children}</div>
        </>
    )
}
function Button (props) {
    return (
        <>
        <button className={`duration-300 hover:text-[#757575] bg-[#3D4142] border-solid text-center  border-[#E7E3FC3B] text-[#fff] font-[Lato] font-[600px] text-[10px] leading-[14px] tracking-[.2px] rounded-[13.86px] border-[.58px] pt-[8.1px] pb-[8.1px] sm:text-[16px] sm:leading-[22.4px] sm:rounded-[24px] sm:border-[1px] sm:pt-[14px] sm:pb-[14px] ${props.className || ""}`} type="submit" >{props.desc}</button>
        </>
    )
}

function P (props){
    return (
        <>
        <p className="text-center text-[#9D9EA1] font-[500px] mt-[4px] text-[10px] leading-[14px] tracking-[.2px] sm:mt-[8px] mb-[4px] sm:mb-[8px] sm:text-[14px] sm:leading-[19.6px]">{props.p}</p>
        </>
    )
}
function Google (props){
    return (
        <>
        <button className="w-[100%] flex flex-nowrap items-center justify-center border-solid border-[#E7E3FC3B] text-[#ffff] font-lato font-[600px] rounded-[13.86px] border-[.58px] pt-[8.1px] pb-[8.1px] sm:rounded-[24px] sm:border-[1px] py-2 m-auto ">
            <img className="w-2.5 sm:w-4 mr-3 sm:mr-5" src={google} alt="" />
            <span className="duration-300 hover:text-[#757575]  text-[10px] leading-[14px] tracking-[.2px] sm:text-[16px] sm:leading-[22.4px] ">{props.span}</span>
        </button>
        </>
    )
}



export {Div, Button, Google, P}