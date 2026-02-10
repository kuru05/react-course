function ProductDetail(props) {
    return (
        <div>
            <h1>Produit</h1>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.quantity}</p>
        </div>
    );
}

export default ProductDetail;
