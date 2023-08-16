import "./RegisterContainer.scss";
import StepProgress from "./StepProgress";
import FormContainer from "./FormContainer";

function RegisterContainer(props) {
    return <section className="register-container col col-lg-6 col-sm-12" data-phase={props.step} data-total-price="0">
        <h2 className="register-title col col-12">結帳</h2>
        <StepProgress />
        <FormContainer />
    </section>
}

export default RegisterContainer;