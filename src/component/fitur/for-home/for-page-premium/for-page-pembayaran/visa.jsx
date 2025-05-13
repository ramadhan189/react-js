

const VisaCard = (props) => {

    return (
        <>
        <div className="border-solid border-2 rounded-[6px] border-[#E0E0E0] inline-block w-[470px] p-2 ">
            <label className="flex flex-row  space-x-2"  >
            <input type="checkbox" className="sr-only peer" />
            <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-gray-700"></div>
                <img src={props.img1} alt="" />
                <img src={props.img2} alt="" />
                <img src={props.img3} alt="" />
                <img src={props.img4} alt="" />
                <span className="font-[Lato] text-white text-[16px] ">{props.text} </span>
            </label>
        </div>
        </>
    )
}

export default VisaCard