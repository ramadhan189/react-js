
function Label (props) {
    return (
        <>
        <label className={`font-Lato font-[500px] text-[#ffff] text-[10px] sm:text-[18px] leading-[14px] sm:leading-[25.2px] ${props.className}`} htmlFor={props.for}>{props.cont}</label>
        </>
    )
}

function Input (props) {
    return(
        <>
         <input className={`hover:text-[#757575] bg-tranparent font-[Lato] text-[#C1C2C4] font-[400px] text-[9.24px] sm:text-[16px] leading-[12.94px] sm:leading-[22.4px] tracking-[.12px] rounded-[12px] sm:rounded-[24px] border-solid border-[.58px] sm:border-[1px] border-[#E7E3FC3B] pt-[8.1px] sm:pt-[14px] pb-[8.1px] sm:pb-[14px] pl-[11.55px] sm:pl-[20px] mt-[3.47px] sm:mt-[6px] ${props.className}`} type={props.type} name={props.name} value={props.value} onChange={props.onChange} id={props.id} placeholder={props.placeholder} />
        </>
    )
}

function Frame (props){
    return (
        <>
        <div className="mt-1.5 sm:mt-3 inline-flex font-[Lato]">
            <span className=" font-normal text-[#C1C2C4] text-[10px] sm:text-[16px] leading-[14px] sm:leading-[22.4px] tracking-[.2px] mr-0.5 ">{props.spanTop}</span>
            <a className=" duration-300 hover:text-[#757575] font-medium text-[#fff] text-[10px] sm:text-[16px] leading-[14px] sm:leading-[22.4px] tracking-[.2px] " href={props.a}>{props.aDesc}</a>
            <span className="duration-300 hover:text-[#757575] font-normal text-[#fff] text-[10px] sm:text-[16px] leading-[14px] sm:leading-[22.4px] tracking-[.2px] ml-[49.72px] sm:ml-[130px]">{props.spanBottom}</span>
        </div>
        </>
    )
}

export {Label, Input, Frame};