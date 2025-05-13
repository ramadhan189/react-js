import Cover from "./fitur/for-login-register/cover"
import { Label, Input, Frame } from "./fitur/for-login-register/input"
import {Div, Button, Google, P} from "./fitur/for-login-register/button"
import Background from "./fitur/content/background-daftar.jfif"
import { useState } from "react"
import {useNavigate} from "react-router"
function Register () {
    const Bg = {
        backgroundImage: `url(${Background})`
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [kataSandiBaru, setKataSandiBaru] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!username || !password || !kataSandiBaru){
            alert("Data belum lengkap");
            return;
        } else if (kataSandiBaru != password){
            alert("Kata sandi baru tidak sesuai");
            return;
        }
        
        const storeUser = JSON.parse(localStorage.getItem("users")) || [];

        const newUser = {username, password};

        storeUser.push(newUser);

        localStorage.setItem("users", JSON.stringify(storeUser));
        
        setUsername("")
        setPassword("")
        setKataSandiBaru("")

        navigate("/")

    }


    return ( 
        <>
        <div className="bg-center bg-cover bg-no-repeat flex justify-center w-[100vw] h-[100vh]" style={Bg}>
        <Cover nama="Daftar" title="Selamat datang!" onSubmit={handleSubmit}>
            <Label for="username" cont = "Username"/>
            <Input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} id="username" placeholder="Masukkan Username"/>
            <Label className="mt-5 xl:mt-9" for="password" cont="Password"/>
            <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Masukkan Password"/>
            <Label className="mt-5 xl:mt-9" for="kata-sandi-baru" cont="Konfirmasi Kata Sandi" />
            <Input type="password" name="kata-sandi-baru" value={kataSandiBaru} onChange={(e) => setKataSandiBaru(e.target.value)} id="kata-sandi-baru" placeholder="Masukkan Kata Sandi"/>
            <Frame spanTop="Sudah punya akun?" a="./" aDesc="Masuk"/>
            <Div>
            <Button desc="Daftar" />
            <P p="Atau"/>
            <Google span="Masuk denga Google"/>
            </Div>
        </Cover>
        </div>
        </>
    )
}

export default Register