
import ArrowDown from "../content/drop-down.png";
import MovieChill from "../content/Logo.png"
const Footer = () => {

    return (
        <footer className="mt-[27px] lg:mt-[80px] w-[100%] lg:flex lg:items-center border-t-2 border-solid border-[#E7E3FC3B] ">
            <section className="flex flex-col sm:flex-row lg:justify-center lg:mt-[60px] lg:items-evenly w-full">
                <div className="mt-5  mr-5 lg:mr-[210px]">
                    <img className="w-[84px] sm:w-[163px]" src={MovieChill} alt="" />
                    <span className="lg-[16px] lg:mt-[24px] text-Lato text-[#C1C2C4] font-[400px] text-[12px] lg:text-[16px] leading-[17px]">@2023 Chill All Rights Reserved</span>
                </div>
                <div className=" text-Lato text-[#C1C2C4] flex flex-col lg:flex  lg:flex-row lg:justify-center lg:items-center sm:mt-[30px]">
                    <div className="group flex flex-row justify-between relative lg:mr-[150px]">
                        <h1 className="hover:text-[#192DB7] lg:hidden p-[4px]">Genre</h1>
                        <a className="absolute sm:right-[-300px] right-[0px]" href="">
                            <img className="lg:hidden rotate-[270deg]" src={ArrowDown} alt="" />
                        </a>
                        <div className="hidden lg:flex lg:flex-row">
                            <div className="lg:mr-[28px] lg:w-[77px]">
                            <p class=" hover:text-[#192DB7] mb-[13px] mt-[-37.5px] font-bold text-[#ffff]">Genre</p>
                                <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Aksi</p>   
                                <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Anak-anak</p>
                                <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Anime</p>
                                <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Britania</p>
                            </div>
                            <div className="lg:mr-[28px] lg:w-[170px]">
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Drama</p>
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Fantasi Ilmiah & Fantasi</p>
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Kejahatan</p>
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">KDrama</p>
                            </div>
                            <div className=" lg:mr-[28px] lg:w-[89px]">
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Komedi</p>
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Petualangan</p>
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Perang</p>
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Romantis</p>
                            </div>
                            <div className="g:mr-[28px] lg:w-[95px]">
                            <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">sains & Alam</p>
                            <p className="hover:text-[#192DB7] hover:duration-300">Thriller</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row relative">
                        <h1 className="hover:text-[#192DB7] lg:hidden">Bantuan</h1>
                        <a className="absolute lg:hidden right-[0] sm:right-[-300px]" href="">
                            <img className="rotate-[270deg]" src="" alt="" />
                        </a>
                        <div className="lg:flex font-Lato hidden flex-col">
                        <p class="hover:text-[#192DB7] mb-[13px] mt-[-37.5px] font-bold text-[#ffff]">Bantuan</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">FAQ</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Kontak Kami</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Privasi</p>
                        <p className="hover:text-[#192DB7] mb-[13px] hover:duration-300">Syarat & Ketentuan</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer