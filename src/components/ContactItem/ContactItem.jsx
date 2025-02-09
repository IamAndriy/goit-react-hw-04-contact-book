import { IoIosClose } from "react-icons/io";
import css from './ContactItem.module.css';
import PropTypes from "prop-types";

export const ContactItem = ({id, name, number, onDelContact}) => {

    const onClickHandle = ({currentTarget}) => {
        onDelContact(currentTarget.id);
    }

    return  <li className={css["contact-li"]}>

                <div className={css["contact-div"]}>

                    <p className={css["contact-name"]}>{name}</p>
                    <p className={css["contact-number"]}>{number}</p>
                </div>

                <button className={css["contact-del-btn"]} id={id} type="button" onClick={onClickHandle}>
                    <IoIosClose className={css["contact-del-icon"]}/> 
                </button>

            </li>

}

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDelContact: PropTypes.func,
}