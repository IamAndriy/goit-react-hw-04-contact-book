import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";
import { SectionContactForm } from "../SectionContactForm/SectionContactForm";
import { SectionContacts } from "../SectionContacts/SectionContacts";
import useLocalStorage from "hooks/useLocalStorage";
import css from "./App.module.css";

export const App = () => {

    const [contacts, setContacts] = useLocalStorage("CONTACTS", []);
    const [filter, setFilter] = useState('');

    const visibleContacts = () => {
        return  filter.trim() 
                    ? contacts.filter(item => item.name.toLowerCase().includes(filter.trim().toLowerCase())) 
                    : [...contacts];
    }

    const addContact = ({name, number}) => {

        const res = contacts.find(item => item.name.toLowerCase() === name.toLowerCase());

        if (res) {
            toast("The contact is elready existing!") 
        }else{
            setContacts([ ...contacts, {id: nanoid() , name, number} ]);
            toast("The contact was added to the book");
        }
    }

    const onDelContact = (id) => { 

        const {name, number} = contacts.find(item => item.id === id);

        setContacts(contacts.filter(item => item.id !== id));
        
        toast(`The contact <${name} , ${number} > was deleted from the book`);
    }

    return  <div className={css.container}>
            
                <h1 className={css["title-h1"]}>Phonebook</h1>

                <div className={css["book-container"]}>

                    <ToastContainer autoClose={3000} theme="light"/>

                    <SectionContactForm className={css.section} 
                                        onAdd={addContact}
                    />
                    
                    <SectionContacts    className={css.section}
                                        filter={filter} 
                                        onChange={({target})=>setFilter(target.value)}
                                        contacts={visibleContacts()} 
                                        onDelContact={onDelContact}
                    />
                </div>

            </div>
}

