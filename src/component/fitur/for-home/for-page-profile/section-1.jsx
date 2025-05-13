import Warning from "../../content/Warning.png"
import { useNavigate } from "react-router"
const Section1 = () => {

    const navigate = useNavigate();

    const Handle = () => {
        navigate("/premium");
    }

    return (
        <>
            <div className="flex flex-col p-6 h-min bg-[#3D4142] rounded-[12px] min-w-[320px] max-w-[560px] ">
                <div className=" flex flex-row font-[Lato] ">
                    <img src={Warning} alt="" />
                    <div className="flex flex-col font-[Lato] ">
                    <p className="hidden lg:block text-white text-2xl ">Saat ini anda belum berlangganan</p>
                    <p className="block lg:hidden text-white text-lg ">Berlangganan</p>
                    <span className="text-white text-sm lg:text-lg ">Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</span>
                    </div>
                </div>
                <div className="flex justify-end">
                <button className="w-[189px] py-1.5  px-5 text-sm font-[Lato] rounded-3xl bg-[#2F3334] text-white text-center " onClick={Handle}>Mulai Berlangganan
                </button>
                </div>
            </div>
        </>
    )
}

export default Section1