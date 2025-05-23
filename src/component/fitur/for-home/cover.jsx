import { useEffect } from "react"
import { Outlet } from "react-router";
const Cover = (props) => {
    useEffect(() => {
        document.body.classList.add("bg-[#181A1C]");
        document.body.classList.add("h-[3000px]")
        return () => {
            document.body.classList.remove("bg-[#181A1C]");
        };
    }, []);

    return(
        <>
        <main className="bg-[#181A1C] box-border flex flex-col">
        {props.children}
        </main>
        
        </>
    )
}

export default Cover