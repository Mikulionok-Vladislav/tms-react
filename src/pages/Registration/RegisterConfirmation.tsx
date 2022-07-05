import { Link } from "react-router-dom";
import { Title } from "../../components/Title/Title"
import { Button } from "../../components/Button"

interface IProps{
    onClickClose: () => void;
  }

export const RegistrationConfirmation = ({onClickClose}: IProps) => {

    return (
        <div>
          <Title text="Registration Confirmation" />
          <p>найдете письмо на </p>
          <Link to='/'>
          <Button text="Home" type="primary" disabled={false} onClick={onClickClose}/>
          </Link>
        </div>
    );
  };