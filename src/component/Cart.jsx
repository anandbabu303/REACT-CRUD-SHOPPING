import React, { useEffect, useState } from 'react'

import axiosInstance from '../helper/axioinstance'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
const Cart = () => {
  let [product ,setProduct]=useState([])

  useEffect(()=>{
    let fetchdata=async ()=>{
      let {data}=await axiosInstance.get("/posts")
      setProduct(data)
    }
    fetchdata()
  },[])
  let handleDelete = (id)=>{
    console.log(id);
    axiosInstance.delete(`/posts/${id}`)
    toast.error(`product removed`)

    window.location.assign("/cart")
  }
  return (
    <div className='container'>
        {product.map((x)=>{
          return(
            <div className="card">
          <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${x.pname}`} alt="avatar"/>

          <h3>Product Name:{x.pname}</h3>
          <h3>Product Price:{x.pprice}</h3>
          <h3>Product Qty:{x.pqty}</h3>
          <div className="btn-block">
            <button>
                 <Link to={`/update/${x.id}`}>Update</Link>
            </button>
            <button onClick={()=>{
                          handleDelete(x.id)
                      }}>Delete</button>
          </div>
          </div>
          )
        })

        }

    </div>
  )
}

export default Cart
