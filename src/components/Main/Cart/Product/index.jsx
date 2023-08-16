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

            return <div className="product-container col col-12" data-count="0" data-price="3999">
                <img className="img-container" src={item.img} alt="" />
                <div className="product-info">
                    <div className="product-name">{item.name}</div>
                    <div className="product-control-container">
                        <div className="product-control">
                            <img
                                className="product-action minus"
                                src="/icons/minus.svg"
                                alt=""
                                onClick={() => setQuantity(Math.max(item.quantity - 1, 0))}
                            />
                            <span className="product-count">{item.quantity}</span>
                            <img
                                className="product-action minus"
                                src="/icons/plus.svg"
                                alt=""
                                onClick={() => setQuantity(item.quantity + 1)}
                            />
                        </div>
                    </div>
                    <div className="price">${item.price}</div>
                </div>
            </div>
        }}
    </CartContext.Consumer>
}

export default Product;