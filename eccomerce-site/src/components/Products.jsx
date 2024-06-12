import React, { useContext } from 'react'
import products from '../api/products'
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';
const Products = () => {

    return (
        <>
            <section className="section-products">
                <div className="container">
                    <h2 className="section-common-heading">Checkout Thapa Store</h2>
                </div>
                <section className="container">
                    <div id="productContainer">
                        {
                            products && products.length > 0 ?
                                products.map(({ id, name, brand, category, price, stock, description, image }) => (
                                    <div key={id}>< ProductCard id={id} name={name} brand={brand} category={category} price={price} stock={stock} description={description} image={image} /></div>
                                ))
                                : <div>no products found</div>
                        }
                    </div>
                </section>
            </section>

            {/* Start product template */}


        </>
    )
}

export default Products
