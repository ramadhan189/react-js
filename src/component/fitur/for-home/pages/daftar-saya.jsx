 import Poster from "../data/poster"
 import { Judul, DaftarSayaList, IsiDaftarSaya } from "../gallery3"
 const DaftarSaya = () => {

    return (
        <>
        <div className=" mt-[54px] sm:mt-[94px]">
            <Judul>
            <DaftarSayaList>
                <IsiDaftarSaya img={Poster.Gambar1} />
                <IsiDaftarSaya img={Poster.Gambar2} />
                <IsiDaftarSaya img={Poster.Gambar3} />
                <IsiDaftarSaya img={Poster.Gambar4} />
                <IsiDaftarSaya img={Poster.Gambar5} />
                <IsiDaftarSaya img={Poster.Gambar6} />
                <IsiDaftarSaya img={Poster.Gambar7} />
                <IsiDaftarSaya img={Poster.Gambar8} />
                <IsiDaftarSaya img={Poster.Gambar9} />
                <IsiDaftarSaya img={Poster.Gambar10} />
                <IsiDaftarSaya img={Poster.Gambar11} />
                <IsiDaftarSaya img={Poster.Gambar12} />
            </DaftarSayaList>
            </Judul>       
        </div>        
        </>
    )
}

export default DaftarSaya