import "./Form.scss";

function Form(props) {
    return <form className="col col-12" data-phase="address">
        <h3 className="form-title">{props.title}</h3>
        <section className="form-body col col-12">
            {props.children}
        </section>
    </form>
}

export default Form;