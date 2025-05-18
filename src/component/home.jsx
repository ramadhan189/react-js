import Hero from "./fitur/for-home/hero"
import Beranda from "./fitur/content/background-beranda.png"
import CoverSection from "./fitur/for-home/cover-section"
import Gallery from "./fitur/for-home/gallery1"
import Movie from "./fitur/for-home/movie-for-gallery1"
import {CoverGallery1, Gallery1, Movie1} from "./fitur/for-home/gallery2"
 import Poster from "./fitur/for-home/data/poster"
 import Lanscape from "./fitur/for-home/data/genre-lanscape"
function Home (){  

    return(
        <>
            <Hero img={Beranda} head="Duty After School" desc="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
             Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah.
             Mereka pun segera menjadi pejuang garis depan dalam perang." age="16+" />
            <CoverSection>
                <Gallery head="Melanjutkan Tontonan Film">
                   {Lanscape.map((item, index) => (
                       <Movie key={index} img={item.img} title={item.title} rate={item.rate} age={item.age} genre={item.genre} />
                   ))} 
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
                    <Movie1 img={Poster.Gambar6} title="top 1" />
                    <Movie1 img={Poster.Gambar7} title="top 2" />
                    <Movie1 img={Poster.Gambar8} title="top 3" />
                    <Movie1 img={Poster.Gambar9} title="top 4" />
                    <Movie1 img={Poster.Gambar10} title="top 5" />
                    <Movie1 img={Poster.Gambar11} title="top 6" />
                    <Movie1 img={Poster.Gambar12} title="top 7" />
                    <Movie1 img={Poster.Gambar13} title="top 8" />
                    <Movie1 img={Poster.Gambar14} title="top 9" />
                    <Movie1 img={Poster.Gambar15} title="top 10" />
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