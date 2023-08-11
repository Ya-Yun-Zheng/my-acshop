import Product from "../Product";

function ProductList(props) {
    return <section class="product-list col col-12" data-total-price="0">
        {props.items.map((item, index) => 
            <Product
            key={item.id}
            {...item}
            setQuantity= {(quantity) => {
                props.items[index].quantity = quantity;
                props.setItems([...props.items]);
            }} />
        )}
    </section>
}

export default ProductList;