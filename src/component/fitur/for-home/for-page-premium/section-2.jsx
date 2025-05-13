
const Section2 = (props) => {

    return (
        <>
        <section className="py-10 xl:px-[294px] mt-10 xl:mt-20 bg-[#22282A] flex flex-col justify-center items-center ">
            <h1 className="text-xl xl:text-3xl font-[Lato] font-bold text-white text-center ">Pilih Paketmu</h1>
            <span className="text-xl xl:text-lg font-[Lato] font-medium text-white block text-center">Temukan paket yang sesuai dengan kebutuhanmu!</span>
            <div className="flex flex-col xl:flex-row justify-center w-[320px] xl:w-[853px] mt-10 space-y-[32px] xl:space-x-[72px] xl:space-y-0 ">
                {props.children}
            </div>
        </section>
        </>
    )
}

export default Section2