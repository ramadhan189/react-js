import { useOutletContext } from "react-router"
import GenreLanscape from "../data/genre-lanscape"
import GenrePoster from "../data/genre-poster"
import Gallery from "../gallery1"
import Movie from "../movie-for-gallery1"
import CoverSection from "../cover-section"
import Hero from "../hero"
import { CoverGallery1, Gallery1, Movie1, Trofy } from "../gallery2"
const Film = () => {

    const { genre, setGenre} = useOutletContext();

    
    const filterGenre = GenreLanscape.filter((item) => item.genre.includes(genre))
    const filterPoster = GenrePoster.filter((item) => item.genre.includes(genre))

    console.log(filterGenre);

    return (
        <>
            <Hero img={GenreLanscape[1].img} head={GenreLanscape[1].title} desc={GenreLanscape[1].desc} age={GenreLanscape[1].age} />
            <CoverSection>
            {filterGenre.length === 0 ? (
                <h1 className="text-white text-5xl text-center">Film sedang kosong</h1>
            ) : (
                <Gallery head="List Film" >
                    {filterGenre.map((item, index) => (
                        <Movie
                        key={index}
                        img={item.img}
                        title={item.title}
                        rate={item.rate}
                        />
                    ))}
                </Gallery>
            )}
            {filterGenre.length === 0 ? (
                	<>
                    </>
            ) : (
    	    <CoverGallery1>
                <Gallery1 head="List Film" >
                    {filterPoster.length === 0 ? (
                       <></>
                        ) : (
                        filterPoster.map((item, index) => (
                            <Movie1
                            key={index}
                            img={item.img}
                            />
                        ))
                    )}
                </Gallery1>
                <Gallery1 head="Film Trending">
                    <Movie1 img={GenrePoster[6].img}/>
                    <Trofy className="left-[70px] sm:left-[180px]" title="top 1"/>
                    <Movie1 img={GenrePoster[7].img}/>
                    <Trofy className="left-[180px] sm:left-[460px]" title="top 2"/>
                    <Movie1 img={GenrePoster[8].img}/> 
                    <Trofy className="left-[300px] sm:left-[740px]" title="top 3"/>
                    <Movie1 img={GenrePoster[9].img}/>
                    <Trofy className="left-[415px] sm:left-[1010px]" title="top 4"/>
                    <Movie1 img={GenrePoster[10].img}/>
                    <Trofy className="left-[530px] sm:left-[1270px]" title="top 5"/>
                    <Movie1 img={GenrePoster[11].img}/>
                    <Trofy className="left-[645px] sm:left-[1540px]" title="top 6"/>
                    <Movie1 img={GenrePoster[12].img}/>
                    <Trofy className="left-[747px] sm:left-[1810px]" title="top 7"/>
                    <Movie1 img={GenrePoster[13].img}/>
                    <Trofy className="left-[860px] sm:left-[2080px]" title="top 8"/>
                    <Movie1 img={GenrePoster[14].img}/>
                    <Trofy className="left-[975px] sm:left-[2350px] " title="top 9"/>
                    <Movie1 img={GenrePoster[15].img}/>
                    <Trofy className="left-[1090px] sm:left-[2620px] " title="top 10"/>
                </Gallery1>
                <Gallery1 head="Rilis Terbaru">
                    <Movie1 img={GenrePoster[16].img}/>
                    <Movie1 img={GenrePoster[17].img}/>
                    <Movie1 img={GenrePoster[18].img}/>
                    <Movie1 img={GenrePoster[19].img}/>
                    <Movie1 img={GenrePoster[20].img}/>
                    <Movie1 img={GenrePoster[21].img}/>
                    <Movie1 img={GenrePoster[22].img}/>
                </Gallery1>
            </CoverGallery1>
            )}

            
            </CoverSection>
        </>
    )
}

export default Film