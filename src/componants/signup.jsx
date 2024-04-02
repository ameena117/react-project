import axios from "axios";
import { useState } from "react"
import { mixed, object, string } from 'yup';

function Signup() {
  const [user, setUser] = useState([]);
  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

  const handleSetImg = (e) => {
    const { name, files } = e.target;
    setUser({
      ...user,
      [name]: files[0],
    });
    console.log(user);
  };

  const validate = async (e) => {
    const schema = object({
      userName: string().min(6).max(20).required(),
      email: string().email().required(),
      password: string().min(6).max(20).required(),
      image: mixed().required(),
    })
    try {
      await schema.validate(user, { abortEarly: false });
      return true;
    }
    catch (err) {
      console.log(err.errors);
      console.log(err.message);
      return false;
    }
  };
  const validationOnSubmit = async (e) => {
    e.preventDefault();
    const validation = await validate();
    console.log(validation);
    const formData = new FormData();
    formData.append('email', user.email);
    formData.append('userName', user.userName);
    formData.append('password', user.password);
    formData.append('image', user.image);

    const { data } = await axios.post(`${import.meta.env.VITE_URL}/auth/signup`, formData)
    console.log(data);
  };
  return (
    <>
      <form onSubmit={validationOnSubmit}>
        <input type="email" name="email" onChange={handleChangeUser} />
        <input type="text" name="userName" onChange={handleChangeUser} />
        <input type="password" name="password" onChange={handleChangeUser} />
        <input type="file" name="image" onChange={handleSetImg} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Signup