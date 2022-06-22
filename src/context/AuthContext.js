import { createContext, useState } from "react";
import axios from 'axios';


const AuthContext = createContext();

export { AuthContext };


const AuthProvider = ({ children }) => {

    const [loadingbutton, setLoadingButton] = useState(false)

    const loginUser = (e) => {
        e.preventDefault();
        setLoadingButton(true)
        const config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/login/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { 'email': e.target.email.value, 'password': e.target.password.value }
        };

        axios(config)
            .then(response => {
                console.log(response);
                setLoadingButton(false)

            })
            .catch(error => {
                console.log(error.response.data.errors);
                setLoadingButton(false)
            });
    }

    const contextData = {
        "user": user,
        "loginUser": loginUser,
        "loadingbutton": loadingbutton,
    }


    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
