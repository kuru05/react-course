function ProductDetail(props) {
    return (
        <div className="product-detail">
            <img src={props.img} alt={props.name} />
            <div className="product-detail-info">
                <h1>{props.name}</h1>
                <p className="price">{props.price} €</p>
                <p className="quantity">Stock: {props.quantity}</p>
                <button>Ajouter au panier</button>
            </div>
        </div>
    );
}

export default ProductDetail;
