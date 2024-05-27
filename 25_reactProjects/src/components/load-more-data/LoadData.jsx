import React, { useEffect, useId, useState } from 'react'

const LoadData = ({ limit = 20 }) => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)
    async function fetchProducts(getLimit) {

        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=${getLimit}&skip=${count === 0 ? 0 : count * 20}`)
            const result = await response.json()
            if (result && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products])
                setLoading(false)
            }
        }
        catch (e) {
            setLoading(false)
            console.log(e);
        }
    }
    useEffect(() => {
        fetchProducts(limit)
    }, [count])
    useEffect(() => {
        products && products.length === 100 ? setDisableButton(true) : setDisableButton(false)
    }, [products])
    if (loading) (
        <div>loading data</div>
    )
    return (
        <div id='container' className='flex flex-col justify-center'>
            <div id='productContainer' className='grid grid-cols-4 gap-3'>
                {
                    products && products.length ?
                        products.map(({id, thumbnail, title }) => (
                            <div 
                            key={id}
                            className='p-5 border-2 border-solid flex flex-col gap-2' id='product' key={id}>
                                <img className='w-[200px] h-[200px]' src={thumbnail} alt={title} />
                                <p>{title}</p>
                            </div>
                        ))
                        : null
                }
            </div>
            <div id="button-container" className='grid place-items-center'>
                <button
                    className='rounded bg-orange-400 p-2 text-white m-2'
                    disabled={disableButton}
                    onClick={() => setCount(count + 1)}
                >Load more data</button>
                {
                    disableButton ? <p>You have reach 100 products</p> : null
                }
            </div>

        </div>
    )
}

export default LoadData
