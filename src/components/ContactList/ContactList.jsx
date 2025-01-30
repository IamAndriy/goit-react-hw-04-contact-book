import css from "./ContactList.module.css";
import {ContactItem} from "../ContactItem/ContactItem";
import { nanoid } from "nanoid";

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