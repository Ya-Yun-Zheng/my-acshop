import Product from "../Product";

function ProductList(props) {
    return <section class="product-list col col-12" data-total-price="0">
        {props.items.map(item => 
            <Product key={item.id} {...item} />
        )}
    </section>
}

export default ProductList;