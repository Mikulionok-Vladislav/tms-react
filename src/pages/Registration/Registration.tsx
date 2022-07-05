import { useState } from "react"
import { Register } from "./Register"
import { RegistrationConfirmation } from "./RegisterConfirmation";



export const Registration = () => {

  const [active, setActive] = useState<boolean>(false);

  const toggle = (  )  =>{
    setActive(!active)
  }  

  return (
    <div>
    {active === false ? <RegistrationConfirmation onClickClose={toggle} /> : null}
    {active === true ? <Register onClickClose={toggle} /> : null}
    </div>
  );
};