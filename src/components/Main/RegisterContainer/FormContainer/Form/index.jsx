import "./Form.scss";

function Form(props) {
    return <form class="col col-12" data-phase="address">
        <h3 class="form-title">{props.title}</h3>
        <section class="form-body col col-12">
            {props.children}
        </section>
    </form>
}

export default Form;