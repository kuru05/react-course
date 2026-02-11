function ProductPreview(props) {
    return (
        <div className="product-preview">
            <img src={props.img} alt={props.name} />
            <h2>{props.name}</h2>
            <p className="price">{props.price} €</p>
        </div>
    );
}

export default ProductPreview;