// ProductList.js
import React, { useState, useEffect } from 'react';
import ProductPreview from './ProductPreview';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/get-products")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
            .catch(err => console.error("Erreur fetching products:", err));
    }, []);

    return (
        <div className="product-list">
            <h2>Nos Produits</h2>
            {products.map((product, index) => (
                <ProductPreview
                    key={index}
                    name={product.name}
                    price={product.price}
                    img={product.img}
                />
            ))}
        </div>
    );
}

export default ProductList;