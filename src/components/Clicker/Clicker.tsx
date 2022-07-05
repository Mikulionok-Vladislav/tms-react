import { Button } from "../Button/Button";
import { useState } from "react";



export const Clicker= () => {
const [count, setCount] = useState(10);

const increment = ( ) => {
    setCount(count+1)
}

const decrement = ( ) => {
    setCount(count-1)
}

const reset = ( ) => {
    setCount(0)
}
    return (
        <div>
            <p>{count}</p>
            <div> 
        <Button text="+" disabled={false} type={"primary"} onClick={increment} />
        <Button text="reset" disabled={false} type={"secondary"} onClick={reset}/>
        <Button text="-" disabled={false} type={"primary"} onClick={decrement}/>
            </div>
        </div>
    );
  };