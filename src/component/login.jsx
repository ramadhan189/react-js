import Cover from "./fitur/for-login-register/cover"
import { Label, Input, Frame } from "./fitur/for-login-register/input"
import {Div, Button, Google, P} from "./fitur/for-login-register/button"
import Background from "./fitur/content/panggung-bioskop.jfif"
function Login() {
    const Bg = {
        backgroundImage: `url(${Background})`
    }
    return (
        <>
        <div className="w-[100vw] h-[100vh] bg-cover bg-center flex justify-center bg-no-repeat" style={Bg}> 
        <Cover nama="Masuk" title="Selamat datang kembali!">
            <Label for="username" cont="Username"/>
            <Input type="text" name="username" id="username" placeholder="Masukkan username" />
            <Label className="mt-5 xl:mt-9" for="password" cont="Password"/>
            <Input type="password" name="password" id="password" placeholder="Masukkan password" />
            <Frame spanTop="Belum punya akun?" a="./register" aDesc="Daftar" spanBottom="Lupa kata sandi" />
            <Div>
                <Button type="submit" decs="Masuk" />
                <P p="Atau"/>
                <Google span="Masuk denga Google"/>
            </Div>
        </Cover>
        </div>
         
        </>
    )
}

export default Login

