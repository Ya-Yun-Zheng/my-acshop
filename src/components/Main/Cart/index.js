import "./Cart.scss";
import CartInfo from "./CartInfo";
import ProductList from "./ProductList";

function Cart() {
    const Items = [
        {
          id: '1',
          name: '貓咪罐罐',
          img: 'https://picsum.photos/300/300?text=1',
          price: 100,
          quantity: 2,
        },
        {
          id: '2',
          name: '貓咪干干',
          img: 'https://picsum.photos/300/300?text=2',
          price: 200,
          quantity: 1,
        },
      ];

    return <section class="cart-container col col-lg-5 col-sm-12">
        <h3 class="cart-title">購物籃</h3>
        <ProductList items={Items} />
        <CartInfo className="shipping" text="運費" price="運費" />
        <CartInfo className="total" text="小計" price="$0" />
    </section>
}

export default Cart;