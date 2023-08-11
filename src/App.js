import "./styles/reset.scss";
import "./styles/base.scss";
import "./styles/dark-theme.scss";
import Header from './components/Header';
import Main from "./components/Main";
import Footer from './components/Footer';
import { useState } from "react";

function App() {
  let [step, setStep] = useState(1);

  return <>
    <Header />
    <Main step={step} setStep={setStep}/>
    <Footer />
  </>
}

export default App;
