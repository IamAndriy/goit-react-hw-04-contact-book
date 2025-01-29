import { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";
import { SectionContactForm } from "../SectionContactForm/SectionContactForm";
import { SectionContacts } from "../SectionContacts/SectionContacts";
import css from "./App.module.css";

// const contacts = [{id: 'id-1', name: 'Rosie Simpson',  number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements',  number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     {id: 'id-5', name: 'Hermione Kline1', number: '443-89-12'},
//     {id: 'id-6', name: 'Eden Clements2',  number: '645-17-79'},
//     {id: 'id-7', name: 'Annie Copeland1', number: '227-91-26'},
//     {id: 'id-8', name: 'Hermione Kline2', number: '443-89-12'},
//     {id: 'id-9', name: 'Eden Clements2',  number: '645-17-79'},
//     {id: 'id-10', name: 'Annie Copeland2', number: '227-91-26'},
//     {id: 'id-11', name: 'Hermione Kline3', number: '443-89-12'},
//     {id: 'id-12', name: 'Eden Clements3',  number: '645-17-79'},
//     {id: 'id-13', name: 'Annie Copeland3', number: '227-91-26'},
//     {id: 'id-14', name: 'Eden Clements4',  number: '645-17-79'},
//     {id: 'id-15', name: 'Annie Copeland4', number: '227-91-26'},
//     {id: 'id-16', name: 'Hermione Kline5', number: '443-89-12'},
//     {id: 'id-17', name: 'Eden Clements5',  number: '645-17-79'},
//     {id: 'id-18', name: 'Annie Copeland5', number: '227-91-26'},
//     {id: 'id-19', name: 'Hermione Kline56', number: '443-89-12'},
//     {id: 'id-20', name: 'Eden Clements56',  number: '645-17-79'},];

// localStorage.setItem("CONTACTS", JSON.stringify(contacts));

const key = "CONTACTS";

const initialState = {
    contacts: [],
    filter: ""
};

export class App extends Component {

    state = {
        ...initialState,
    };    
    

    visibleContacts = () => {
        const {filter, contacts} = this.state;
        return  filter.trim() 
                    ? contacts.filter(item => item.name.toLowerCase().includes(filter.trim().toLowerCase())) 
                    : [...contacts];
    }

    addContact = ({name, number}) => {
        const {contacts} = this.state;

        const res = contacts.find(item => item.name.toLowerCase() === name.toLowerCase());

        if (res) {
            toast("The contact is elready existing!") 
        }else{
            this.setState({contacts : [ ...contacts, {id: nanoid() , name, number} ]});
            toast("The contact was added to the book");
        }
    }

    setFilter = ({target}) => {
        this.setState({filter: target.value});
    }

    onDelContact = (id) => {        
        const {contacts} = this.state;
        const {name, number} = contacts.find(item => item.id === id);
        this.setState({contacts : contacts.filter(item => item.id !== id)});
        toast(`The contact <${name} , ${number} > was deleted from the book`);
    }

    componentDidMount = () => {
        this.setState({contacts: JSON.parse(localStorage.getItem(key)) ?? []});
    }

    componentDidUpdate = (prevProps, prevState) => {
        const {contacts} = this.state;
        if (contacts !== prevState.contacts){
            localStorage.setItem(key, JSON.stringify(contacts));
        }
    }

    render (){
        const {filter} = this.state;
        const {setFilter, visibleContacts, addContact, onDelContact} = this;

        return  <div className={css.container}>
                
                <h1 className={css["title-h1"]}>Phonebook</h1>

                <div className={css["book-container"]}>

                    <ToastContainer autoClose={3000} theme="light"/>

                    

                    <SectionContactForm className={css.section} 
                                        onAdd={addContact}
                    />
                    
                    <SectionContacts    className={css.section}
                                        filter={filter} 
                                        onChange={setFilter}
                                        contacts={visibleContacts()} 
                                        onDelContact={onDelContact}
                    />
                </div>
                </div>
    }
}

