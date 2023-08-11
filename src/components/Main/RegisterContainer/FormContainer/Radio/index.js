import "./Radio.scss";

function Radio(props) {
    return <label class="radio-group col col-12" data-price="0">
        <input id={props.inputId} type="radio" name={props.name} checked />
        <div class="radio-info">
            <div class="col col-12">
                <div class="text">{props.text}</div>
                <div class="price">{props.price}</div>
            </div>
            <div class="period col col-12">{props.period}</div>
        </div>
        <div class="radio-box-border"></div>
    </label>
}

export default Radio;