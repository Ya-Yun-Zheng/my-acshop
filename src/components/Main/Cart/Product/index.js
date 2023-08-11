import "./Product.scss";

function Product(props) {
    return <div class="product-container col col-12" data-count="0" data-price="3999">
        <img class="img-container" src={props.img} />
        <div class="product-info">
            <div class="product-name">{props.name}</div>
            <div class="product-control-container">
                <div class="product-control">
                    <img
                        class="product-action minus"
                        src="/icons/minus.svg"
                        alt=""
                        onClick={() => props.setQuantity(Math.max(props.quantity - 1, 0))}
                    />
                    <span class="product-count">{props.quantity}</span>
                    <img
                        class="product-action minus"
                        src="/icons/plus.svg"
                        alt=""
                        onClick={() => props.setQuantity(props.quantity + 1)}
                    />
                </div>
            </div>
            <div class="price">${props.price}</div>
        </div>
    </div>
}

export default Product;