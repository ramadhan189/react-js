const Invoice = () => {
    
    return (
        <>
            <h1 className="text-white font-[Lato] text-lg mt-4 ">Ringkasan Transaksi</h1>
            <div className="flex flex-col min-w-[320px] max-w-[480px] font-[Lato] text-[16px] " >
                <div className="flex justify-between ">
                    <p className="text-[#C1C2C4] ">Paket Premium Individual</p>
                    <p className="text-white">Rp49.000</p>
                </div>
                <div className="flex justify-between ">
                    <p className="text-[#C1C2C4] ">Biaya Admin</p>
                    <p className="text-white">Rp3.000</p>
                </div>
                <div className="flex justify-between ">
                    <p className="text-[#C1C2C4] ">Total Pembayaran</p>
                    <p className="text-white">Rp52.000</p>
                </div>
                <button className="bg-[#09147A] text-white font-[Lato] w-[94px] mt-4 flex-none inline-block rounded-[48px] py-2.5 px-6 ">Bayar</button>
            </div>
        </>
    )
}

export default Invoice