import axios from 'axios';
import React,{useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import style from './Cats.module.css'

export default function Cats() {
    let [cats, setCats] =useState([]);
    let  getcats= async()=>{
        let {data} =await axios.get('https://fakestoreapi.com/products/categories');
        setCats(data);
    }
    useEffect(() => {
        getcats();
    }, [])
  return (
    <div className={style.cats}>
        <h2>All categories</h2>
        <div className='d-flex justify-content-between my-5'>
        {cats.map((cat,index)=>
<div className='cat' key={index}>
   <Link to={`/category/${cat}`} className='btn btn-primary'>{cat}</Link> 
</div>
        )}
        </div>
    </div>
  )
}
