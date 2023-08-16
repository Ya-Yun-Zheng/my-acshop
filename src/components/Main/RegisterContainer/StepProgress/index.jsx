import ProgressGroup from "./ProgressGroup";
import "./StepProgress.scss";

function StepProgress() {
    return <section className="progress-container col col-12">
        <ProgressGroup step="1" phase="address" title="寄送地址" />
        <span className="progress-bar" data-order="1"></span>
        <ProgressGroup step="2" phase="shipping" title="運送方式" />
        <span className="progress-bar" data-order="2"></span>
        <ProgressGroup step="3" phase="credit-card" title="付款資訊" />
    </section>
}

export default StepProgress;