import React from 'react'
import Navbar from '../navigation/Navbar'
import ListProduct from '../products/ListProduct'
import Intro from './Intro'

const Home = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <ListProduct />
        </>
    )
}

export default Home