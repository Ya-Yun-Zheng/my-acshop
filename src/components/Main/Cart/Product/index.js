import "./Product.scss";

function Product(props) {
    return <div class="product-container col col-12" data-count="0" data-price="3999">
        <img class="img-container" src="/images/product-1.jpg" />
        <div class="product-info">
            <div class="product-name">破壞補丁修身牛仔褲</div>
            <div class="product-control-container">
                <div class="product-control">
                    <img class="product-action minus" src="/icons/minus.svg" alt=""/>
                    {/* </svg> */}
                    <span class="product-count">0</span>
                    <img class="product-action minus" src="/icons/plus.svg" alt=""/>
                </div>
            </div>
            <div class="price">$0</div>
        </div>
    </div>
}

export default Product;