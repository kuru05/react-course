// ProductList.js
import React from 'react';
import ProductPreview from './ProductPreview';


function ProductList(props) {
    return (
        <div className="product-list">
            {props.products.map((product) => (
                <ProductPreview
                    key={product.id} // React needs a unique key for lists
                    name={product.name}
                    price={product.price}
                    img={product.img}
                />
            ))}
        </div>
    );
}

export default ProductList;