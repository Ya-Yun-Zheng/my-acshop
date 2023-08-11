import "./Cart.scss";
import CartInfo from "./CartInfo";
import ProductList from "./ProductList";
import { useState } from "react";
import CartContext from "../CartContext";

function Cart() {
    return <CartContext.Consumer>
        {({ context }) => {
            return <section class="cart-container col col-lg-5 col-sm-12">
                <h3 class="cart-title">購物籃</h3>
                <ProductList />
                <CartInfo className="shipping" text="運費" price="免費" />
                <CartInfo
                    className="total"
                    text="小計"
                    price={`$${context.reduce((sum, item) => sum + item.price * item.quantity, 0)}`}
                />
            </section>
        }}
    </CartContext.Consumer>
}

export default Cart;