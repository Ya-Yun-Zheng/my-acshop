function NextButton(props) {
    return <button class="next" onClick={props.onClick}>
        下一步
        <img src="/icons/right-arrow.svg" class="cursor-point" alt=""/>
    </button>
}

export default NextButton;