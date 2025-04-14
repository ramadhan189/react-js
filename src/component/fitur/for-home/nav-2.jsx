import Profile from "../content/profile.png"
import DropDown from "../content/drop-down.png"
import Star from "../content/star.png"
import Login from "../content/Login-variant.png"
import Acount from "../content/account.png"


 const Nav2 = () => {


    return(
        <div className="flex">
            <div className="inline-flex mr-1">
            <img className="w-5 sm:w-10 h-auto" src={Profile} alt="" />
            </div>
            <div className="flex group relative">
                <a className="w-[14px] sm:w-[28px] h-auto hover:rotate-[180deg] hover:transition duration-200 " href="#"><img src={DropDown} alt="" /></a>
                <div className="hidden flex-col absolute w-[120px] sm:w-[280px] h-auto text-[#ffff] font-[500px] font-Lato top-[20px] sm:top-[35px] right-[6px] sm:right-[12px]  bg-[#181A1C] group-hover:flex ">
                    <a className="flex flex-row justify-start text-[10px] sm:text-[25px]  box-border py-[8px] px-[12px] sm:py-[16px] sm:px-[24px] hover:text-[#3254FF] hover:transition duration-400 " href=""><img className="w-[16px] sm:w-[28px] h-auto mr-[5px] sm:mr-[10px] object-contain" src={Acount} alt="" />Profil Saya</a>
                    <a className="flex flex-row justify-start text-[10px] sm:text-[25px]  box-border py-[8px] px-[12px] sm:py-[16px] sm:px-[24px] hover:text-[#3254FF] hover:transition duration-400 " href=""><img className="w-[16px] sm:w-[28px] h-auto mr-[5px] sm:mr-[10px] object-contain" src={Star} alt="" />Ubah Premium</a>
                    <a className="flex flex-row justify-start text-[10px] sm:text-[25px]  box-border py-[8px] px-[12px] sm:py-[16px] sm:px-[24px] hover:text-[#3254FF] hover:transition duration-400 " href=""><img className="w-[16px] sm:w-[28px] h-auto mr-[5px] sm:mr-[10px] object-contain " src={Login} alt="" />Keluar</a>
                </div>
            </div>
        </div>
    )
}

export default Nav2