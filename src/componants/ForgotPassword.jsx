import axios from "axios";
import { useState } from "react"

function ForgotPassword() {
  const [user, setUser] = useState([]);
  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

  const forgotPassword = async (e) => {
    const { data } = await axios.post(`${import.meta.env.VITE_URL}/auth/forgotPassword`, { email: user.email, password: user.password, code: user.code });
    console.log(data);
  };
  return (
    <>
      <form>
        <input type="email" name="email" onChange={handleChangeUser} />
        <input type="password" name="password" onChange={handleChangeUser} />
        <input type="text" name="code" onChange={handleChangeUser} />

        <button onClick={() => forgotPassword()}>Submit</button>
      </form>
    </>
  )
}

export default ForgotPassword