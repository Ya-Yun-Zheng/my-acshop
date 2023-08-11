import Cart from "./Cart";
import "./Main.scss";
import ProgressControl from "./ProgressControl";
import RegisterContainer from "./RegisterContainer";

function Main(props) {
    return <main class="site-main">
        <div class="main-container">
            <RegisterContainer step={props.step}/>
            <Cart />
            <ProgressControl setStep={props.setStep}/>
        </div>
    </main>
}

export default Main;