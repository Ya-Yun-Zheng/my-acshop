import ButtonGroup from "./ButtonGroup";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import ConfirmButton from "./ConfirmButton";
import "./ProgressControl.scss";

function ProgressControl(props) {
    return <section class="progress-control-container col col-lg-6 col-sm-12">
        <ButtonGroup dataPhase="address">
            <NextButton onClick={() => props.setStep(2)}/>
        </ButtonGroup>
        <ButtonGroup dataPhase="shipping">
            <PrevButton  onClick={() => props.setStep(1)}/>
            <NextButton  onClick={() => props.setStep(3)}/>
        </ButtonGroup>
        <ButtonGroup dataPhase="credit-card">
            <PrevButton  onClick={() => props.setStep(2)}/>
            <ConfirmButton />
        </ButtonGroup>
    </section>
}

export default ProgressControl;