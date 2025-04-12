// const hasilinputran = (props) => {
//     let status ;
//     if (props.umur < 13){
//         status = 'anak-anak'
//     } else if (props.umur < 19 && props.umur >= 13){
//         status ='remaja' 
//     } else if (props.umur < 59 && props.umur >= 19){
//         status ='dewasa'
//     } else if (props.umur >= 60) {
//         status = 'lansia'
//     }
// return (
// <>
//  <p>status: {status}</p> 
// </>
// )
// }

const hasilSiswa = () => {
    
    const dataSiswa = [
        { id: 1, nama: "Andi", umur: 17 },
        { id: 2, nama: "Budi", umur: 18 },
        { id: 3, nama: "Citra", umur: 16 }
      ];
    
    return <>
        <h1>data siswa</h1>
        {dataSiswa.map((data) => 
            <div key={data.id}>
            <p>nama: {data.nama}</p>
             <p>umur: {data.umur} </p>
            </div>
        )}
    </>  

}

export default hasilSiswa