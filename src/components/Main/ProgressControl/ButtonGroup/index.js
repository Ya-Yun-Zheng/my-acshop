function ButtonGroup(props) {
    return <section class="button-group col col-12" data-phase={props.dataPhase}>
        {props.children}
    </section>
}

export default ButtonGroup;