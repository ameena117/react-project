import axios from 'axios';
import React, { useState } from 'react'
import ForgotPassword from './ForgotPassword';

function SendCode() {
    const [email, setEmail] = useState([]);
    const [send, setSend] = useState(false);
    const handleChangeEmail = (e) => {
        const { name, value } = e.target;
        setEmail({
            ...email,
            [name]: value,
        });
        console.log(email);
    }
    const sendCode = async () => {
        try {
            const { data } = await axios.patch(`${import.meta.env.VITE_URL}/auth/sendcode`, email);
            setSend(true);
        }
        catch (err) {
            console.log(err);
            setSend(false);
        }
    };
    return (
        <>
            {send === false ? <>
                <input type="email" name="email" onChange={handleChangeEmail} />
                <button onClick={() => sendCode()}>Confirm</button>
            </> :
                <ForgotPassword />
            }
        </>
    )
}

export default SendCode