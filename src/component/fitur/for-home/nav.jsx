import { useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router"

import MovieChill from "../content/Logo.png"
import Movie1 from "../content/movie-open.png"
import Arrow from "../content/drop-down.png"
 const Nav = ({setGenre}) => {

    const navigate = useNavigate();
    
    const handle = (e) => {
        setGenre(e.target.getAttribute("data-value"));
        navigate("./film");
        setOpen(false);
        // console.log(e.target.getAttribute("data-value"));
    }

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const handleDropDown = () => {
        setOpen(!open);
    }

    const handleGenre = () => {
        setOpen1(!open1);
    }

    return(
        <>
        <nav className="flex items-center box-border grow shrink gap-x-[12px] sm:gap-x-[15.5%] basis-auto justify-start ">
            <div className=" inline-flex items-center gap-3 sm:gap-[80px]">
            <Link to={"./"}>
            <img className="hidden sm:block object-contain" src={MovieChill} alt="" />
            <img className="block sm:hidden object-contain" src={Movie1} alt="" />
            </Link>
            <ul className="inline-flex gap-3 sm:gap-[80px] font-[Lato] text-[#fff] font-[500px] text-[10px] leading-[14px] tracking-[.2px] sm:text-[18px] sm:leading-[25.2px]">
                <Link className="hover:text-[#192DB7] hover:transition duration-300 " to={"./series"}>series</Link>
                <p className="hover:text-[#192DB7] hover:transition duration-300" onClick={handleDropDown}>Film</p>
                <div className={` lg:absolute top-20 left-12 lg:top-40 lg:left-24 lg:rounded-[8px] lg:bg-[#22282A] ${ !open ? "hidden" : "block"}`}>
                  <p className="font-[Lato] flex flex-row relative lg:absolute top-0 lg:top-[-30px] lg:bg-[#22282A] lg:rounded-[8px] lg:py-[10px] lg:px-[22px] lg:hover:rounded-[8px] lg:hover:bg-[#3D4142]" onClick={handleGenre}>Genre
                     <span><img className={`w-4 sm:w-7 ${ !open1 ? "rotate-0" : "rotate-180"}`} src={Arrow} alt="" /> </span>
                 </p>
                 <div className={`flex-col lg:flex-row lg:rounded-[8px] absolute bottom-[-251px] lg:bottom-[-300px] left-[135px] lg:left-0 bg-[#22282A] ${ !open1 ? "hidden" : "flex"}`}>
                <ul className=" sm:whitespace-nowrap  lg:pr-0.5 ">
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Aksi">Aksi</li>
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Anak">Anak-anak</li>
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Anime">Anime</li>
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Britania" >Britania</li>
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Drama" >Drama</li>
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Fantasi" >Fantasi Ilmiah & Fantasi</li>
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Kejahatan" >Kejahatan</li>
                </ul>
                <ul className="sm:whitespace-nowrap lg:w-[198px]">
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Kdrama">Kdrama</li>
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Komedi">Komedi</li>
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Pertualangan">Pertualangan</li>
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Perang">Perang</li>
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Romantis">Romantis</li>
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Sains">Sains & Alam</li>
                    <li className="py-0.5 pl-1 sm:py-2 sm:pl-3 hover:bg-[#3D4142]" onClick={handle} data-value="Thriller" >Thriller</li>
                </ul>
                </div>
                 </div>	
                <Link className="hover:text-[#192DB7] hover:transition duration-300" to={"./daftarsaya"}>daftar saya</Link>
            </ul>
            </div>
        </nav >

       
        </>
        
)
}

export default Nav