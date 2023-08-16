import "./Radio.scss";

function Radio(props) {
    return <label className="radio-group col col-12" data-price="0">
        <input id={props.inputId} type="radio" name={props.name} defaultChecked={props.checked} />
        <div className="radio-info">
            <div className="col col-12">
                <div className="text">{props.text}</div>
                <div className="price">{props.price}</div>
            </div>
            <div className="period col col-12">{props.period}</div>
        </div>
        <div className="radio-box-border"></div>
    </label>
}

export default Radio;