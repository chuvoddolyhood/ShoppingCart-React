import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
    const [productName, setProductName] = useState()
    const [productPrice, setProductPrice] = useState(0)
    const [productImg, setProductImg] = useState(null)
    const [error, setError] = useState()

    const types = ['image/png', 'image/jpeg']

    const imghandle = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('');
        } else {
            setProductImg(null)
            setError('Please select a valid image type png or jpeg')
        }
    }

    const addProduct = (e) => {
        e.preventDefault();
        console.log(productName, productPrice, productImg);
    }

    return (
        <div className='addProduct'>
            <h1>Add product</h1>
            <form autoComplete='off' onSubmit={addProduct}>
                <label htmlFor="product-name">Product name</label>
                <input type="text" required
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                />
                <label htmlFor="product-price">Product price</label>
                <input type="number" required
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                />
                <input type="file" onChange={imghandle} />
                <button>Add</button>
            </form>
            {error && <span>{error}</span>}
        </div>
    )
}

export default AddProduct