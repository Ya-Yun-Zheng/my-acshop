import Product from "../Product";
import CartContext from "../../CartContext";

function ProductList() {
    return <CartContext.Consumer>
        {({ context }) => <section class="product-list col col-12" data-total-price="0">
            {context.map((item, index) =>
                <Product
                    key={item.id}
                    index={index}
                />
            )}
        </section>}
    </CartContext.Consumer>
}

export default ProductList;