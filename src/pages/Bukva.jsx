import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiClient from '../axios/ApiClient';
import ProductList from '../components/ProductList/ProductList';
import './Bukva.css'
import Tamga from '../components/Tamga/Tamga'


function Bukva() {
  const { valuu } = useParams();  
  const [product, setProduct] = useState([]);


  async function getTamga() {
    try {
      const res = await ApiClient.get(`/search.php?f=${valuu.toLowerCase()}`);  
      console.log(res);
      setProduct(res.data.meals);  
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTamga();
  }, [valuu]);

  return (
    <div className='bukva'>
      <h1>Блюда на букву {valuu}</h1>
      <ProductList data={product} /> 
      <Tamga/> 
</div>
  );
}

export default Bukva;
