import React,{useState} from 'react'
import axiosInstance from '../helper/axioinstance'
import {  useNavigate} from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';


const Product = () => {
    let navigate=useNavigate()
    let[pname,setPname]=useState("")
    let[pprice,setPrice]=useState("")
    let[pqty,setPqty]=useState("")
    
    const handleSubmit= (e)=>{
        e.preventDefault()
        let payload={
            pname,pprice,pqty
        }
        axiosInstance.post("/posts",payload)
        toast.success("product Addedd");
        navigate("/cart")
    }  

  return (
    <div className='product'>
        <form action="" method="post" >
            <fieldset>
                <legend>Product Details:</legend><br/><br/>
                Name : &nbsp;&nbsp;
                <input type="text" onChange={(e)=>{setPname(e.target.value)}} ></input>
                <br/><br/>
                Price : &nbsp;&nbsp;
                <input type="number" onChange={(e)=>{setPrice(e.target.value)}}></input>
                <br/><br/>
                Qty : &nbsp;&nbsp;
                <input type="number" name="quantity" id="age" value={pqty
                } onChange={(e)=>{setPqty(e.target.value)}}
                ></input><br /><br />
                <button onClick= {handleSubmit}>ADD TO CART</button>
                
            </fieldset>
        </form>
    </div>
  )
}


export default Product
