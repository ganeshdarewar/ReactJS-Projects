import React, { useState } from 'react'

const CartCard = ({ removeProduct, stock, category, name, id, quantity, price }) => {
    const [tempQuantity, setTempQuantity] = useState(quantity)
    function increaseQuantity() {
        setTempQuantity(tempQuantity < stock ? tempQuantity + 1 : tempQuantity)
    }
    function decreaseQuantity() {
        setTempQuantity(tempQuantity > 1 ? tempQuantity - 1 : tempQuantity)
    }

    return (
        <div className="cards" id="cardValue">
            <article className="information [ card ]">
                <div>
                    <span className="category">{category}</span>
                </div>
                <div className="imageContainer">
                    <img className="productImage" src="" alt="" />
                </div>

                <h2 className="productName">{name}</h2>

                <p className="productPrice">{price}</p>

                <div className="stockElement">
                    <button className="cartIncrement" onClick={increaseQuantity}>+</button>
                    <p className="productQuantity" data-quantity="1">{tempQuantity}</p>
                    <button className="cartDecrement" onClick={decreaseQuantity}>-</button>
                </div>

                {/* <button className="add-to-cart-button">Add To Cart</button> */}
                <button onClick={() => removeProduct(id)} className="add-to-cart-button remove-to-cart-button">
                    Remove
                </button>
            </article>
        </div>
    )
}

export default CartCard
