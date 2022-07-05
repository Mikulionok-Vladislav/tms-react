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
    {active === true ? <RegistrationConfirmation onClickClose={toggle} /> : null}
    {active === false ? <Register onClickClose={toggle} /> : null}
    </div>
  );
};