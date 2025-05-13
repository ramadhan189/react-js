const Voucher = () => {
    
    return (

        <>
        <h1 className="text-white font-[Lato] mt-[16px] text-lg  ">Kode Voucher (jika ada)</h1>
        <form action="" className="flex flex-row font-[Lato] mt-2 space-x-[16px] ">
            <input type="text" placeholder="Masukan kode voucher" className="rounded-[6px] border-solid border-2 border-[#E0E0E0] w-full text-[#6C717A] text-[16px] py-1 px-2.5 " />
            <button type="submit" className="font-semibold text-sm rounded-[48px] bg-[#2F3334] text-white py-2 px-3 ">gunakan</button>
        </form>
        </>
    )
}

export default Voucher