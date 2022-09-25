import { addDoc, collection, getDocs } from 'firebase/firestore';
import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../config/Config';
import ProductCart from './ProductCart';
import './cart.css'
import Navbar from '../navigation/Navbar';
import { useRef } from 'react';

const CartPage = () => {
    const [product, setProduct] = useState([])
    const userCollectionRef = collection(db, "cart");
    const subtotal = useRef(0);


    useEffect(() => {
        const getCart = async () => {
            const data = await getDocs(userCollectionRef)
            // console.log(data.docs);
            setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getCart()
    }, [])

    const buyHandle = () => {
        product.map((prod) => {
            addDoc(collection(db, "orders"), prod).then(() => {
                // alert("Success!")
            }).catch((error) => {
                alert(error.message)
            });
        })
        alert('Success!')
    }

    return (
        <>
            <Navbar />
            <div className='cart-container'>
                <h1 className='heading-cart'>Cart</h1>
                {!product ? <p className='noti-cart' >Your cart is empty.</p> : product.map((prod, index) => {
                    subtotal.current = subtotal.current + prod.subtotal;
                    return (
                        <ProductCart
                            title={prod.title}
                            price={prod.price}
                            imgURL={prod.imageURL}
                            amount={prod.amount}
                            subtotal={prod.subtotal}
                            key={index}
                        />
                    )
                })}
                <div>
                    <h2>Subtotal: $ {subtotal.current}</h2>
                    <button onClick={buyHandle}>Buy</button>
                </div>
            </div>

        </>
    )
}

export default CartPage