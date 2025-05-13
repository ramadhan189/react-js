import Hero from "./fitur/for-home/hero"
import Beranda from "./fitur/content/background-beranda.png"
import CoverSection from "./fitur/for-home/cover-section"
import Gallery from "./fitur/for-home/gallery1"
import Movie from "./fitur/for-home/movie-for-gallery1"
import {CoverGallery1, Gallery1, Movie1, Trofy} from "./fitur/for-home/gallery2"
 import Poster from "./fitur/for-home/data/poster"
 import Lanscape from "./fitur/for-home/data/lanscape"
function Home (){  


    return(
        <>
            <Hero img={Beranda} head="Duty After School" desc="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
             Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah.
             Mereka pun segera menjadi pejuang garis depan dalam perang." age="16+" />
            <CoverSection>
                <Gallery head="Melanjutkan Tontonan Film">
                    <Movie img={Lanscape.Lanscape1} title="a man called otto" rate="8.9"/>
                    <Movie img={Lanscape.Lanscape2} title="multiverse of madness" rate="7.9"/>
                    <Movie img={Lanscape.Lanscape3} title="Dilan 1991" rate="8.0"/>
                    <Movie img={Lanscape.Lanscape4} title="my hero academia" rate="7.3"/>
                    <Movie img={Lanscape.Lanscape5} title="a cross the spider-verse" rate="9.0"/>
                    <Movie img={Lanscape.Lanscape6}  title="fast x" rate="8.0"/>
                </Gallery>       
            <CoverGallery1>
                <Gallery1 head="Top Rating Film dan Series Hari ini">
                    <Movie1 img={Poster.Gambar1}/>
                    <Movie1 img={Poster.Gambar2}/>
                    <Movie1 img={Poster.Gambar3}/>
                    <Movie1 img={Poster.Gambar4}/>
                    <Movie1 img={Poster.Gambar5}/>
                    <Movie1 img={Poster.Gambar6}/>
                    <Movie1 img={Poster.Gambar7}/>
                </Gallery1>
                <Gallery1 head="Film Trending">
                    <Movie1 img={Poster.Gambar6}/>
                    <Trofy className="left-[70px] sm:left-[180px]" title="top 1"/>
                    <Movie1 img={Poster.Gambar7}/>
                    <Trofy className="left-[180px] sm:left-[460px]" title="top 2"/>
                    <Movie1 img={Poster.Gambar8}/> 
                    <Trofy className="left-[300px] sm:left-[740px]" title="top 3"/>
                    <Movie1 img={Poster.Gambar9}/>
                    <Trofy className="left-[415px] sm:left-[1010px]" title="top 4"/>
                    <Movie1 img={Poster.Gambar10}/>
                    <Trofy className="left-[530px] sm:left-[1270px]" title="top 5"/>
                    <Movie1 img={Poster.Gambar11}/>
                    <Trofy className="left-[645px] sm:left-[1540px]" title="top 6"/>
                    <Movie1 img={Poster.Gambar12}/>
                    <Trofy className="left-[760px] sm:left-[1810px]" title="top 7"/>
                    <Movie1 img={Poster.Gambar13}/>
                    <Trofy className="left-[875px] sm:left-[2080px]" title="top 8"/>
                    <Movie1 img={Poster.Gambar14}/>
                    <Trofy className="left-[990px] sm:left-[2350px] " title="top 9"/>
                    <Movie1 img={Poster.Gambar15}/>
                    <Trofy className="left-[1105px] sm:left-[2620px] " title="top 10"/>
                </Gallery1>
                <Gallery1 head="Rilis Terbaru">
                    <Movie1 img={Poster.Gambar16}/>
                    <Movie1 img={Poster.Gambar17}/>
                    <Movie1 img={Poster.Gambar18}/>
                    <Movie1 img={Poster.Gambar19}/>
                    <Movie1 img={Poster.Gambar20}/>
                    <Movie1 img={Poster.Gambar21}/>
                    <Movie1 img={Poster.Gambar22}/>
                    <Movie1 img={Poster.Gambar23}/>
                    <Movie1 img={Poster.Gambar24}/>
                    <Movie1 img={Poster.Gambar25}/>
                </Gallery1>
                </CoverGallery1>
            </CoverSection>
        </>
    )

}

export default Home