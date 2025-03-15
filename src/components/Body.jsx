import React, { useEffect, useState } from 'react'
import Card from './Card'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
const Body = () => {

  const [products,setProducts]=useState([])
  const [text,settext]=useState("")

  useEffect(()=>{
    const fetchData=async ()=>{
      let res=await fetch("https://dummyjson.com/products");
      let data=await res.json()
      setProducts(data.products)
    }
    fetchData()
  },[])

function filterProduct(){
  setProducts(products.filter((item)=>item.rating>4))
}

function inputval(e){
settext(e.target.value)
}

function searchFun(){
  setProducts(products.filter((item)=>item.title.toLowerCase().includes(text.toLowerCase())))
  settext("")
}

  return products.length===0?(<Shimmer/>) :  (
    <div className='body-content'>
    <div className='search-box'>
    <input type='text' placeholder='Find Your Products...' onChange={inputval} value={text}/>
    <button className='popularBtn' onClick={searchFun}> Search Product </button>
    <button className='popularBtn' onClick={filterProduct} > Popular Products </button>
    </div>
<div className='card-Container'>
{products.map((item,idx)=>(
  <Link to={`/product/${item.id}`} key={idx}>
      <Card data={item}  />
  </Link>
))}
</div>
    </div>
  )
}

export default Body