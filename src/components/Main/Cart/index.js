import "./Cart.scss";
import CartInfo from "./CartInfo";
import ProductList from "./ProductList";

function Cart() {
    return <section class="cart-container col col-lg-5 col-sm-12">
        <h3 class="cart-title">購物籃</h3>
        <ProductList />
        <ProductList />
        <CartInfo className="shipping" text="運費" price="運費" />
        <CartInfo className="total" text="小計" price="$0" />
    </section>
}

export default Cart;