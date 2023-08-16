function PrevButton(props) {
    return <button className="prev" onClick={props.onClick}>
        <img src="/icons/left-arrow.svg" className="cursor-point" alt=""/>
        上一步
    </button>
}

export default PrevButton;