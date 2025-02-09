import css from "./ContactList.module.css";
import {ContactItem} from "../ContactItem/ContactItem";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export const ContactList = ({contacts, onDelContact }) => {

    return  <ul className={css["contact-list"]}>
                {contacts.map(item => <ContactItem key={nanoid()} 
                                                id={item.id} 
                                                name={item.name} 
                                                number={item.number} 
                                                onDelContact={onDelContact}
                                    />
                            )
                }
            </ul>
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDelContact: PropTypes.func,
}