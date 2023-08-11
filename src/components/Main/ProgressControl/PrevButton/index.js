function PrevButton(props) {
    return <button class="prev" onClick={props.onClick}>
        <img src="/icons/left-arrow.svg" class="cursor-point" alt=""/>
        上一步
    </button>
}

export default PrevButton;