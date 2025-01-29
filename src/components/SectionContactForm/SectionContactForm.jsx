import { Component } from "react";
import css from "./SectionContactForm.module.css";

const initialState={
    name: "",
    number: ""
}

export class SectionContactForm extends Component{

    state ={ 
        ...initialState
    }

    reset = () => { 
        this.setState({...initialState});
    }

    onSubmitHandle = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state);
        this.reset();        
    }

    onChangeFormInput = ({target}) => { 
        this.setState({[target.name]: target.value});
    }

    render(){
        const {name, number} = this.state;
        const {onSubmitHandle, onChangeFormInput} = this;

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
}