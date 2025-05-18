import Poster from "../data/genre-poster"
import Lanscape from "../data/genre-lanscape"
import Gallery from "../gallery1"
import Movie from "../movie-for-gallery1"
import CoverSection from "../cover-section"
import Hero from "../hero"
import { CoverGallery1, Gallery1, Movie1 } from "../gallery2"
const Series = () => {

    const filterLans = Lanscape.slice(0, 10);
    const filterPost = Poster.slice(0, 10);

    return(
        <>
        <Hero img={Lanscape[15].img} head={Lanscape[15].title} desc={Lanscape[15].desc} age={Lanscape[15].age} />
        <CoverSection>
            <Gallery head="Melanjutkan Tonton Series">
                    {filterLans.map((item, index) => (
                        <Movie key={index}
                               img={item.img}
                               title={item.title}
                               rate={item.rate}
                               age={item.age}
                               genre={item.genre} />
                    ))}
            </Gallery>
            <CoverGallery1>
                <Gallery1 head="Series Persembahan Chill">
                    {filterPost.map((item, index) => (
                        <Movie1 key={index} img={item.img} />
                    ))}
                </Gallery1>
                <Gallery1 head="Top Rating Series Hari ini">
                    <Movie1 img={Poster[12].img} title={Poster[6].top} />
                   <Movie1 img={Poster[13].img} title={Poster[7].top} />
                   <Movie1 img={Poster[14].img} title={Poster[8].top} />
                   <Movie1 img={Poster[15].img} title={Poster[9].top} />
                   <Movie1 img={Poster[16].img} title={Poster[10].top} />
                   <Movie1 img={Poster[17].img} title={Poster[11].top} />
                   <Movie1 img={Poster[18].img} title={Poster[12].top} />
                   <Movie1 img={Poster[19].img} title={Poster[13].top} />
                   <Movie1 img={Poster[20].img} title={Poster[14].top} />
                   <Movie1 img={Poster[21].img} title={Poster[15].top} />
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