import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    let param =useParams()
    
    console.log(param);
    let [product,setProduct]= useState('')
    let getProduct=async ()=>{
let {data}=await axios.get(`https://fakestoreapi.com/products/${param.id}`)
setProduct(data)
    }
    useEffect(()=>{
        getProduct()
    },[])
  return (
    <div>
        <img src={product.image} alt="" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        
    </div>
  )
}
