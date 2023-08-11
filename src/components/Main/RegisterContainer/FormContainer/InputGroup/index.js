import "./InputGroup.scss";

function InputGroup(props) {
    return <div className={`input-group ${props.className}`}>
        <div className="input-label">{props.label}</div>
        {props.children}
    </div>
}

export default InputGroup;