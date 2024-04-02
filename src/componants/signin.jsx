import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";
import { object, string } from 'yup';

function Signin() {
  const [user, setUser] = useState([]);
  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

  const validate = async (e) => {
    const schema = object({
      email: string().email().required(),
      password: string().min(6).max(20).required(),
    })
    try {
      await schema.validate(user, { abortEarly: false });
      return true;
    }
    catch (err) {
      console.log(err.errors);
      return false;
    }
  };
  const validationOnSubmit = async (e) => {
    e.preventDefault();
    const validation = await validate();
    console.log(validation);
    const { data } = await axios.post(`${import.meta.env.VITE_URL}/auth/signin`, {email: user.email, password:user.password})
    console.log(data);
    localStorage.setItem('user',data.token);
  };
  return (
    <>
      <form onSubmit={validationOnSubmit}>
        <input type="email" name="email" onChange={handleChangeUser} />
        <input type="password" name="password" onChange={handleChangeUser} />
        <button type="submit">Submit</button>
        <Link to={'../sendCode'}>Forgot Password</Link>
      </form>
    </>
  )
}

export default Signin