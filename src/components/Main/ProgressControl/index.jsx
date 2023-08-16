import ButtonGroup from "./ButtonGroup";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import ConfirmButton from "./ConfirmButton";
import "./ProgressControl.scss";
import CartContext from "../CartContext";

function ProgressControl(props) {
    return <CartContext.Consumer>
        {({ context, register }) => {
            function showConfirm() {
                console.log({
                    ...register,
                    total: context.reduce((sum, item) => sum + item.price * item.quantity, 0)
                });
            }

            return <section className="progress-control-container col col-lg-6 col-sm-12">
                <ButtonGroup dataPhase="address">
                    <NextButton onClick={() => props.setStep(2)} />
                </ButtonGroup>
                <ButtonGroup dataPhase="shipping">
                    <PrevButton onClick={() => props.setStep(1)} />
                    <NextButton onClick={() => props.setStep(3)} />
                </ButtonGroup>
                <ButtonGroup dataPhase="credit-card">
                    <PrevButton onClick={() => props.setStep(2)} />
                    <ConfirmButton onClick={() => showConfirm()} />
                </ButtonGroup>
            </section>
        }}
    </CartContext.Consumer>
}

export default ProgressControl;