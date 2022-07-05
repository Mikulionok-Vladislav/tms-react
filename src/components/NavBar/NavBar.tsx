import { Link } from "react-router-dom";
import { ReactComponent as Close } from "./close.svg";
import { useEffect } from "react"
import { Button } from "../Button"
import styles from "./index.module.css";

interface IProps{
  onClickClose: () => void;
}

export const NavBar = ({onClickClose}: IProps) => {
  useEffect(()=> {
    console.log("mounting");

    return() => {
      console.log("unmounting")
    }
  }, []);

  return (
    <div className={styles.navBar}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <Close onClick={onClickClose}/>
        </div>
          <Link to='/login' onClick={onClickClose}>
            <Button text='Login' onClick={() => {}} disabled={false} />
          </Link>
          <Link to='/emoji' className="Link-emoji" onClick={onClickClose}>
            <a>EMOJI</a>
            {/* <Button text='Emoji' onClick={() => {}} disabled={false} /> */}
          </Link>
          <Link to='/' onClick={onClickClose}>
            <Button text='Home' onClick={() => {}} disabled={false} />
          </Link>
          <Link to='/register' onClick={onClickClose}>
            <Button text='Registration' onClick={() => {}} disabled={false} />
          </Link>
      </div>
    </div>
  );
};
