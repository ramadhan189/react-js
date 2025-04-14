import Beranda from "../content/background-beranda.png"
import information from "../content/information.png"
import Mute from "../content/sound-mute.png"
const Hero = (props) => {
    

    return (

        <section  className="bg-center bg-cover bg-no-repeat w-auto h-[225px] sm:h-[587px] pt-[67px] px-[20px] sm:pt-[274px] sm:px-[80px] mt-[54px] sm:mt-[94px] object-contain" style={{backgroundImage: `linear-gradient(to top,rgba(24, 26, 28, 1), transparent), url(${Beranda})`}}>
            <div className="flex flex-col font-Lato text-[#ffff] ">
                <div>
                <h1 className="font-bold text-2xl sm:text-5xl">{props.head}</h1>
                <p className="text-[12px] sm:text-[18px] font-medium mt-3 sm:mt-4">{props.desc}</p>
               </div>
                <div className="flex flex-row mt-3 sm:mt-10">
                    <div className="items-center flex text-Lato">
                        <button className="bg-[#0F1E93] hover:bg-[#09147A] hover:transition duration-300 box-border text-Lato font-bold text-[12px] sm:text-[16px] leading-[16.8px] sm:leading-[16px] rounded-[48px] px-3 py-1 sm:py-2.5 sm:px-[26px] items-start mr-2 sm:mr-2.5">
                        Mulai
                        </button>
                        <button className="hover:bg-[#E7E3FC0A] hover:transition duration-300 inline-flex box-border text-Lato font-bold text-[12px] sm:text-[16px] leading-[16.8px] sm:leading-[16px] items-center bg-[#22282A] rounded-[48px] py-[5px] px-[12px] sm:py-[9px] sm:px-[26px] ">
                            <img className="mr-[2px] sm:mr-[8px] w-[12px] sm:w-[20px] box-border" src={information} alt="info" />Selengkapnya
                        </button>
                        <span className="block hover:bg-[#E7E3FC0A] box-border bg-tranparent rounded-[24px] text-[#C1C2C4] border-solid outline-[1px] outline-[#C1C2C4] font-[700px] text-[12px] sm:text-[18px] p-[3.2px] sm:p-[5.2px] ml-[8px] sm:ml-[10px] ">{props.age}</span>
                      <div className="rounded-[24px] hover:bg-[#E7E3FC0A] border-solid outline-[1px] sm:outline-[#C1C2C4] w-6 sm:w-11 h-6 sm:h-11 absolute right-[18px] sm:right-[80px] ">
                      <img className="w-[12px] sm:w-[24px] h-3 sm:h-6 mt-1.5 ml-1.5 sm:mt-2.5 sm:ml-2.5 object-contain " src={Mute} alt="" />
                      </div>
                    </div>
                </div>
           </div>
        </section>
    )
}

export default Hero