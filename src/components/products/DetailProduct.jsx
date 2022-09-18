import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Loading from '../Loading';
import './detailProduct.css'
import Navbar from '../navigation/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const DetailProduct = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState()
    const [loading, setLoading] = useState(true)

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

    const ShowDetailProduct = () => {
        return (
            <div className='detail-product'>
                <div className='img-detail-product'>
                    <img src={detail.image} alt={detail.title} />
                </div>
                <div className='info-detail-product'>
                    <h4>{detail.category}</h4>
                    <h1>{detail.title}</h1>
                    <p>{detail.rating.rate} <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon></p>
                    <p className='price'>$ {detail.price}</p>
                    <p className='description'>{detail.description}</p>
                    <div className='button-group'>
                        <a className='btn-detail btn-add-cart'>Add to cart</a>
                        <a className='btn-detail btn-go-cart'>Go to cart</a>
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