import InputGroup from "../InputGroup";
import "./Select.scss";

function Select(props) {
    return <InputGroup label={props.label} className={props.groupClass}>
        <div class="select-container">
            <select required>
                {props.options.map((option, index) => {
                    return <option key={index} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    </InputGroup>
}

export default Select;