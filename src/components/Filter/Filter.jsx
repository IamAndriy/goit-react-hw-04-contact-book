import {ImSearch} from 'react-icons/im';
import css from "./Filter.module.css";
import PropTypes from "prop-types";

export const Filter = ({filter, onChange}) => {

    return  <label className={css["filter-label"]}>
                <input className={css["filter-input"]} type="text" id="filter" name="filter" value={filter} onChange={(e)=>onChange(e)}/>
                <ImSearch className={css.icon}/>
            </label> ;
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}