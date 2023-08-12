import "./ProgressGroup.scss";

function ProgressGroup(props) {
    return <span class="progress-group" data-phase={props.phase}>
        <span class="progress-icon">
            <img class="icon" src="/icons/pg-complete.svg" alt="" />
            <span class="text">{props.step}</span>
        </span>
        <span class="progress-label">{props.title}</span>
    </span>
}

export default ProgressGroup;