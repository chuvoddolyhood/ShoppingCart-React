import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../Loading';
import './detailProduct.css'
import Navbar from '../navigation/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { auth, db } from '../config/Config';

const DetailProduct = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState()
    const [loading, setLoading] = useState(true)
    const [uid, setUid] = useState('')
    const [amount, setAmount] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        const getDetail = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            console.log(data);
            setDetail(data);
            setLoading(false);
        }
        getDetail();
    }, [])

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            // console.log("abc:" + user);
            if (user) {
                setUid(user.uid)
            } else {
                setUid('')
            }
        })
    }, [])

    const addToCart = async (id, title, price, image) => {
        if (uid) {
            amount == 0 ? alert('Please to choose amount of product.') :
                await addDoc(collection(db, "cart"), { id: id, title: title, amount: amount, price: price, subtotal: price * amount, imageURL: image, uid: uid }).then(() => {
                    alert("Success!")
                }).catch((error) => {
                    alert(error.message)
                });
        } else {
            navigate("/logIn");
        }

        // await setDoc(doc(db, "cart", uid), { id: id, title: title, price: price, imageURL: image }).then(() => {
        //     alert("Success!")
        // }).catch((error) => {
        //     alert(error.message)
        // });
    }

    const ShowDetailProduct = () => {
        return (
            <div className='detail-product'>
                <div className='img-detail-product'>
                    <img src={detail.image} alt={detail.title} />
                </div>
                <div className='info-detail-product'>
                    <h4>{detail.category}</h4>
                    <h1>{detail.title}</h1>
                    <p className='description'>{detail.description}</p>
                    <p>{detail.rating.rate} <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon></p>
                    <p className='price'>$ {detail.price}</p>
                    <div className='amount-control'>
                        <button onClick={() => { amount <= 0 ? setAmount(0) : setAmount(prev => prev - 1) }}>-</button>
                        <p>{amount}</p>
                        <button onClick={() => { setAmount(prev => prev + 1) }}>+</button>
                    </div>
                    <div className='button-group'>
                        <a onClick={() => addToCart(detail.id, detail.title, detail.price, detail.image)} className='btn-detail btn-add-cart'>Add to cart</a>
                        <a onClick={() => addToCart(detail.id, detail.title, detail.price, detail.image)} className='btn-detail btn-go-cart'>Go to cart</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            {loading ? <Loading /> : <ShowDetailProduct />}
        </>
    )
}

export default DetailProduct