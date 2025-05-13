
const Header = (props)=> {


    return(
        <>
        <header className="w-[100%] flex fixed z-[100] items-center font-[Lato] bg-[#181A1C] box-border text-[10px] sm:text-lg h-[54px] sm:h-[94px] px-5 py-1.5 sm:px-20 sm:py-6">
        {props.children}
        </header>

        </>
    )
}

export default Header