import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://6825f518397e48c913146208.mockapi.io/akunChill";

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // get
    const FetchUsers = async () => {
        try {
            const getResponse = await axios.get(API_URL);
            setUsers(getResponse.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const [form, setForm] = useState({username: "", password: ""});
    // post
    const AddUsers = async (e) => {
        e.preventDefault();
        try {
            const postUser = await axios.post(API_URL, form);
            setUsers([...users, postUser.data]);
            setForm({username: "", password: ""});
        } catch (error) {
            console.log("gagal menambahkan data", error);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        FetchUsers()
    }, []);

    if (loading) return <div className="text-5xl">Loading...</div>;

    return (
         <div>
            <h1 className="text-4xl font-semibold text-center">tambah user</h1>
            <form action="" onSubmit={AddUsers} className="bg-blue-500 p-5 flex flex-col">
                <input
                 type="text"
                 name="username" 
                 value={form.username} 
                 onChange={handleChange} 
                 placeholder="username" 
                 className="bg-amber-50 text-black" 
                 />
                <input 
                type="password" 
                name="password" 
                value={form.password} 
                onChange={handleChange} 
                placeholder="password" 
                className="bg-amber-50 text-black " 
                />
                <button type="submit">submit</button>
            </form>

            <h1 className="text-4xl font-semibold text-center">data user</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="rounded-2xl border-solid border-black p-2 border-2">
                        <p>username: {user.username}</p>
                        <p>password: {user.password}</p>
                    </li>
                ))}
            </ul>
         </div>
    
    )


}
export default UserList