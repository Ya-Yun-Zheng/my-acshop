import ButtonGroup from "./ButtonGroup";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import ConfirmButton from "./ConfirmButton";
import "./ProgressControl.scss";

function ProgressControl() {
    return <section class="progress-control-container col col-lg-6 col-sm-12">
        <ButtonGroup dataPhase="address">
            <NextButton />
        </ButtonGroup>
        <ButtonGroup dataPhase="shipping">
            <PrevButton />
            <NextButton />
        </ButtonGroup>
        <ButtonGroup dataPhase="credit-card">
            <PrevButton />
            <ConfirmButton />
        </ButtonGroup>
    </section>
}

export default ProgressControl;