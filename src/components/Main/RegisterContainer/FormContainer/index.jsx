import "./FormContainer.scss";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function FormContainer() {
    return <section className="form-container col col-12">
        <Step1 />
        <Step2 />
        <Step3 />
    </section>
}

export default FormContainer;