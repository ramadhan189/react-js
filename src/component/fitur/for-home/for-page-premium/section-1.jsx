import Download from "../../content/download.png"
import Ads from "../../content/advertisements-off.png"
import MovieRoll from "../../content/movie-roll.png"
import Video from "../../content/video-4k-box.png"
import Tablet from "../../content/tablet-cellphone.png"
import Subtitle from "../../content/message-reply-text.png"

const Section1 = (props) => {

    return (
        <>
        <section className="mt-9 xl:mt-16 flex flex-col justify-center mx-auto">
            <h1 className="font-[Lato] text-white text-center text-xl xl:text-3xl font-bold">{props.head}</h1>
            <div className="flex flex-row flex-wrap justify-around w-[320px] xl:w-[1280px] font-[Lato] text-white text-xl font-medium xl:text-xl xl:font-bold mt-6 xl:mt-[72px] mx-5 xl:mx-20 ">
            <div className="flex flex-col w-[160px] xl:w-[426px] h-[92px] xl:h-[120px] ">
                    <img className="w-7 xl:w-12 mx-auto" src={Download} alt="" />
                    <span className="block text-center whitespace-normal">Download Konten<br/>Pilihan</span>
            </div>
            <div className="flex flex-col w-[160px] xl:w-[426px] h-[92px] xl:h-[120px] ">
                    <img className="w-7 xl:w-12 mx-auto" src={Ads} alt="" />
                    <span className="block text-center whitespace-normal">Tidak Ada Iklan</span>
            </div>
            <div className="flex flex-col w-[160px] xl:w-[426px] h-[92px] xl:h-[120px] ">
                    <img className="w-7 xl:w-12 mx-auto" src={MovieRoll} alt="" />
                    <span className="block text-center whitespace-normal">Tonton Semua Konten</span>
            </div>
            <div className="flex flex-col w-[160px] xl:w-[426px] h-[92px] xl:h-[120px] ">
                    <img className="w-7 xl:w-12 mx-auto" src={Video} alt="" />
                    <span className="block text-center whitespace-normal">Kualitas Maksimal<br/>Sampai Dengan 4K</span>
            </div>
            <div className="flex flex-col w-[160px] xl:w-[426px] h-[92px] xl:h-[120px] ">
                    <img className="w-7 xl:w-12 mx-auto" src={Tablet} alt="" />
                    <span className="block text-center whitespace-normal">Tonton di Tv, Tablet,<br/>Mobile, Laptop</span>
            </div>
            <div className="flex flex-col w-[160px] xl:w-[426px] h-[92px] xl:h-[120px] ">
                    <img className="w-7 xl:w-12 mx-auto" src={Subtitle} alt="" />
                    <span className="block text-center whitespace-normal">Subtitle Untuk Konten<br/>Pilihan</span>
            </div>
            </div>
        </section>
        </>

    )
}

export default Section1