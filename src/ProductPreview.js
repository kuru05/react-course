function ProductPreview(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <img src={props.img} alt={props.name} />
        </div>
    );
}

export default ProductPreview;