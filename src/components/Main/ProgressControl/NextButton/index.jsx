function NextButton(props) {
    return <button className="next" onClick={props.onClick}>
        下一步
        <img src="/icons/right-arrow.svg" className="cursor-point" alt=""/>
    </button>
}

export default NextButton;