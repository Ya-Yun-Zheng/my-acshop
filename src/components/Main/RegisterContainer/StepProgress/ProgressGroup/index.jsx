import "./ProgressGroup.scss";

function ProgressGroup(props) {
    return <span className="progress-group" data-phase={props.phase}>
        <span className="progress-icon">
            <img className="icon" src="/icons/pg-complete.svg" alt="" />
            <span className="text">{props.step}</span>
        </span>
        <span className="progress-label">{props.title}</span>
    </span>
}

export default ProgressGroup;