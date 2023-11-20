import React, { useState } from "react";

function Cart() {
    const [cartItems, setCartItems] = useState([]);

  // Funciones para agregar, quitar productos del carrito, etc.

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {/* Muestra la lista de productos en el carrito */}
        </div>
    );
}

export default Cart;
