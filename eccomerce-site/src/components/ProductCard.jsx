import React, { useState } from 'react';
import image1 from '../images/lapi.png'
import { useProducts } from '../context/ProductContext';
const ProductCard = ({ id, name, brand, category, price, stock, description, image }) => {
    const [quantity, setQuantity] = useState(1)
    const { addProducts } = useProducts()
    function increaseQuantity() {
        setQuantity(quantity < stock ? quantity + 1 : quantity)
    }
    function decreaseQuantity() {
        setQuantity(quantity > 1 ? quantity - 1 : quantity)
    }

    return (
        <div className="cards" id="cardValue">
            <article className="infomation card">
                <span className="category">{category}</span>
                <div className="imageContainer">
                    <img src={image1} alt={name} className="productImage" />
                </div>
                <h2 className="productName">{name}</h2>
                <div className="productRating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <p className="productDescription">{description}</p>
                <div className="productPriceElement">
                    <p className="productPrice">${price}</p>
                    <p className="productActualPrice">${price * 2}</p>
                </div>
                <div className="productStockElement">
                    <p className="productProperty">Total Stocks Available:</p>
                    <p className="productStock">{stock}</p>
                </div>
                <div className="productQuantityElement">
                    <p className="productProperty">Quantity (Pieces)</p>
                    <div className="stockElement">
                        <button className="cartIncrement" onClick={increaseQuantity}>+</button>
                        <p className="productQuantity">{quantity}</p>
                        <button className="cartDecrement" onClick={decreaseQuantity}>-</button>
                    </div>
                </div>
                <button className="add-to-cart-button" onClick={() => addProducts(id, quantity, price)}>
                    <i className="fa-solid fa-cart-shopping"></i> Add To Cart
                </button>
            </article>
        </div>
    );
}

export default ProductCard;
