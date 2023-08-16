import "./CartInfo.scss";

function CartInfo(props) {
    return <section className={`cart-info col col-12 ${props.className}`}>
        <div className="text">{props.text}</div>
        <div className="price">{props.price}</div>
    </section>
}

export default CartInfo;