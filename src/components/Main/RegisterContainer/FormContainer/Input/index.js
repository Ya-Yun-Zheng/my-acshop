import "./Input.scss";
import InputGroup from "../InputGroup";

function Input(props) {
    // const inputRef = useRef();

    return <InputGroup label={props.label} className={props.groupClass}>
        <input
            type={props.type}
            placeholder={props.placeholder}
        />
    </InputGroup>
}

export default Input;