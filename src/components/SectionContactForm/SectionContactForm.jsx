import { useState } from "react";
import css from "./SectionContactForm.module.css";
import PropTypes from "prop-types";

export const SectionContactForm = ({onAdd}) => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const reset = () => { 
        setName("");
        setNumber("");
    }

    const onSubmitHandle = (e) => {
        e.preventDefault();
        onAdd({name, number});
        reset();        
    }

    const onChangeFormInput = ({target}) => {

        switch (target.name){
            case "name": 
                        setName(target.value);
                        break;
            case "number": 
                        setNumber(target.value);
                        break;
            default: break;
        }
    }

    return  <section className={css.section}>
                <h2 className={css["visually-hidden"]}>Form for adding new contacts</h2>
                <form className={css.form} onSubmit={onSubmitHandle} >

                    <label className={css.label} aria-label="Person name input">Name
                        <input  className={css.name}
                                id="name" 
                                type="text" 
                                name="name" 
                                value={name} 
                                required 
                                autoComplete="off" 
                                placeholder="Name/Sername"
                                pattern="^([a-zA-Z][ ]*){2,50}$"
                                onChange={onChangeFormInput}
                        />
                        <p className={css.massage}>Name must be 2-50 chars long and contain only latin letters and whitespaces</p>
                    </label>

                    <label className={css.label} aria-label="Phone number input">Phone
                        <input  className={css.number}
                                id="number"
                                type="tel"
                                name="number"
                                value={number}
                                required
                                autoComplete="off"
                                placeholder="xxx xxx xx xx"
                                pattern="^([0-9][ ]*){8,20}$"
                                onChange={onChangeFormInput}
                        />
                        <p className={css.massage}>Phone number must be 8-20 chars long and contain only digits and whitespaces</p>
                    </label>

                    <button className={css.btn} type="submit" aria-label="Add contact">Add contact</button>

                </form>
            </section>
                
}

SectionContactForm.propTypes = {
    onAdd: PropTypes.func,
}