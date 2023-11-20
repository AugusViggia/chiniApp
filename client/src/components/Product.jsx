import React from "react";

const Product = ({ product }) => {
    return (
        <div className="product">
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button>Añadir al Carrito</button>
        </div>
    );
};

export default Product;
