const Head = (props) => {
    
    return (
        <>
            <main className="flex flex-col lg:flex-row-reverse justify-between items-center px-20 mt-14 sm:mt-[107px] ">
               {props.children}
            </main>
        </>
    )
}

export default Head