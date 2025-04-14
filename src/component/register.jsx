import Cover from "./fitur/for-login-register/cover"
import { Label, Input, Frame } from "./fitur/for-login-register/input"
import {Div, Button, Google, P} from "./fitur/for-login-register/button"
import Background from "./fitur/content/background-daftar.jfif"
    
function Register () {
    const Bg = {
        backgroundImage: `url(${Background})`
    }
    return ( 
        <>
        <div className="bg-center bg-cover bg-no-repeat flex justify-center w-[100vw] h-[100vh] lg:h-auto " style={Bg}>
        <Cover nama="Daftar" title="Selamat datang!">
            <Label for="username" cont = "Username"/>
            <Input type="text" name="username" id="username" placeholder="Masukkan Username"/>
            <Label className="mt-5 xl:mt-9" for="password" cont="Password"/>
            <Input type="password" name="password" id="password" placeholder="Masukkan Password"/>
            <Label className="mt-5 xl:mt-9" for="kata-sandi-baru" cont="Konfirmasi Kata Sandi" />
            <Input type="password" name="kata-sandi-baru" id="kata-sandi-baru" placeholder="Masukkan Kata Sandi"/>
            <Frame spanTop="Sudah punya akun?" a="./" aDesc="Masuk"/>
            <Div>
            <Button type="submit" decs="Daftar" />
                <P p="Atau"/>
                <Google span="Masuk denga Google"/>
            </Div>
        </Cover>
        </div>
        </>
    )
}

export default Register