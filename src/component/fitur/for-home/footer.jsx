
import ArrowDown from "../content/drop-down.png";
import MovieChill from "../content/Logo.png"
import { useState } from "react";
const Footer = () => {

    const [open1, setOpen1] = useState(false);
    const [open, setOpen] = useState(false);
    const handleDesktop1 = (e) => {
        e.preventDefault()
        setOpen1(!open1);
    }

    const handleDesktop = (e) => {
        e.preventDefault()
        setOpen(!open);
    }


    return (
        <>
        
        <footer className="mt-[27px] lg:mt-[80px] w-[100%] xl:flex xl:items-center border-t-2 border-solid border-[#E7E3FC3B] ">
            <section className="flex flex-col xl:flex-row xl:justify-center xl:mt-[60px] xl:items-evenly w-full">
                <div className="mt-5  mr-5 xl:mr-[180px]">
                    <img className="w-[84px] xl:w-[163px]" src={MovieChill} alt="" />
                    <span className="lg-[16px] xl:mt-[24px] font-[Lato] text-[#C1C2C4] font-[400px] text-[12px] xl:text-[16px] leading-[17px]">@2023 Chill All Rights Reserved</span>
                </div>
                <div className=" font-[Lato] text-[#C1C2C4] flex flex-col xl:flex  xl:flex-row xl:justify-center xl:items-center xl:mt-[30px]">
                    <div className="group flex flex-row justify-between relative xl:mr-[150px]">
                        <h1 className=" xl:hidden p-[4px]" onClick={handleDesktop1}>Genre</h1>
                        <a className="absolute xl:right-[-300px] right-[0px]" href="">
                            <img className={`xl:hidden ${ !open1 ? "rotate-270" : "rotate-0"}`} onClick={handleDesktop1} src={ArrowDown} alt="" />
                        </a>
                        <div className="hidden xl:flex xl:flex-row">
                            <div className="xl:mr-[28px] xl:w-[77px]">
                            <p className="  mb-[13px] mt-[-37.5px] font-bold text-[#ffff]">Genre</p>
                                <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Aksi</p>   
                                <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Anak-anak</p>
                                <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Anime</p>
                                <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Britania</p>
                            </div>
                            <div className="xl:mr-[28px] xl:w-[170px]">
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Drama</p>
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Fantasi Ilmiah & Fantasi</p>
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Kejahatan</p>
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">KDrama</p>
                            </div>
                            <div className=" xl:mr-[28px] xl:w-[89px]">
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Komedi</p>
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Petualangan</p>
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Perang</p>
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Romantis</p>
                            </div>
                            <div className="xl:mr-[28px] xl:w-[95px]">
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">sains & Alam</p>
                            <p className="hover:text-[#192DB7] hover:duration-300">Thriller</p>
                            </div>
                        </div>
                        <div className={`flex-col ${open1 ? "flex" : "hidden"}`}>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Aksi</p>   
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Anak-anak</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Anime</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Britania</p>                         <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Drama</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Fantasi Ilmiah & Fantasi</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Kejahatan</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">KDrama</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Komedi</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Petualangan</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Perang</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Romantis</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">sains & Alam</p>
                        <p className="hover:text-[#192DB7] hover:duration-300">Thriller</p>                    
                        </div>
                    </div>
                    <div className="flex flex-row relative">
                        <h1 className=" xl:hidden" onClick={handleDesktop}>Bantuan</h1>
                        <a className="absolute xl:hidden right-[0] xl:right-[-300px]" href="">
                            <img className={`xl:hidden ${ !open ? "rotate-270" : "rotate-0"}`} onClick={handleDesktop} src={ArrowDown} alt="" />
                        </a>
                        <div className="xl:flex font-Lato hidden flex-col">
                        <p className=" mb-[13px] mt-[-37.5px] font-bold text-[#ffff]">Bantuan</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">FAQ</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Kontak Kami</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Privasi</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Syarat & Ketentuan</p>
                        </div>
                        <div className={`flex-col ${open ? "flex" : "hidden"}`}>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">FAQ</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Kontak Kami</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Privasi</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Syarat & Ketentuan</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>        
        </>
    )
}

export default Footer