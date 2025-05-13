import Tools from "../../content/tools-edit.png"
import EditFoto from "../../content/foto-for-edit.png"
import UploadFile from "../../content/file-upload.png"
import {  useState } from "react"
const Section2 = () => {
    
    const [ubahImg, setUbahImg] = useState(null)
    const [img, setImg] = useState(EditFoto)

    const [formData, setFormData] = useState({
        name: "wiliam",
        email: "wiliam@.com",
        password: "wiliam123"
    });

    const [editStatus, setEditStatus] = useState({
        name: false,
        email: false,
        password: false,
      });

    const handleImg = (e) => {
        const file = e.target.files[0] ;
        if(file) {
            setUbahImg(file)
            setImg(URL.createObjectURL(file))
        }
    }

    const handleInputChange =(a, b) => {
        setFormData((prev) => ({
            ...prev,
            [a]: b,
        }));
    }

    const handleEdit = (e) => {
        setEditStatus((prev) => ({
            ...prev,
            [e]: !prev[e],
        }));
    }

    return (

        <>
        <section className=" flex flex-col space-y-[32px] ">
        <h1 className="text-white font-[Lato] mt-5 lg:mt-0 font-bold text-3xl">Profil Saya</h1>
            <div className="flex flex-row space-x-[24px] items-center ">
                <div className="w-[80px] lg:w-[140px] rounded-full border-solid border-2 border-gray-600 overflow-x-hidden aspect-square">
                <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
                <input type="file" className="hidden" id="file" onChange={handleImg} />
                <div className="flex flex-col space-y-1">
                <label className="text-[#3254FF] min-w-[94px] max-w-[120px] h-min rounded-[48px] border-solid border-2 border-[#3254FF] bg-transparent py-2.5 px-5 font-[Lato]" htmlFor="file">Ubah Foto
                </label> 
                <span className="flex flex-row text-[#C1C2C4] hover:text-white font-[Lato] "><img src={UploadFile} alt="" />
                Maksimal 2MB
                </span>   
                </div>
            </div>
            <footer className="flex flex-col space-y-[24px] min-w-[320px] lg:w-[642px]">

            {/* Input Nama */}
            <div className="flex flex-col border-2 border-solid border-[#E7E3FC3B] rounded-lg py-2 px-4 font-[Lato]">
            <label className={`text-lg ${editStatus.name ? "text-white" : "text-[#E7E3FC3B]"}`} htmlFor="name">Nama Pengguna</label>
            <div className="flex justify-between items-center">
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                disabled={!editStatus.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="text-white outline-none bg-transparent w-full"
                />
                <button onClick={() => handleEdit("name")}>
                <img src={Tools} alt="Edit" />
                </button>
            </div>
            </div>

            {/* Input Email */}
            <div className="flex flex-col border-2 border-solid border-[#E7E3FC3B] rounded-lg py-2 px-4 font-[Lato]">
            <label className={`text-lg ${editStatus.email ? "text-white" : "text-[#E7E3FC3B]"}`} htmlFor="email">Email</label>
            <div className="flex justify-between items-center">
                <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                disabled={!editStatus.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="text-white outline-none bg-transparent w-full"
                />
                <button onClick={() => handleEdit("email")}>
                <img src={Tools} alt="Edit" />
                </button>
            </div>
            </div>

            {/* Input Password */}
            <div className="flex flex-col border-2 border-solid border-[#E7E3FC3B] rounded-lg py-2 px-4 font-[Lato]">
            <label className={`text-lg ${editStatus.password ? "text-white" : "text-[#E7E3FC3B]"}`} htmlFor="password">Kata Sandi</label>
            <div className="flex justify-between items-center">
                <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                disabled={!editStatus.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="text-white outline-none bg-transparent w-full"
                />
                <button onClick={() => handleEdit("password")}>
                <img src={Tools} alt="Edit" />
                </button>
            </div>
            </div>

            {/* Tombol Simpan */}
            <button className="bg-blue-600 text-white rounded-lg py-2 px-4 font-bold hover:bg-blue-700 transition duration-200">
            Simpan
            </button>
            </footer>

        </section>
       
        </>
    )
}

export default Section2