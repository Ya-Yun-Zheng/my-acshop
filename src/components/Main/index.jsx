import Cart from "./Cart";
import "./Main.scss";
import ProgressControl from "./ProgressControl";
import RegisterContainer from "./RegisterContainer";
import { useState } from "react";
import CartContext, { defaultCartContext } from "./CartContext";

function Main(props) {
    const [context, setContext] = useState(defaultCartContext);
    const [register, setRegister] = useState({
        cardName: '',
        cardNumber: '',
        cardDate: '',
        cardCvC: '',
    });

    return <CartContext.Provider value={{ context, setContext, register, setRegister }}>
        <main class="site-main">
            <div class="main-container">
                <RegisterContainer step={props.step} />
                <Cart />
                <ProgressControl setStep={props.setStep} />
            </div>
        </main>
    </CartContext.Provider>
}

export default Main;