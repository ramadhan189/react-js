import { useOutletContext } from "react-router"
import GenreLanscape from "../data/genre-lanscape"
import GenrePoster from "../data/genre-poster"
import Gallery from "../gallery1"
import Movie from "../movie-for-gallery1"
import CoverSection from "../cover-section"
import Hero from "../hero"
import { CoverGallery1, Gallery1, Movie1 } from "../gallery2"
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
                        genre={item.genre}
                        age={item.age}
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
                   <Movie1 img={GenrePoster[12].img} title={GenrePoster[6].top} />
                   <Movie1 img={GenrePoster[13].img} title={GenrePoster[7].top} />
                   <Movie1 img={GenrePoster[14].img} title={GenrePoster[8].top} />
                   <Movie1 img={GenrePoster[15].img} title={GenrePoster[9].top} />
                   <Movie1 img={GenrePoster[16].img} title={GenrePoster[10].top} />
                   <Movie1 img={GenrePoster[17].img} title={GenrePoster[11].top} />
                   <Movie1 img={GenrePoster[18].img} title={GenrePoster[12].top} />
                   <Movie1 img={GenrePoster[19].img} title={GenrePoster[13].top} />
                   <Movie1 img={GenrePoster[20].img} title={GenrePoster[14].top} />
                   <Movie1 img={GenrePoster[21].img} title={GenrePoster[15].top} />
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