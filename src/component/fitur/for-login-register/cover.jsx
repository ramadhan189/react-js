
import Logo from "../content/Logo.png"
function Cover (props) {
    return (
        <div className="m-auto w-[306px] xl:w-[529px] h-auto bg-[#181A1CD6] rounded-xl xl:rounded-2xl flex flex-col items-center">
            <img className="w-[94px] xl:w-[163px] h-6 xl:h-11 object-contain mt-[22.60px] xl:mt-[37px]" src={Logo} alt="img"/>
            <h3 className="text-Lato text-[#fff] text-[18px] xl:text-[32px] font-[700px] leading-[25.2px] xl:leading-[32px] mt-[20px] xl:mt-[37px]">{props.nama}</h3>
            <p className="text-[#fff] font-Lato mt-[4.62px] xl:mt-[8px] text-[10px] xl:text-[16px] leading-[14px] xl:leading-[22.4px] font-[400px] ">{props.title}</p>
            <form className="mt-[20px] xl:mt-[37px] w-[306px] xl:w-[529px]" action="" >
                <fieldset className="relative flex flex-col px-[24px] pb-[22.6px] xl:pl-[40px] xl:pr-[40px] xl:pb-[40px] ">
                   {props.children}
                </fieldset>
            </form>

        </div>
    )
}

export default Cover