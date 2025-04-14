import MovieChill from "../content/Logo.png"
import Movie from "../content/movie-open.png"
const Nav = () => {

    return(
        <nav className="flex items-center box-border grow shrink gap-x-[12px] sm:gap-x-[15.5%] basis-auto justify-start ">
            <div className=" inline-flex items-center gap-3 sm:gap-[80px]">
            <a href="./home">
            <img className="hidden sm:block object-contain" src={MovieChill} alt="" />
            <img className="block sm:hidden object-contain" src={Movie} alt="" />
            </a>
            <ul className="inline-flex gap-3 sm:gap-[80px] text-Lato text-[#c1c2c4] font-[500px] text-[10px] leading-[14px] tracking-[.2px] sm:text-[18px] sm:leading-[25.2px]">
                <a className="hover:text-[#192DB7] hover:transition duration-300 " href="#">Series</a>
                <a className="hover:text-[#192DB7] hover:transition duration-300 " href="#">Film</a>
                <a className="hover:text-[#192DB7] hover:transition duration-300 " href="#">Daftar saya</a>
            </ul>
            </div>
        </nav>
    )
}

export default Nav