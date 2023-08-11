import "./Input.scss";
import InputGroup from "../InputGroup";

function Input(props) {
    return <InputGroup label={props.label} className={props.groupClass}>
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </InputGroup>
}

export default Input;