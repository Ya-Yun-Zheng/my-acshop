import "./CartInfo.scss";

function CartInfo(props) {
    return <section class={`cart-info col col-12 ${props.className}`}>
        <div class="text">{props.text}</div>
        <div class="price">{props.price}</div>
    </section>
}

export default CartInfo;