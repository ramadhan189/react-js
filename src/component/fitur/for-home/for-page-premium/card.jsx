import {useNavigate} from "react-router"
const Card = (props) => {
    
    const navigate = useNavigate();
    
    return (
        <>
        <div className="min-w-[236px] min-h-[400px] rounded-xl p-6 bg-gradient-to-r from-[#5370D4] to-[#192DB7] flex flex-col items-start " >
            <p className="inline-block flex-none bg-[#3D4142] py-2.5 px-5 rounded-3xl  text-white font-[Lato] font-semibold text-lg">{props.title}</p>
            <p className="text-white font-[Lato] text-sm pt-6 ">{props.forPrice}</p>
            <div className="text-white font[Lato] pt-6 text-sm flex flex-col items-start space-y-[8px]">
            <span>&#10003; {props.b1}</span>
            <span>&#10003; {props.b2}</span>
            <span>&#10003; {props.b3}</span>
            </div>
            <footer className="flex flex-col border-t-2 mt-9 border-solid border-[#E7E3FC3B] ">
                <button className="font-[Lato] text-[#0F1E93] text-[16px] font-bold px-[54px] mt-9 py-2.5 bg-white rounded-[48px] hover:bg-[#0F1E93] hover:text-white hover:transition duration-500 cursor-pointer " data-id={props.id} onClick={() => navigate("/pembayaran")}>Langganan</button>
                <span className="font-[Lato] text-[12px] text-white text-center mt-1">Syarat dan Ketentuan Berlaku</span>
            </footer>
        </div>
        </>
    )

}

export default Card