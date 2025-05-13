import VisaCard from "../../for-page-premium/for-page-pembayaran/visa"
import Visa from "../../../content/visa.png"
import Jcb from "../../../content/jcb.png"
import Mastercard from "../../../content/mastercard.png"
import American from "../../../content/american.png"
import Bca from "../../../content/bca.png"
import Cover from "../../for-page-premium/for-page-pembayaran/cover"
import Card from "../../for-page-premium/card"
import Data from "../../for-page-premium/data"
import Voucher from "../../for-page-premium/for-page-pembayaran/voucher"
import Invoice from "../../for-page-premium/for-page-pembayaran/invoice"

const Pembayaran = () => {


    return (
        <>
        <Cover>
            <Card title={Data[0].title} 
                    forPrice={Data[0].price} 
                    b1={Data[0].benefit1} 
                    b2={Data[0].benefit2} 
                    b3={Data[0].benefit3} />
            <div className="">
            <p className="font-[Lato] text-white text-lg mt-5 ">Metode Pembayaran</p>
                <div className=" flex flex-col lg:flex-row space-y-[16px] mt-2 lg:space-x-[16px] lg:space-y-0 ">
                     <VisaCard img1={Visa} img2={Mastercard} img3={Jcb} text="Kartu Debit/Kredit" img4={American} /> 
                     <VisaCard img2={Bca} text="BCA Virtual Account" />
                </div>
                <Voucher /> 
                <Invoice />
            </div>
           
        </Cover>
        </>
    )
}

export default Pembayaran