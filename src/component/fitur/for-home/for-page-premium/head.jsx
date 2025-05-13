
const Head = (props) => {
    
    return (
        <>
            <main className="flex flex-col justify-center py-[54px] sm:py-[94px]">
               {props.children}
            </main>
        </>
    )
}

export default Head