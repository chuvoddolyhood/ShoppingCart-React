import React from 'react'
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const ListProduct = () => {
    const [api, setApi] = useState("https://fakestoreapi.com/products/")
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(api)
            const data = await response.json()
            setProduct(data)
            console.log(data);
            setLoading(false)
        }
        getProducts()
    }, [api])

    const ShowProduct = () => {
        return (
            <Fade bottom cascade>
                <div className='all-container'>
                    {product.map((pro, index) => {
                        return (
                            <div key={index} className="product">
                                <p>{pro.title}</p>
                                <img src={pro.image} alt="" />
                                <p>{pro.price} $</p>
                                <p>{pro.rating.rate}</p>
                                {
                                    [...Array((pro.rating.rate).toFixed())].map((_, index) => {
                                        // console.log((pro.rating.rate).toFixed());
                                        return <FontAwesomeIcon key={index} icon={faStar} ></FontAwesomeIcon>
                                    })
                                }
                                <NavLink to="/products">View more</NavLink>
                            </div>
                        )
                    })}
                </div>
            </Fade>
        )
    }

    // const filterProduct = (cat) => {
    //     const updateList = product.filter((x) => x.category === cat)
    //     setProduct(updateList)
    // }

    return (
        <div className='app-contaner'>
            <div className='category'>
                <button onClick={() => setApi('https://fakestoreapi.com/products/')}>All</button>
                <button onClick={() => setApi("https://fakestoreapi.com/products/category/men's%20clothing")}>Men's Clothing</button>
                <button onClick={() => setApi("https://fakestoreapi.com/products/category/women's%20clothing")}>Women's Clothing</button>
                <button onClick={() => setApi("https://fakestoreapi.com/products/category/jewelery")}>Jewelery</button>
                <button onClick={() => setApi('https://fakestoreapi.com/products/category/electronics')}>Electronics</button>
            </div>
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    )
}

export default ListProduct