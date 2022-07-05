import { useState } from "react"
// import { Header } from "../components/Header/Header"
import { Title } from "../components/Title/Title"
import { Input } from "../components/Input/Input"
import { Button } from "../components/Button"


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = () => {
    alert("Login with email:" + email + " password:" + password);
  };
  return (
    <div>
        {/* <Header/> */}
      <Title text="Login" />
      <Input
        value={email}
        setValue={setEmail}
        label={"Email"}
        placeholder="email"
      />
      <Input
        value={password}
        setValue={setPassword}
        label="Password"
        placeholder="password"
      />
      <Button text="Login" onClick={onClick} type="primary" disabled={false} />
    </div>
  );
};