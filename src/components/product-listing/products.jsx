import React from 'react'
import { products } from '../../assets/images/data/products';
import ProductItem from './product-item';
import './products.css'

function Products() {
  console.log(products);
  return (
    <div className='product-container'>
      {products.map((item)=>{
        return <ProductItem props={item}/>
      })}
    </div>
  )
}

export default Products