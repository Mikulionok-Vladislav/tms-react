import { useState } from "react"
import { Title } from "../../components/Title/Title"
import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button"

interface IProps{
    onClickClose: () => void;
  }

export const Register = ({onClickClose}: IProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

  return (
    <div>
      <Title text="Register" />
      <Input
        value={name}
        setValue={setName}
        label={"Name"}
        placeholder="name"
      />
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
      <Input
        value={confirmpassword}
        setValue={setConfirmPassword}
        label="Confirm password"
        placeholder="Confirm password"
      />
      <Button text="Register" type="primary" disabled={false} onClick={onClickClose} />
    </div>
  );
};