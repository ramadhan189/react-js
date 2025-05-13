import Poster from "../data/genre-poster"
import Lanscape from "../data/genre-lanscape"
import Gallery from "../gallery1"
import Movie from "../movie-for-gallery1"
import CoverSection from "../cover-section"
import Hero from "../hero"
import { CoverGallery1, Gallery1, Movie1, Trofy } from "../gallery2"
const Series = () => {
    return(
        <>
        <Hero img={Lanscape[15].img} head={Lanscape[15].title} desc={Lanscape[15].desc} age={Lanscape[15].age} />
        <CoverSection>
            <Gallery head="Melanjutkan Tonton Series">
                <Movie img={Lanscape[15].img} title={Lanscape[15].title} rate={Lanscape[15].rate} />
                <Movie img={Lanscape[17].img} title={Lanscape[17].title} rate={Lanscape[17].rate} />
                <Movie img={Lanscape[18].img} title={Lanscape[18].title} rate={Lanscape[18].rate} />
                <Movie img={Lanscape[19].img} title={Lanscape[19].title} rate={Lanscape[19].rate} />
                <Movie img={Lanscape[20].img} title={Lanscape[20].title} rate={Lanscape[20].rate} />
                <Movie img={Lanscape[21].img} title={Lanscape[21].title} rate={Lanscape[21].rate} />
                <Movie img={Lanscape[22].img} title={Lanscape[22].title} rate={Lanscape[22].rate} />
                <Movie img={Lanscape[23].img} title={Lanscape[23].title} rate={Lanscape[23].rate} />
            </Gallery>
            <CoverGallery1>
                <Gallery1 head="Series Persembahan Chill">
                    <Movie1 img={Poster[0].img} />
                    <Movie1 img={Poster[1].img} />
                    <Movie1 img={Poster[2].img} />
                    <Movie1 img={Poster[3].img} />
                    <Movie1 img={Poster[4].img} />
                    <Movie1 img={Poster[5].img} />
                    <Movie1 img={Poster[6].img} />
                </Gallery1>
                <Gallery1 head="Top Rating Series Hari ini">
                    <Movie1 img={Poster[12].img}/>
                    <Trofy className="left-[70px] sm:left-[180px]" title="top 1"/>
                    <Movie1 img={Poster[8].img}/>
                    <Trofy className="left-[180px] sm:left-[460px]" title="top 2"/>
                    <Movie1 img={Poster[9].img}/>
                    <Trofy className="left-[300px] sm:left-[740px]" title="top 3"/>
                    <Movie1 img={Poster[10].img}/>
                    <Trofy className="left-[415px] sm:left-[1010px]" title="top 4"/>
                    <Movie1 img={Poster[11].img}/>
                    <Trofy className="left-[530px] sm:left-[1270px]" title="top 5"/>
                    <Movie1 img={Poster[7].img}/>
                    <Trofy className="left-[645px] sm:left-[1540px]" title="top 6"/>
                    <Movie1 img={Poster[13].img}/>
                    <Trofy className="left-[747px] sm:left-[1810px]" title="top 7"/>
                    <Movie1 img={Poster[14].img}/>
                    <Trofy className="left-[860px] sm:left-[2080px]" title="top 8"/>
                    <Movie1 img={Poster[15].img}/>
                    <Trofy className="left-[975px] sm:left-[2350px] " title="top 9"/>
                    <Movie1 img={Poster[16].img}/>
                    <Trofy className="left-[1080px] sm:left-[2620px]" title="top 10"/>
                </Gallery1>
                <Gallery1 head="Series Trending">
                    <Movie1 img={Poster[14].img}/>
                    <Movie1 img={Poster[15].img}/>
                    <Movie1 img={Poster[16].img}/>
                    <Movie1 img={Poster[17].img}/>
                    <Movie1 img={Poster[18].img}/>
                    <Movie1 img={Poster[19].img}/>
                    <Movie1 img={Poster[20].img}/>
                </Gallery1>
                <Gallery1 head="Rilis Terbaru">
                    <Movie1 img={Poster[16].img}/>
                    <Movie1 img={Poster[17].img}/>
                    <Movie1 img={Poster[18].img}/>
                    <Movie1 img={Poster[19].img}/>
                    <Movie1 img={Poster[20].img}/>
                    <Movie1 img={Poster[21].img}/>
                    <Movie1 img={Poster[22].img}/>
                </Gallery1>
            </CoverGallery1>
        </CoverSection>
        </>
    )
}

export default Series