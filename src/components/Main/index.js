import Cart from "./Cart";
import "./Main.scss";
import ProgressControl from "./ProgressControl";
import RegisterContainer from "./RegisterContainer";

function Main() {
    return <main class="site-main">
        <div class="main-container">
            <RegisterContainer />
            <Cart />
            <ProgressControl />
        </div>
    </main>
}

export default Main;