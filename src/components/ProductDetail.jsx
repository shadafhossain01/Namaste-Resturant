import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {productId}=useParams();
    const id=parseInt(productId)

      const [product,setProduct]=useState({})
      useEffect(()=>{
        const fetchData=async ()=>{
          let res=await fetch("https://dummyjson.com/products");
          let data=await res.json()
          setProduct(data.products[id-1])
        }
        fetchData()
      },[])


  return (
    <div className='details'>
    <img src={product.thumbnail} />
    <h1>Product Name: {product.title}</h1>
    <p>Description:{product.description}</p>
    <h2>Rating :{product.rating}</h2>
    <h3>Price: {product.price}</h3>

    </div>
  )
}

export default ProductDetail