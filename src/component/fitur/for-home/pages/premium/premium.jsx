import Head from "../../for-page-premium/head"
import Section1 from "../../for-page-premium/section-1"
import Section2 from "../../for-page-premium/section-2"
import Card from "../../for-page-premium/card"
import Data from "../../for-page-premium/data"

const Premium = () => {

    return(
        <>
        <Head>
            <Section1 head="Kenapa Harus Berlangganan?"/>
            <Section2 >
            {Data.map((item, index) => (
                <Card key={index}
                      title={item.title}
                      forPrice={item.price}
                      b1={item.benefit1}
                      b2={item.benefit2}
                      b3={item.benefit3}
                      id={item.value}
                      />
            ))}
            </Section2>
        </Head>
        </>
    )
}

export default Premium