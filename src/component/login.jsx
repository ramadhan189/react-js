import Cover from "./fitur/for-login-register/cover"
import { Label, Input, Frame } from "./fitur/for-login-register/input"
import {Div, Button, Google, P} from "./fitur/for-login-register/button"
import Background from "./fitur/content/panggung-bioskop.jfif"
import { useState } from "react"
import { useNavigate } from "react-router"


function Login() {

    const Bg = {
        backgroundImage: `url(${Background})`
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

       const storeUser = JSON.parse(localStorage.getItem("users")) || [];

       const foundUser = storeUser.find((user) => user.username === username && user.password === password);

       if(foundUser){
        navigate("/home");
       } else {
        alert("username atau password salah")
       }

    }
    return (
        <>
        <div className="w-[100vw] h-[100vh] bg-cover bg-center flex justify-center bg-no-repeat" style={Bg}> 
        <Cover nama="Masuk" title="Selamat datang kembali!" onSubmit={handleLogin}>
            <Label for="username" cont="Username"/>
            <Input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Masukkan username" />
            <Label className="mt-5 xl:mt-9" for="password" cont="Password"/>
            <Input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan password" />
            <Frame spanTop="Belum punya akun?" a="./register" aDesc="Daftar" spanBottom="Lupa kata sandi" />
            <Div>
                <Button desc="Masuk"/>
                <P p="Atau"/>
                <Google span="Masuk denga Google"/>
            </Div>
        </Cover>
        </div>
         
        </>
    )
}

export default Login