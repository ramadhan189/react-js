import { useState } from "react";
export const useForm = (data) => {

    const [dataUser, setDataUser] = useState(data);

    const tambahUser = (newUser) => {
        setDataUser([...dataUser, newUser]);
    }

    return {
        tambahUser
    }
}