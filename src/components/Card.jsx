import React from 'react'

const Card = ({data}) => {
  const{availabilityStatus,category,discountPercentage,thumbnail,price,rating,stock,title,brand}=data

  return (
    <>
    <div className='card'>
  <img src={thumbnail} />
    <h3>{title}</h3>
    <h4>Brand: {brand}</h4>
    <span className='category'>{category}</span>
    <p>Price : <span className='line'>{price}$</span> {discountPercentage} $</p>
    <p>Rating: {rating}</p>
    <p>Stock: {availabilityStatus} ({stock})</p>

    </div>

    </>
  )
}

export default Card