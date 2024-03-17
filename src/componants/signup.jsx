import { useState } from "react"

function Signup() {
  const [user,setUser] = useState([]);
  const handleChangeUser = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
      console.log(user);
    };
  const validationOnSubmit = (e) => {
    e.preventDefault();
    console.log(user.email);
    console.log(user);
  };
  return (
    <>
      <form>
        <input type="email" value={user.email} name="email" onChange={(e) => handleChangeUser(e)} />
        <input type="text" value={user.username} name="username" onChange={(e) => handleChangeUser(e)} />
        <input type="password" value={user.password} name="password" onChange={(e) => handleChangeUser(e)} />
        <input type="password" value={user.rePassword} name="rePassword" onChange={(e) => handleChangeUser(e)} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Signup