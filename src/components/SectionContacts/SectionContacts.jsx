import {Filter} from "../Filter/Filter";
import {ContactList} from "../ContactList/ContactList";
import css from "./SectionContacts.module.css";
import PropTypes from "prop-types";

export const SectionContacts = ({contacts, filter, onChange, onDelContact}) => {

    return <section className={css.section}>
                <h2 className={css.title}>Contacts</h2>
                
                <Filter filter={filter} onChange={onChange}/>

                {   (contacts.length > 0) 
                        ? <ContactList  contacts={contacts} onDelContact={onDelContact}/>
                        : (filter)
                            ? <p className={css.massage}>There are no contacts you are looking for</p>
                            : <p className={css.massage}>There are no contacts in the phone book yet</p>
                }
            </section>
}

SectionContacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
    onChange: PropTypes.func,
    onDelContact: PropTypes.func,
}