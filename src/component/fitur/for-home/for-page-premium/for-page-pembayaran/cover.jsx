const Cover = (props) => {

    return (
        <>
        <div className="mt-[54px] sm:mt-[94px] min-w-[320px] max-w-[1440px] px-5 lg:px-20 ">
            <h1 className="font-[Lato] text-3xl mt-10 font-bold text-white ">Ringkasan Pembayaran</h1>
            <div className="flex flex-col lg:flex-row pt-10 lg:space-x-[40px] items-center justify-center ">
                {props.children}
            </div>
        </div>
        </>
    )
} 

export default Cover