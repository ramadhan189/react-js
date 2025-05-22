
import Logo from "../content/Logo.png"
function Cover (props) {
    return (
        <div className="m-auto w-[306px] sm:w-[529px] h-auto bg-[#181A1CD6] rounded-xl sm:rounded-2xl flex flex-col items-center">
            <img className="w-[94px] sm:w-[163px] h-6 sm:h-11 object-contain mt-[22.60px] sm:mt-[37px]" src={Logo} alt="img"/>
            <h3 className="font-[Lato] text-[#fff] text-[18px] sm:text-[32px] font-[700px] leading-[25.2px] sm:leading-[32px] mt-[20px] sm:mt-[37px]">{props.nama}</h3>
            <p className="text-[#fff] font-Lato mt-[4.62px] sm:mt-[8px] text-[10px] sm:text-[16px] leading-[14px] sm:leading-[22.4px] font-[400px] ">{props.title}</p>
            <form className="mt-[20px] sm:mt-[37px] w-[306px] sm:w-[529px]" onSubmit={props.onSubmit} action="" >
                <fieldset className="relative flex flex-col px-[24px] pb-[22.6px] sm:pl-[40px] sm:pr-[40px] sm:pb-[40px] ">
                   {props.children}
                </fieldset>
            </form>

        </div>
    )
}

export default Cover