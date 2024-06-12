import React, { useState, useEffect } from 'react';
import { ProductContext, useProducts } from '../context/ProductContext';
import products from '../api/products';
import CartCard from '../components/CartCard';
const AddToCart = () => {
    const [total, setTotal] = useState(0)
    const { cartProducts } = useProducts()
    function getTotal() {
        let total = 0
        cartProducts.map((cartProducts) => {
            total += cartProducts.price * cartProducts.quantity
        })
        setTotal(total)
    }
    useEffect(() => {
        getTotal()
    }, [cartProducts])
    function removeProduct(getId) {
        console.log(getId);
    }
    return (
        <>
            <div>
                {
                    cartProducts && cartProducts.length > 0 ?
                        products.map((product) => (
                            cartProducts.map(({ id, quantity, price }) => (
                                product.id === id ?
                                    <div key={id}>
                                        <CartCard removeProduct={removeProduct} stock={product.stock} category={product.category} name={product.name} id={id} quantity={quantity} price={price} />
                                    </div>
                                    : null
                            ))
                        ))
                        : null
                }
            </div>
            <section className="productCartTotalElem">
                <div className="productCartTotalElement">
                    <p>Selected Offer Summary</p>
                    <div className="productOrderTotal">
                        <div>
                            <p>Sub Total:</p>
                            <p className="productSubTotal">₹ {total}</p>
                        </div>
                        <div>
                            <p>Tax:</p>
                            <p className="productTax">₹50</p>
                        </div>
                        <hr />
                        <div>
                            <p>Final Total:</p>
                            <p className="productFinalTotal">₹ {total + 50}</p>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
};

export default AddToCart;
