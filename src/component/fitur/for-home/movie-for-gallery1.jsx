
import Star from "../content/star.png";
import useOverlay from "./hooks/overlay";

 function Movie({ img, title, age, genre, rate }) {
  
const {cardRef, show, pos, handleMouseEnter, handleMouseLeave, cencelHide} = useOverlay();
  

  return (
    <>
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative min-w-max w-full h-full mr-4 transition-transform duration-300"
      >
        <img className="rounded w-[300px] h-[162px] block" src={img} alt={title} />
    
        <div className="absolute bottom-0 left-0 w-[300px] px-1 py-2 text-white flex justify-between"
          style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)" }}>
          <h1 className="text-[18px] font-semibold">{title}</h1>
        <span className="flex items-center gap-1">{rate} <img src={Star} alt="" /> </span>
        </div>
      </div>

      {show && (
       <div className="absolute z-50 bg-[#181A1C] text-white font-[Lato] w-[204px] sm:w-[408px] h-[215px] sm:h-[430px] rounded shadow-xl pointer-events-auto transition-opacity duration-300"
          style={{
            position: 'fixed',
            top: pos.y,
            left: pos.x,
          }}
          onMouseEnter={cencelHide}
          onMouseLeave={handleMouseLeave}
        >
          <img className="w-full h-[250px] object-cover rounded-t" src={img} alt="" />
          <div className="flex justify-between p-2">
            <div className="flex space-x-2">
              <button className="bg-gray-700 text-white px-3 py-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="bg-gray-700 px-3 py-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">       
                   <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </button>
            </div>
            <button className="bg-gray-700 px-3 py-1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
          <div className="px-3">
            <span className="block mb-2">{age}</span>
            <ul className="flex gap-2 justify-between list-disc text-sm px-2">
              <li>{genre[0]}</li>
              <li>{genre[1]}</li>
              <li>{genre[2]}</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Movie