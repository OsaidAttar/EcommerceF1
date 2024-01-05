import axios from 'axios'
import React,{useState,useEffect} from 'react'
import style from'./Product.module.css'

export default function Product() {
    let [product,setProduct]=useState([])
    let [search,setSearch] =useState('')
    let getProduct=async ()=>{
let {data }=await axios.get('https://fakestoreapi.com/products');
setProduct(data);
console.log(data);


    }
    useEffect(() => {
    getProduct();
    }, [])
  return (
    <div className={style.products}>
        <h2>All Product</h2>
        <h3 className='mb-4'>search by title : </h3>
        <input type="search" className='form-control' name='pname' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <div className='d-flex flex-wrap my-5'>
          {product.filter((product)=>{
            if(search===''){
              return product;
            }
            else if(product.title.toLowerCase().includes(search.toLowerCase())){
return product;
            }
          }).map((product)=>
            <div className='col-lg-3 mt-5'>
<div className='product card'>
  <div>
  <img src={product.image} class="card-img-top" alt={product.title} />
  <div class="card-body">
    <h3 class="card-title">{product.title}</h3>
    <p>$ {product.price} </p>
  </div>
</div>
</div>
</div>
)}

            
        </div>
    </div>
  )
}
