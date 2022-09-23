import React from 'react'
import './cart.css'

const ProductCart = ({ title, price, imgURL, amount, subtotal }) => {
    return (
        <>
            <div className='product-cart' >
                <div className='info-product'>
                    <img src={imgURL} alt={title} />
                    <div>
                        <p>{title}</p>
                        <p>$ {price}</p>
                    </div>
                </div>
                <div className='amount-controller'>
                    <p>{amount}</p>
                </div>
                <div className='subtotal'>
                    <p>${subtotal}</p>
                </div>
            </div>
        </>

    )
}

export default ProductCart