import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import productData from '../Product.json'

const P_Details = () => {
    let value=useParams();
    console.log("Details: ",value);

    const [singleProduct,changeState]=useState({
        Prod:[]
    })
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${value.id}`)
        .then(res=>{
            console.log("Axios res: ",res.data);
            changeState({Prod:res.data})
        })
        .catch(err=>{
            console.log("Axios error: ",err);
        })
    },[changeState])

 

    return (
        <div>
            {/* <h1>{singleProduct.s_id}</h1>
            <h5>{singleProduct.company}</h5> */}

            <img src={singleProduct.Prod.image} alt="product img" className='prod_img'/>
            <h1>{singleProduct.Prod.id}</h1>
        </div>
    )
}

export default P_Details;

