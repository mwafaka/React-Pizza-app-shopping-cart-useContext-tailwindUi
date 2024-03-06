// DataFetchingComponent.js
import { useState, useEffect } from 'react';
import {  useContext } from "react"
import { AppContext } from '../CreateContext'
import data from '../../data.js'

const DataFetchingComponent = () => {
  const {shopping, setShopping} = useContext(AppContext)
  const add=(item)=>{
    // shopping.map(product=>product.name ==item.name?item.)
    setShopping([...shopping,item])
  }

  
  return (
    <div className='flex flex-wrap justify-center '>
     {data.map(item =>
 <div key={item.name} onClick={()=>add(item)} className="max-w-sm w-56 rounded overflow-hidden shadow-lg m-10">
 <img className="w-32 h-32 rounded-full bg-cover bg-center m-auto" src={item.image} alt="pizza"/>
 <div className="px-6 py-4 text-center">
   
   <div className="font-bold text-l mb-2">{item.name}</div>
   <div className="font-bold text-red-700 text-sm mb-2">{item.price} €</div>
   <p className="text-gray-500 text-sm">
     {item.description}
   </p>
 </div>


</div>)}
    </div>
    );
};

export default DataFetchingComponent;
