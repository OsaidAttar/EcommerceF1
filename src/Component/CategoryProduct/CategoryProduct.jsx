import axios from 'axios';
import React ,{useState ,useEffect}from 'react'
import { Link, useParams } from 'react-router-dom'
import style from './CategoryProduct.module.css'
export default function CategoryProduct() {
    let [catProdut,setCatProduct]=useState([])
let params=useParams()
console.log(params);
let getProduct= async()=>{
let {data}=await axios.get(`https://fakestoreapi.com/products/category/${params.id}`)
setCatProduct(data);
}
useEffect(() => {
    getProduct();
}, [])
  return (
    <div>
         <div className={style.products}>
        <h2>{params.id} Product</h2>
        <div className='d-flex flex-wrap my-5'>
            {catProdut.map((product)=>
            <div className='col-lg-3 mt-5'>
<div className='product card'>
  <div>
  <img src={product.image} class="card-img-top" alt={product.title} />
  <div class="card-body">
    <h3 class="card-title">{product.title}</h3>
    <p>$ {product.price} </p>
    <Link to={`/product/${product.id}`} className='btn btn-danger'>details</Link>
  </div>
</div>
</div>
</div>
)}

            
        </div>
    </div>
    </div>
  )
}
