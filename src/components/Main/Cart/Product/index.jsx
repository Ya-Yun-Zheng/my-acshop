import "./Product.scss";
import CartContext from "../../CartContext";

function Product(props) {
    return <CartContext.Consumer>
        {({ context, setContext }) => {
            const item = context[props.index];

            function setQuantity(quantity) {
                item.quantity = quantity;
                setContext([...context]);
            }

            return <div class="product-container col col-12" data-count="0" data-price="3999">
                <img class="img-container" src={item.img} />
                <div class="product-info">
                    <div class="product-name">{item.name}</div>
                    <div class="product-control-container">
                        <div class="product-control">
                            <img
                                class="product-action minus"
                                src="/icons/minus.svg"
                                alt=""
                                onClick={() => setQuantity(Math.max(item.quantity - 1, 0))}
                            />
                            <span class="product-count">{item.quantity}</span>
                            <img
                                class="product-action minus"
                                src="/icons/plus.svg"
                                alt=""
                                onClick={() => setQuantity(item.quantity + 1)}
                            />
                        </div>
                    </div>
                    <div class="price">${item.price}</div>
                </div>
            </div>
        }}
    </CartContext.Consumer>
}

export default Product;