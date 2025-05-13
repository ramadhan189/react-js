
const Judul = (props) => {

    return (
        <>
        <div className="flex flex-col min-w-[325px] max-w-[1280px] mx-auto bg-[#18181D] py-5 sm:py-20   ">
        <h1 className="font-[Lato] font-bold text-sm sm:text-3xl text-white  ">Daftar Saya</h1>
        {props.children}
        </div>
        </>
    )
}

const DaftarSayaList = (props) => {

    return (
        <>
            <div className="pt-4 flex flex-row flex-wrap justify-start items-center content-stretch space-x-2 space-y-3  ">
            {props.children}
            </div>
        </>
    )
}

const IsiDaftarSaya = (props) => {

    return(
        <>
        <div className="w-[95px] h-[145px] sm:h-[300px] sm:w-[200px] " >
        <img src={props.img} alt="" />
        </div>
        </>
    )
}

export { Judul, IsiDaftarSaya, DaftarSayaList }